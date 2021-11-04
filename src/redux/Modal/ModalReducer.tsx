import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    title: "",
    button: "",
    message: "",
    fix: {},
    reportLink: "",
    buttonName: "",
    buttonLink: "",
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleOpenModal(state, { payload }) {
            state.open = payload.open
            state.title = payload.title
            state.message = payload.message
            state.fix = payload.fix
            state.reportLink = payload.reportLink
            state.reportLink = payload.reportLink
            state.buttonName = payload.buttonName
            state.buttonLink = payload.buttonLink
        },

        handleCloseModal(state, { payload }) {
            state.open = payload.value
        }
    }
})

export const {
    handleOpenModal,
    handleCloseModal
} = modalSlice.actions

export default modalSlice.reducer;
