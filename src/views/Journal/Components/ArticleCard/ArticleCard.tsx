import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './ArticleCardStyles.scss'
import Axios from '../../../../axios'
import { handleArticleData } from '../../../../redux/ViewArticle/ViewArticleReducer'

function ArticleCard() {
	const history = useHistory();
	const dispatch = useDispatch();

	const [articles, setArticles] = useState([])

	useEffect(() => {
		Axios.get('/articles').then(res => {
			setArticles(res["data"])
		})
	}, [])

	const handleClickArticle = (article: any) => {
		const titl = article["title"].replaceAll(' ', '-');
		const id = article["_id"]
		history.push(`journal/${titl}/${id}`);

		dispatch(handleArticleData({ data: article }))
	};

	return (
		<div id="articleCard">
			{Object.values(articles).map((article: any) => (
				<div
					className="article_card"
					onClick={(e: React.MouseEvent<HTMLElement>) =>
						handleClickArticle(article)}
				>
					<div className="article_card--left">
						<div className="topic_container">
							<img src={article?.["topicImg"]} alt="react" />
							<h3>{article?.["topic"]}</h3>
						</div>
						<div className="headline_container">
							<h1>{article?.["title"]}</h1>
							{/* <h3>{article.tagline}</h3> */}
							<div>
								{article?.["keywords"].map((res: any) =>
									<h4 className="keyword">
										{res}
									</h4>
								)}
							</div>
						</div>
						<div className="meta_info">
							<h4>{article?.["created"]}</h4>
							<h4>·</h4>
							<h4>{`5min read`}</h4>
							<h4>·</h4>
						</div>
					</div>

					<div className="article_card--right">
						<img src={article?.["mainImg"]} alt="mobile" />
					</div>
				</div>
			))}
		</div>
	);
}

export default ArticleCard;
