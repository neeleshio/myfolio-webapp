import React from 'react'
import { Editor } from './Components'
import './NewArticleStyles.scss'
import { handleOpenModal } from '../../redux/Modal/ModalReducer'
import { useDispatch } from 'react-redux'

function NewArticle() {
    const dispatch = useDispatch()

    dispatch(handleOpenModal({ value: true }))

    return (
        <div id="newArticle">
            <Editor />
        </div>
    )
}

export default NewArticle
