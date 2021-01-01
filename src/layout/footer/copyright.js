import React from 'react';
import { Link } from 'react-router-dom';

// content
function Copyright()
{
	return (
		<div id='copyright'>
			<Link to='/'>Djinn Development</Link> &copy; 2020. All Rights Reserved.
		</div>
	);
}

export default Copyright;
