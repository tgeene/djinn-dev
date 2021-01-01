import React from 'react';

import logo from '../../assets/images/logo.png';

// content
function Header()
{
	return (
		<div id='logo'>
			<img src={ logo } alt='Djinn Development' height='107px'/>
			<h1><span>Djinn</span> Development</h1>
		</div>
	);
}

export default Header;
