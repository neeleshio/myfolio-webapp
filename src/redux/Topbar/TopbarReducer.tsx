import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: true
}

const topbarSlice = createSlice({
    name: "topbar",
    initialState,
    reducers: {
        handleClose(state) {
            state.open = false
        }
    }
})

export const {
    handleClose
} = topbarSlice.actions

export default topbarSlice.reducer