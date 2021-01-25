<?php
$routes = [
	'default_controller' => 'home',
	'article/(:any)' => 'blog/article/$1',
];
$redirects = [
	'home' => '',
	'home/index' => '',
	'article' => 'blog',
];