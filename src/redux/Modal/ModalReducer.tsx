import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    title: "",
    button: ""
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleOpenModal(state, { payload }) {
            state.open = payload.value
            state.title = payload.title
            state.button = payload.button
        }
    }
})

export const {
    handleOpenModal
} = modalSlice.actions

export default modalSlice.reducer;
