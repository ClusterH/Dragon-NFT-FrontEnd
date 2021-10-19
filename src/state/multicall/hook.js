import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { addMulticallListeners, parseCallKey, removeMulticallListeners, toCallKey } from './actions';

function isMethodArg(x) {
  return ['string', 'number'].indexOf(typeof x) !== -1;
}

function isValidMethodArgs(x) {
  return x === undefined || (Array.isArray(x) && x.every((xi) => isMethodArg(xi) || (Array.isArray(xi) && xi.every(isMethodArg))));
}

// use this options object
export const NEVER_RELOAD = {
  blocksPerFetch: Infinity
};

const INVALID_RESULT = { valid: false, blockNumber: undefined, data: undefined };

const INVALID_CALL_STATE = { valid: false, result: undefined, loading: false, error: false };
const LOADING_CALL_STATE = { valid: true, result: undefined, loading: true, error: false };

// the lowest level call for subscribing to contract data
function useCallsData(calls, options) {
  const { chainId } = useActiveWeb3React();
  const callResults = useSelector((state) => state.multicall.callResults);

  const dispatch = useDispatch();

  const serializedCallKeys = useMemo(
    () =>
      JSON.stringify(
        calls
          ?.filter((c) => Boolean(c))
          ?.map(toCallKey)
          ?.sort() ?? []
      ),
    [calls]
  );

  // update listeners when there is an actual change that persists for at least 100ms
  useEffect(() => {
    const callKeys = JSON.parse(serializedCallKeys);
    if (!chainId || callKeys.length === 0) return undefined;
    const calls = callKeys.map((key) => parseCallKey(key));
    dispatch(
      addMulticallListeners({
        chainId,
        calls,
        options
      })
    );

    return () => {
      dispatch(
        removeMulticallListeners({
          chainId,
          calls,
          options
        })
      );
    };
  }, [chainId, dispatch, options, serializedCallKeys]);

  return useMemo(
    () =>
      calls.map((call) => {
        if (!chainId || !call) return INVALID_RESULT;

        const result = callResults[chainId]?.[toCallKey(call)];
        let data;
        if (result?.data && result?.data !== '0x') {
          data = result.data;
        }

        return { valid: true, data, blockNumber: result?.blockNumber };
      }),
    [callResults, calls, chainId]
  );
}

function toCallState(callResult, contractInterface, fragment) {
  if (!callResult) return INVALID_CALL_STATE;
  const { valid, data, blockNumber } = callResult;
  if (!valid) return INVALID_CALL_STATE;
  if (valid && !blockNumber) return LOADING_CALL_STATE;
  if (!contractInterface || !fragment) return LOADING_CALL_STATE;
  const success = data && data.length > 2;
  let result = undefined;
  if (success && data) {
    try {
      result = contractInterface.decodeFunctionResult(fragment, data);
    } catch (error) {
      console.debug('Result data parsing failed', fragment, data);
      return {
        valid: true,
        loading: false,
        error: true,
        result
      };
    }
  }
  return {
    valid: true,
    loading: false,
    result: result,
    error: !success
  };
}

export function useSingleContractMultipleData(contract, methodName, callInputs, options, gasRequired) {
  const fragment = useMemo(() => contract?.interface?.getFunction(methodName), [contract, methodName]);

  const calls = useMemo(
    () =>
      contract && fragment && callInputs?.length > 0 && callInputs.every((inputs) => isValidMethodArgs(inputs))
        ? callInputs.map((inputs) => {
            return {
              address: contract.address,
              callData: contract.interface.encodeFunctionData(fragment, inputs),
              ...(gasRequired ? { gasRequired } : {})
            };
          })
        : [],
    [contract, fragment, callInputs, gasRequired]
  );

  const results = useCallsData(calls, options);

  return useMemo(() => {
    return results.map((result) => toCallState(result, contract?.interface, fragment));
  }, [fragment, contract, results]);
}

export function useMultipleContractSingleData(addresses, contractInterface, methodName, callInputs, options, gasRequired) {
  const fragment = useMemo(() => contractInterface.getFunction(methodName), [contractInterface, methodName]);
  const callData = useMemo(
    () => (fragment && isValidMethodArgs(callInputs) ? contractInterface.encodeFunctionData(fragment, callInputs) : undefined),
    [callInputs, contractInterface, fragment]
  );

  const calls = useMemo(
    () =>
      fragment && addresses && addresses.length > 0 && callData
        ? addresses.map((address) => {
            return address && callData
              ? {
                  address,
                  callData,
                  ...(gasRequired ? { gasRequired } : {})
                }
              : undefined;
          })
        : [],
    [addresses, callData, fragment, gasRequired]
  );

  const results = useCallsData(calls, options);

  return useMemo(() => {
    return results.map((result) => toCallState(result, contractInterface, fragment));
  }, [fragment, results, contractInterface]);
}

export function useSingleCallResult(contract, methodName, inputs, options, gasRequired) {
  const fragment = useMemo(() => contract?.interface?.getFunction(methodName), [contract, methodName]);

  const calls = useMemo(() => {
    return contract && fragment && isValidMethodArgs(inputs)
      ? [
          {
            address: contract.address,
            callData: contract.interface.encodeFunctionData(fragment, inputs),
            ...(gasRequired ? { gasRequired } : {})
          }
        ]
      : [];
  }, [contract, fragment, inputs, gasRequired]);

  const result = useCallsData(calls, options)[0];

  return useMemo(() => {
    return toCallState(result, contract?.interface, fragment);
  }, [result, contract, fragment]);
}
