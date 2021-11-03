import { configureStore } from '@reduxjs/toolkit'
import modal from './Modal/ModalReducer'
import viewArticle from './ViewArticle/ViewArticleReducer'
import topbar from './Topbar/TopbarReducer'

const store = configureStore({
    reducer: {
        modal,
        viewArticle,
        topbar
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;