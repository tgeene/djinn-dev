<?php
$links = [
		[
				'title' => 'Trevor Geene\'s Resume',
				'label' => 'Resume',
				'url' => 'https://trevor.geene.co?ref=djinn-development',
		],
		[
				'title' => 'Trevor Geene\'s LinkedIn Profile',
				'label' => 'LinkedIn',
				'url' => 'https://www.linkedin.com/in/tgeene',
		],
		[
				'title' => 'Trevor Geene\'s GitHub Repositories',
				'label' => 'GitHub',
				'url' => 'https://github.com/tgeene',
		],
		[
				'title' => 'Trevor Geene\'s Stack Overflow Profile',
				'label' => 'Stack Overflow',
				'url' => 'https://stackoverflow.com/users/7764371/trevor-geene',
		],
];
?>
<footer id='main-footer'>
	<div id='copyright'>
		<a href='<?php echo siteUrl(); ?>' title='<?php echo getSiteTitle(); ?>'><?php echo getSiteTitle(); ?></a>
		&copy; <?php echo date('Y'); ?>. All Rights Reserved.
	</div>
	<nav id='social-nav'>
		<ul>
			<?php foreach ($links as $link): ?>
				<li>
					<a href='<?php echo $link['url']; ?>'
					   title="<?php echo $link['title']; ?>" rel='noopener noreferrer'
					   target='_blank'><?php echo $link['label']; ?></a>
				</li>
			<?php endforeach; ?>
		</ul>
	</nav>
</footer>