import React from 'react'
import '../../styles/ViewArticle.scss'
import { Content, Leftbar } from './Components'

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
