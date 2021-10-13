import React from 'react';
import { articles } from './Articles';
import { useHistory } from 'react-router-dom';

function ArticleCard() {
	const history = useHistory();

	const handleClickArticle = (topic: string, title: string, id: string) => {
		const titl = title.replaceAll(' ', '-');
		const topi = topic.replaceAll(' ', '-');
		history.push(`journal/${id}/${topi}/${titl}`);
	};

	return (
		<div id="articleCard">
			{Object.values(articles).map((article) => (
				<div
					className="article_card"
					onClick={(e: React.MouseEvent<HTMLElement>) =>
						handleClickArticle(article.topic, article.title, article.id)}
				>
					<div className="article_card--left">
						<div className="topic_container">
							<img src={article.topicImg} alt="react" />
							<h3>{article.topic}</h3>
						</div>
						<div className="headline_container">
							<h1>{article.title}</h1>
							<h3>{article.tagline}</h3>
						</div>
						<div className="meta_info">
							<h4>{article.metaInfo['date']}</h4>
							<h4>·</h4>
							<h4>{article.metaInfo['read']}</h4>
							<h4>·</h4>
							{article.metaInfo['keywords'].map((res) => <h4 className="keyword">{res}</h4>)}
						</div>
					</div>

					<div className="article_card--right">
						<img src={article.articleImg} alt="mobile" />
					</div>
				</div>
			))}
		</div>
	);
}

export default ArticleCard;
