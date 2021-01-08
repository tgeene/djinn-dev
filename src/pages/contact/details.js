import React from 'react';

// content
function Details()
{
	const areaCode = '702', firstThree = '485', lastFour = '7566', userFirst = 'trevor', userLast = 'geene',
		  host = 'gmail', ext = 'com';

	return (
		<section className='details'>
			<h2>Emergency Contact</h2>
			<p>If you really need to get in touch with me you can use the contact information below, but the form above is the best way to get in touch with me.</p>
			<ul>
				<li>
					<strong>Email Address:</strong> <a
					href={ 'mailto:' + userFirst + '.' + userLast + '@' + host + '.' + ext }>{ userFirst }.{ userLast }@{ host }.{ ext }</a>
				</li>
				<li>
					<strong>Phone Number:</strong> <a
					href={ 'tel:+1' + areaCode + firstThree + lastFour }>{ areaCode }.{ firstThree }.{ lastFour }</a> *
				</li>
			</ul>
			<p>* Please text first if you are not already a client as I don't answer number that I do not know.</p>
		</section>
	);
}

export default Details;
