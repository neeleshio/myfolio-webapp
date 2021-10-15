import React from 'react'
import { ArticleCard, SideFilterbar } from './Components'
import '../../styles/Journal.scss'

function Journal() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return (
        <div id="journal">
            <ArticleCard />
            <SideFilterbar />
        </div>
    )
}

export default Journal
