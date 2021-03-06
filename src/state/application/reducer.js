import { createReducer } from '@reduxjs/toolkit';
import { updateBlockNumber, ApplicationModal, setOpenModal } from './actions';

const initialState = {
  blockNumber: {},
  openModal: ApplicationModal.WALLET
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateBlockNumber, (state, action) => {
      const { chainId, blockNumber } = action.payload;
      if (typeof state.blockNumber[chainId] !== 'number') {
        state.blockNumber[chainId] = blockNumber;
      } else {
        state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId]);
      }
    })
    .addCase(setOpenModal, (state, action) => {
      state.openModal = action.payload;
    })
);
