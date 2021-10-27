import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postedOn: "",
    difficulty: "",
    topic: "",
    title: "",
    mainImg: "",
    keywords: [],
    likes: 0
}

const viewArticleSlice = createSlice({
    name: "viewArticle",
    initialState,
    reducers: {
        handleArticleData(state, { payload }) {
            const { data } = payload

            state.postedOn = data["created"]
            state.difficulty = data["difficulty"]
            state.topic = data["topic"]
            state.title = data["title"]
            state.mainImg = data["mainImg"]
            state.keywords = data["keywords"]
        },

        handleArticleLikes(state, { payload }) {
            state.likes = payload["likes"]
        }
    }
})

export const {
    handleArticleData,
    handleArticleLikes
} = viewArticleSlice.actions

export default viewArticleSlice.reducer