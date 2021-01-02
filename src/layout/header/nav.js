import React from 'react';
import { Link } from "react-router-dom";

// content
function Nav()
{
	const link_list = [
		{
			'url':  "/",
			'text': "Home"
		},
		{
			'url':  "/about",
			'text': "About"
		},
		{
			'url':  "/blog",
			'text': "Blog"
		},
		{
			'url':  "/experiments",
			'text': "Experiments"
		},
		{
			'url':  "/contact",
			'text': "Contact"
		}
	];

	// document.getElementById('main-nav').addEventListener('click', function() {
	// 	this.classList.toggle('active');
	// });
	const toggleActive = () =>
	{
		if(window.innerWidth <= 530)
		{
			document.getElementById('main-nav').classList.toggle('active');
		}
	};

	return (
		<nav id='main-nav'>
			<span className='menu-toggle' onClick={ toggleActive }></span>
			<ul onClick={ toggleActive }>
				{ link_list.map((item, i) => (
					<li key={ i }>
						<Link to={ item.url } title={ item.text + " | Djinn Development" }>{ item.text }</Link>
						{ item.links ?
						  <ul>
							  { item.links.map((sub_item, ii) => (
								  <li key={ ii }>
									  <Link to={ item.url + sub_item.url }
											title={ sub_item.text + " - " + item.text + " | Djinn Development" }>{ sub_item.text }</Link>
								  </li>
							  )) }
						  </ul> : null
						}
					</li>
				)) }
			</ul>
		</nav>
	);
}

export default Nav;
