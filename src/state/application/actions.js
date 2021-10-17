import { createAction } from '@reduxjs/toolkit';

export const ApplicationModal = {
  WALLET: 0,
  SETTINGS: 1
};

export const updateBlockNumber = createAction('application/updateBlockNumber');
export const setOpenModal = createAction('application/setOpenModal');
export const removePopup = createAction('application/removePopup');
