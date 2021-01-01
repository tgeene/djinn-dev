import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// import components
import Hook from './hook';
import Services from './services';
import History from './history';

// content
function HomePage()
{
	// Update Page Details
	const title = "Trevor Geene's Portfolio Site | Djinn Development";
	const description = "This site is to serve as the primary portfolio of Trevor Geene's web development work.";
	update_meta_data(title, description, '/');

	// Load Page Content
	return (
		<div id='home-page'>
			<Hook/>
			<Services/>
			<History/>
		</div>
	);
}

export default HomePage;
