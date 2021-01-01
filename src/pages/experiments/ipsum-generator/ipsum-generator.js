import React from 'react';

// load library
import { update_meta_data } from '../../../lib/misc';

// import components
import Details from './details';
import Form from './form';

// content
function IpsumGeneratorPage()
{
	// Update Page Details
	const title = "Djinn Ipsum Generator | Djinn Development";
	const description = "A magical themed ipsum generation tool. A perfect option when your designs need something a little magical.";
	update_meta_data(title, description, '/experiments/ipsum-generator');

	// Load Page Content
	return (
		<div id='experiments-page'>
			<Details/>
			<Form/>
		</div>
	);
}

export default IpsumGeneratorPage;
