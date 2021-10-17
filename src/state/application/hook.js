import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { ApplicationModal, setOpenModal } from './actions';

export function useBlockNumber() {
  const { chainId } = useActiveWeb3React();
  return useSelector((state) => state.application.blockNumber[chainId ?? -1]);
}

export function useModalOpen(modal) {
  const openModal = useSelector((state) => {
    return state.application.openModal;
  });

  return openModal === modal;
}

export function useToggleModal(modal) {
  modal = modal ? modal : ApplicationModal.WALLET;
  const open = useModalOpen(modal);
  const dispatch = useDispatch();

  return useCallback(() => {
    return dispatch(setOpenModal(open ? null : modal));
  }, [dispatch, modal, open]);
}

export function useWalletModalToggle() {
  return useToggleModal(ApplicationModal.WALLET);
}
