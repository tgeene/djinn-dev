<!doctype html>
<html lang='en'>
	<head>
		<?php $this->view('includes/head'); ?>
	</head>
	<body>
		<div class='wrapper'>
			<?php $this->view('includes/header'); ?>
			<main class='content'>
				<?php $this->view('templates/' . $template); ?>
			</main>
			<?php $this->view('includes/footer'); ?>
		</div>
		<script type='text/javascript' src='<?php echo siteUrl('js/global.js'); ?>'></script>
	</body>
</html>
