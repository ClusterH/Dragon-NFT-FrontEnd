import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';

import application from './application/reducer';
import multicall from './multicall/reducer';

import { updateVersion } from './global/actions';

const PERSISTED_KEYS = ['user', 'transactions', 'lists'];

const store = configureStore({
  reducer: {
    application,
    multicall
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS, debounce: 1000 })],
  preloadedState: load({ states: PERSISTED_KEYS })
});

store.dispatch(updateVersion());

export default store;
