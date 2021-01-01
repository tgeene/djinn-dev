import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// import components
import Details from './details';
import List from './list';

// content
function ExperimentsPage()
{
	// Update Page Details
	const title = "Trevor Geene's Coding Experiments | Djinn Development";
	const description = "This section of the site will be filled with fun web experiments and random tools for people to play with and utilize as they see fit.";
	update_meta_data(title, description, '/experiments');

	// Load Page Content
	return (
		<div id='experiments-page'>
			<Details/>
			<List/>
		</div>
	);
}

export default ExperimentsPage;
