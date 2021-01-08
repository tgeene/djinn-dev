import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';
import { temp_article_details } from '../../lib/temp-article';

// content
function TempArticlePage()
{
	const article = temp_article_details(false);

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
			<footer id='temp-footer'>
				<p>I see you have found my secret page. Well congrats to you on a job well done. Now get out of here are look at some real content!
					<span role='img' aria-label='Tongue sticking out!'>&#128539;</span>
				</p>
			</footer>
		</div>
	);
}

export default TempArticlePage;
