import React, { useEffect, useState } from 'react';

// load library
import { update_meta_data } from '../../lib/misc';
import { temp_article_details } from '../../lib/temp-article';

// content
function RealArticlePage(params)
{
	const [ article, setArticle ] = useState(temp_article_details(false));

	useEffect(() =>
			  {
				  const url = 'https://api.djinn.dev/get-article.php?url=' + params.articleUrl;

				  async function fetchData()
				  {
					  await fetch(url)
						  .then(response => response.json())
						  .then(data =>
								{
									setArticle(data);
									update_meta_data(data.title + " | Djinn Development", data.description, '/article/' + params.articleUrl);
								});
				  }

				  fetchData();
			  }, [ params.articleUrl ]);

	// Update Page Details
	update_meta_data(article.title + " | Djinn Development", article.description, '/article/' + article.url);

	// Load Page Content
	return (
		<div>
			<header>
				<h1>{ article.title }</h1>
				<p className='published'>Posted on <time
					dateTime={ article.publish_datetime }>{ article.publish_date }</time>
				</p>
			</header>
			<div dangerouslySetInnerHTML={ { __html: article.content } }/>
		</div>
	);
}

export default RealArticlePage;
