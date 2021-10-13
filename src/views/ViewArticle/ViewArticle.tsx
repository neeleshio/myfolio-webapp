import React from 'react'
import '../../styles/ViewArticle.scss'
import { Content, Leftbar } from './Components'

function ViewArticle() {
    return (
        <div id="viewArticle">
            <Leftbar />
            <Content />
        </div>
    )
}

export default ViewArticle
