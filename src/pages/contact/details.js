import React from 'react';

// content
function Details()
{
	return (
		<section className='details'>
			<h2>Emergency Contact</h2>
			<p>If you really need to get in touch with me you can use the contact information below, but the form above is the best way to get in touch with me.</p>
			<ul>
				<li><strong>Email Address:</strong> <a href='mailto:trevor.geene@gmail.com'>trevor.geene@gmail.com</a>
				</li>
				<li><strong>Phone Number:</strong> <a href='tel:+1-702-485-7566'>702.485.7566</a> *</li>
			</ul>
			<p>* Please text first if you are not already a client as I don't answer number that I do not know.</p>
		</section>
	);
}

export default Details;
