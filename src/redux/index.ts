import { configureStore } from '@reduxjs/toolkit'
import modal from './Modal/ModalReducer'

const store = configureStore({
    reducer: {
        modal
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;