import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleOpenModal(state, { payload }) {
            state.open = payload.value
        }
    }
})

export const {
    handleOpenModal
} = modalSlice.actions

export default modalSlice.reducer;
