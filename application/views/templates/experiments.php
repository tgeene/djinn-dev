<?php
$experiments = [
		[
				'title' => 'Password Generation Tool',
				'uri' => 'password-generator',
				'description' => 'This tool allows you to select from a few different options to generate unique and'
								 . ' secure passwords based on your needs.',
		],
		[
				'title' => 'Djinn Ipsum Generation Tool',
				'uri' => 'ipsum-generator',
				'description' => 'This tool allows your to generate random filler text similar to lorem ipsum, but with'
								 . ' a little bit of a magical flair.',
		],
];
?>
<div id='experiments-page'>
	<section class='details'>
		<h1>Trevor Geene's Experiments</h1>
		<p>Sometimes as a developer I just have the urge to either try something new or make a tool either for myself
			or other people. I am hoping to use this page as a place to link to these experiments/tools.
			Some of them will be hosted here on this site or will have a link to my GitHub project.</p>
	</section>
	<section className='list'>
		<h2>On-site Experiments & Tools</h2>
		<nav>
			<ul>
				<?php foreach($experiments as $experiment): ?>
				<li>
					<a href='<?php echo siteUrl('experiments/' . $experiment['uri']); ?>'
					   title='<?php echo $experiment['title'] . ' | ' . getSiteTitle(); ?>'
					><?php echo $experiment['title']; ?></a> - <?php echo $experiment['description']; ?>
				</li>
				<?php endforeach; ?>
			</ul>
		</nav>
	</section>
</div>