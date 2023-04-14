import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: true,
    darkTheme: false
}

const topbarSlice = createSlice({
    name: "topbar",
    initialState,
    reducers: {
        handleClose(state) {
            state.open = false
        },
        handleToggleTheme(state) {
            // state.darkTheme = !state.darkTheme
        }
    }
})

export const {
    handleClose,
    handleToggleTheme
} = topbarSlice.actions

export default topbarSlice.reducer