import React from 'react'
import { Content, Leftbar } from './Components'
import './ViewArticleStyles.scss'

function ViewArticle() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return (
        <div id="viewArticle">
            <Leftbar />
            <Content />
        </div>
    )
}

export default ViewArticle
