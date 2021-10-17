import { createAction } from '@reduxjs/toolkit';

const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
const LOWER_HEX_REGEX = /^0x[a-f0-9]*$/;
export function toCallKey(call) {
  if (!ADDRESS_REGEX.test(call.address)) {
    throw new Error(`Invalid address: ${call.address}`);
  }
  if (!LOWER_HEX_REGEX.test(call.callData)) {
    throw new Error(`Invalid hex: ${call.callData}`);
  }
  let key = `${call.address}-${call.callData}`;
  if (call.gasRequired) {
    if (!Number.isSafeInteger(call.gasRequired)) {
      throw new Error(`Invalid number: ${call.gasRequired}`);
    }
    key += `-${call.gasRequired}`;
  }
  return key;
}

export function parseCallKey(callKey) {
  const pcs = callKey.split('-');
  if (![2, 3].includes(pcs.length)) {
    throw new Error(`Invalid call key: ${callKey}`);
  }
  return {
    address: pcs[0],
    callData: pcs[1],
    ...(pcs[2] ? { gasRequired: Number.parseInt(pcs[2]) } : {})
  };
}

export const addMulticallListeners = createAction('multicall/addMulticallListeners');
export const removeMulticallListeners = createAction('multicall/removeMulticallListeners');
export const fetchingMulticallResults = createAction('multicall/fetchingMulticallResults');
export const errorFetchingMulticallResults = createAction('multicall/errorFetchingMulticallResults');
export const updateMulticallResults = createAction('multicall/updateMulticallResults');
