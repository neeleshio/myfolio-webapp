import React from 'react'

function ArticleCard() {
    return (
        <div id="articleCard">
            <div className="article_card">
                <div className="article_card--left">
                    <div className="topic_container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react" />
                        <h3>React Hooks</h3>
                    </div>
                    <div className="headline_container">
                        <h1>How I Made $10,2222 in a Single Month of Freelance Writing</h1>
                        <h3>I only worked 16 hrs per week</h3>
                    </div>
                    <div className="meta_info">
                        <h4>Aug 3</h4>
                        <h4>5 min read</h4>
                        <h4 className="keyword">Javascript</h4>
                    </div>
                </div>
                <div className="article_card--right">
                    <img src="https://fireship.io/courses/react-next-firebase/img/featured.jpg" alt="mobile" />
                </div>
            </div>
        </div>

    )
}

export default ArticleCard
