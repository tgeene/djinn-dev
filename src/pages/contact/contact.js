import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// import components
import Details from './details';
import Form from './form';

// content
function ContactPage()
{
	// Update Page Details
	const title = "Contact Trevor Geene | Djinn Development";
	const description = "Reach out to Trevor Geene to discuss recieving services in regards to freelance projects or consulting opportinites.";
	update_meta_data(title, description, '/contact');

	// Load Page Content
	return (
		<div id='contact-page'>
			<Form/>
			<Details/>
		</div>
	);
}

export default ContactPage;
