import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './Modal/ModalReducer'

const store = configureStore({
    reducer: {
        ModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;