<div id='blog-page'>
	<section class='details'>
		<h1>Web Development Insights</h1>
		<p>This is just a place for me as an active web developer to share my insights and commentary on whatever web
			related top I feel like talking about. Right now, the goal is to write at least one blog entry a month,
			but I won't let that stop me from posting more if a bit of inspiration hits.</p>
	</section>
	<section class='list'>
		<h2>Latest Articles</h2>
		<?php foreach($articles as $article): ?>
			<article>
				<header>
					<h3>
						<a href='<?php echo siteUrl('article/' . $article->url); ?>'
						   title='<?php echo $article->title . ' | ' . getSiteTitle(); ?>'
						><?php echo $article->title; ?></a>
					</h3>
					<p class='published'>Posted on <time
								datetime='<?php echo $article->published; ?>'
					><?php echo date('F jS, Y', strtotime($article->published)); ?></time>
					</p>
				</header>
				<p><?php echo $article->description; ?></p>
				<a href='<?php echo siteUrl('article/' . $article->url); ?>'
				   title='<?php echo $article->title . ' | ' . getSiteTitle(); ?>' class='button small'
				>Read More</a>
			</article>
		<?php endforeach; ?>
	</section>
</div>