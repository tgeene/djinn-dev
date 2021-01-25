<?php
$pages = [
		[
				'title' => 'Home',
				'uri' => '',
		],
		[
				'title' => 'About',
				'uri' => 'about',
		],
		[
				'title' => 'Blog',
				'uri' => 'blog',
		],
		[
				'title' => 'Experiments',
				'uri' => 'experiments',
		],
		[
				'title' => 'Contact',
				'uri' => 'contact',
		],
];
?>
<header id='main-header'>
	<div id='logo'>
		<img src='<?php echo siteUrl('images/logo.png'); ?>' alt='Djinn Development' height='107px'/>
		<h1><span>Djinn</span> Development</h1>
	</div>
	<nav id='main-nav'>
		<span class='menu-toggle' onclick='toggleActive();'></span>
		<ul onclick='toggleActive();'>
			<?php foreach($pages as $page): ?>
				<li>
					<a href='<?php echo siteUrl($page['uri']); ?>'
					   title='<?php echo $page['title'] . ' | ' . getSiteTitle(); ?>'><?php echo $page['title']; ?></a>
				</li>
			<?php endforeach; ?>
		</ul>
	</nav>
</header>