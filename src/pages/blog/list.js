import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// load library
import { temp_article_details } from '../../lib/temp-article';

// content
function Details()
{
	const [ articles, setArticles ] = useState(temp_article_details());

	useEffect(() =>
			  {
				  const url = 'https://api.djinn.dev/article-list.php';

				  async function fetchData()
				  {
					  await fetch(url + window.location.search)
						  .then(response => response.json())
						  .then(data => setArticles(data.articles));
				  }

				  fetchData();
			  }, []);

	return (
		<section className='list'>
			<h2>Latest Articles</h2>
			{ articles.map((item, i) => (
				<article key={ i }>
					<header>
						<h3><Link
							to={ "/article/" + item.url }
							title={ item.title + ' | Djinn Development' }>{ item.title }</Link></h3>
						<p className='published'>Posted on <time
							dateTime={ item.publish_datetime }>{ item.publish_date }</time>
						</p>
					</header>
					<p>{ item.description }</p>
					<Link
						to={ "/article/" + item.url }
						title={ item.title + ' | Djinn Development' } className='button small'>Read More</Link>
				</article>
			)) }
		</section>
	);
}

export default Details;
