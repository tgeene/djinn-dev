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
	if(article !== 'the-article-that-should-not-exist-but-here-it-is')
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
