import React, { useState, useEffect } from 'react'
import './ContentStyles.scss'
import Axios from '../../../../axios';
import { useSelector, useDispatch } from 'react-redux'
import { handleArticleLikes } from '../../../../redux/ViewArticle/ViewArticleReducer'
import ReactEmbedGist from 'react-embed-gist';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import _ from 'lodash';

function Content() {
    const [articleContent, setArticleContent] = useState([])
    const [article, setArticle] = useState<any>([])
    const dispatch = useDispatch()

    useEffect(() => {
        const path = window.location.pathname
        const id = path.split('/')[3]

        Axios.get(`/article-content/${id}`).then(res => {
            setArticle(res?.["data"]?.[0]?.["article"])
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
                return <ReactEmbedGist gist={res?.["data"]?.["url"]} />
            case 'ol':
                return (
                    <ol>
                        {res?.["data"]?.["items"].map((el: any, index: number) => (
                            <div>
                                <span>{index + 1}.</span><li> {el}</li>
                            </div>
                        ))}
                    </ol>
                )
            case 'ul':
                return (
                    <ul>
                        {res?.["data"]?.["items"].map((el: any, index: number) => (
                            <div>
                                <span>●</span><li> {el}</li>
                            </div>
                        ))}
                    </ul>
                )
            case 'img':
                return <img src={res?.["data"]?.["url"]} alt="react" />
            case 'q':
                return <q><p>{res?.["data"]?.["text"]}</p></q>
        }
    }

    return (
        (articleContent.length > 0 && !_.isEmpty(article)) ? (
            <div id="content">
                <div className="content_wrapper">
                    <img className="imgg" src={article?.["mainImg"]} alt="main-img" />
                    <div className="content_main">
                        <div className="topic_wrapper">
                            <button className={`diff-${article?.["difficulty"]}`}></button>
                            <div>
                                <h3>{article?.["topic"]}</h3>
                                <h4>{article?.["created"]}</h4>
                            </div>
                        </div>
                        <div className="content_body_wrapper">
                            <h1>{article?.["title"]}</h1>

                            <div className="content_body">
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
        ) : (
            <div id="content">
                <div className="content_wrapper">
                    <Skeleton className="imgg no-line" />
                    <div className="content_main">
                        <Skeleton width={200} height={30} />
                        <div className="content_body_wrapper" style={{ marginTop: 10 }}>
                            <Skeleton height={50} />
                            <br />
                            <div className="content_body">
                                <Skeleton />
                                <Skeleton width={300} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )

    )
}

export default Content
