import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

// load library
import { update_meta_data } from '../../lib/misc';

// import components
// import Details from './details';
// import List from './list';

// content
function ArticlePage()
{
	const { articleUrl } = useParams();

	const [ article, setArticle ] = useState([]);

	useEffect((articleUrl) =>
			  {
				  const url = 'https://api.djinn.dev/get-article.php?url=' + articleUrl;

				  async function fetchData()
				  {
					  await fetch(url + window.location.search)
						  .then(response => response.json())
						  .then(data =>
								{
									setArticle(data);
									update_meta_data(data.title + " | Djinn Development", data.description, '/article/' + articleUrl);
								});
				  }

				  fetchData();
			  }, []);

	// Update Page Details
	const title = "Article | Djinn Development";
	const description = "Article description.";
	update_meta_data(title, description, '/article/' + articleUrl);

	// Load Page Content
	return (
		<article id='article-page'>
			<header>
				<h1>{ article.title }</h1>
				<p className='published'>Posted on <time
					dateTime={ article.publish_datetime }>{ article.publish_date }</time>
				</p>
			</header>
			<div dangerouslySetInnerHTML={ { __html: article.content } }/>
		</article>
	);
}

export default ArticlePage;
