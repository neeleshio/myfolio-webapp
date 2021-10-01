import React from 'react'
import { ArticleCard, SideFilterbar } from './Components'
import '../../styles/Journal.scss'

function Journal() {
    return (
        <div id="journal">
            <ArticleCard />
            <SideFilterbar />
        </div>
    )
}

export default Journal
