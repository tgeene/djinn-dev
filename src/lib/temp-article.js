export const temp_article_details = (isList = true) =>
{
	const tempArticle = {
		'url':              'the-article-that-should-not-exist-but-here-it-is',
		'title':            'The Article That Should Not Exist, But Here It Is',
		'publish_datetime': '1990-05-30',
		'publish_date':     'May 30th, 1990',
		'description':      'This article was created as a placeholder for while real articles are being loaded in via AJAX calls.',
		'content':          '<p>"As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs." - Maurice Wilkes</p>' +
							'<p>"Technology is so much fun but we can drown in our technology. The fog of information can drive out knowledge." - Daniel J. Boorstin</p>' +
							'<p>"PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals." - Jon Ribbens</p>' +
							'<p>"Treat your password like your toothbrush. Don\'t let anybody else use it, and get a new one every six months." - Clifford Stoll</p>' +
							'<p>"Web users ultimately want to get at data quickly and easily. They don\'t care as much about attractive sites and pretty design." - Tim Berners-Lee</p>' +
							'<p>"There are only two kinds of programming languages: those people always bitch about and those nobody uses." - Bjarne Stroustrup</p>' +
							'<p>"I think that it\'s always possible to have a great company if you have great ideas. I will say that since the web has become more commercialized, it also takes some good financial resources to build a great business, but as I always say, you have to have the idea first." - Jerry Yang</p>' +
							'<p>"The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time." - Tom Cargill</p>' +
							'<p>"It is only when they go wrong that machines remind you how powerful they are." - Clive James</p>'
	};
	return isList ? [ tempArticle ] : tempArticle;
};
