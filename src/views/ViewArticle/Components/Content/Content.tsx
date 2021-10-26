import React, { useState, useEffect } from 'react'
import './ContentStyles.scss'
import Axios from '../../../../axios';
import { useSelector, useDispatch } from 'react-redux'
import { handleArticleLikes } from '../../../../redux/ViewArticle/ViewArticleReducer'
import ReactEmbedGist from 'react-embed-gist';

function Content() {
    const [articleContent, setArticleContent] = useState([])
    const state = useSelector((state: any) => state.viewArticle)
    const dispatch = useDispatch()

    useEffect(() => {
        const path = window.location.pathname
        const id = path.split('/')[3]

        Axios.get(`/article-content/${id}`).then(res => {
            setArticleContent(res?.["data"]?.[0]?.["content"])
            const likes = res?.["data"]?.[0]?.["likes"]

            dispatch(handleArticleLikes({ likes: likes }))
        })
    }, [])

    const handleSwitchContent = (res: any) => {
        switch (res.type) {
            case 'h':
                return (res?.["data"]?.["level"] <= 2 ?
                    (
                        <h2>
                            {res?.["data"]?.["text"]}
                        </h2>
                    ) :
                    (
                        res?.["data"]?.["level"] === 3 ?
                            <h3>
                                {res?.["data"]?.["text"]}
                            </h3> :
                            (
                                res?.["data"]?.["level"] === 4 &&
                                <h4>
                                    {res?.["data"]?.["text"]}
                                </h4>
                            )
                    ))
            case 'p':
                return <p>{res?.["data"]?.["text"]}</p>
            case 'cb':
                return <ReactEmbedGist gist="vbresan/11b9b12a510a8996d58e92347e683acc" />
            case 'ol':
                return (
                    <ol>
                        {res?.["data"]?.["items"].map((el: any, index: number) => (
                            <li>{index + 1}. {el}</li>
                        ))}
                    </ol>
                )
            case 'ul':
                return (
                    <ul>
                        {res?.["data"]?.["items"].map((el: any, index: number) => (
                            <li>● {el}</li>
                        ))}
                    </ul>
                )
            case 'img':
                return <img src={res?.["data"]?.["url"]} alt="react" />
            case 'q':
                return <q>{res?.["data"]?.["text"]}</q>
        }
    }

    return (
        <div id="content">
            <div className="content_wrapper">
                <img src={state?.["mainImg"]} alt="main-img" />
                <div className="content_main">
                    <div className="topic_wrapper">
                        <img src={state?.["topicImg"]} alt="topic-img" />
                        <div>
                            <h3>{state?.["topic"]}</h3>
                            <h4>{state?.["postedOn"]}</h4>
                        </div>
                    </div>
                    <div className="content_body">
                        <h1>{state?.["title"]}</h1>

                        <div>
                            {articleContent && (
                                Object.values(articleContent).map((res: any) => (
                                    handleSwitchContent(res)
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
