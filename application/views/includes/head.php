<?php
$pageTitle = isset($title) ? $title : getSiteTagline();
$pageTitle .= ' | ' . getSiteTitle();

$pageDesc = isset($description) ? $description : getSiteTagline();

if(IS_LIVE): ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src='https://www.googletagmanager.com/gtag/js?id=G-SQR0N9NQTM'></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-SQR0N9NQTM');
	</script>
<?php endif; ?>
<!-- Meta Data -->
<meta charset='utf-8'/>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<meta content='index, follow' name='robots'/>
<meta content='1 month' name='revisit-after'/>
<!-- Favicons -->
<link href='<?php echo siteUrl('favicon.ico'); ?>' rel='icon'/>
<link href='<?php echo siteUrl('favicons/logo192.png'); ?>' rel='apple-touch-icon'/>
<link href='<?php echo siteUrl('manifest.json'); ?>' rel='manifest'/>
<!-- Page Details -->
<title><?php echo $pageTitle; ?></title>
<meta content='#bada55' name='theme-color'/>
<meta content='<?php echo $pageDesc; ?>' name='description'/>
<link href='<?php echo siteUrl(getUri()); ?>' rel='canonical'/>
<meta content='Trevor Geene' name='author'/>
<meta content='Trevor Geene,Las Vegas,Web Developer,Web Consultant,PHP,Python,MySQL,MariaDB,MongoDB,JavaScript,ReactJS'
	  name='keywords'/>
<!-- Social Meta -->
<meta content='1287814887965073' property='fb:app_id'/>
<meta content='<?php echo siteUrl($_SERVER['REQUEST_URI']); ?>' property='og:url'/>
<meta content='website' property='og:type'/>
<meta content='<?php echo $pageTitle; ?>' property='og:title'/>
<meta content='<?php echo $pageDesc; ?>' property='og:description'/>
<meta content='summary' name='twitter:card'/>
<meta content='@trevorgeene' name='twitter:site'/>
<meta content='<?php echo $pageTitle; ?>' name='twitter:title'/>
<meta content='<?php echo $pageDesc; ?>' name='twitter:description'/>
<!-- Styles -->
<link href='https://fonts.gstatic.com' rel='preconnect'/>
<link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
	  rel='stylesheet'/>
<link href='<?php echo siteUrl('css/' . $style . '.css'); ?>' rel='stylesheet'/>