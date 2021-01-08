import React from 'react';
import { useParams } from "react-router-dom";

// import components
import TempArticlePage from './temp';
import RealArticlePage from './real';

// content
function ArticlePage()
{
	const { article } = useParams();

	let articleContent = <TempArticlePage/>;
	if(article !== 'temp-article')
	{
		articleContent = <RealArticlePage articleUrl={ article }/>;
	}

	// Load Page Content
	return (
		<article id='article-page'>
			{ articleContent }
		</article>
	);
}

export default ArticlePage;
