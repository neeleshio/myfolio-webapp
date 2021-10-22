import React from 'react'
import { Editor } from './Components'
import './NewArticleStyles.scss'
import { handleOpenModal } from '../../redux/Modal/ModalReducer'
import { useDispatch } from 'react-redux'
import { useModal } from '../../customHooks'

function NewArticle() {
    const dispatch = useDispatch()

    useModal('Somrthing went erong', 'Back')

    // dispatch(handleOpenModal({ value: true }))

    return (
        <div id="newArticle">
            <Editor />
        </div>
    )
}

export default NewArticle
