import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// import components
import Details from './details';
import List from './list';

// content
function BlogPage()
{
	// Update Page Details
	const title = "Web Development Insights | Djinn Development";
	const description = "The ramblings of a web developer on the various tops regarding the internet as a whole.";
	update_meta_data(title, description, '/blog');

	// Load Page Content
	return (
		<div id='blog-page'>
			<Details/>
			<List/>
		</div>
	);
}

export default BlogPage;
