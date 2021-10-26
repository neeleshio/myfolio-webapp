import { configureStore } from '@reduxjs/toolkit'
import modal from './Modal/ModalReducer'
import viewArticle from './ViewArticle/ViewArticleReducer'

const store = configureStore({
    reducer: {
        modal,
        viewArticle
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;