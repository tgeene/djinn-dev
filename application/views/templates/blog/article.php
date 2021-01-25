<article id='article-page'>
	<header>
		<h1><?php echo $article->title; ?></h1>
		<p class='published'>Posted on <time
				datetime='<?php echo $article->published; ?>'
		><?php echo date('F jS, Y', strtotime($article->published)); ?></time>
		</p>
	</header>
	<div><?php $this->view('articles/' . $article->url); ?></div>
</article>