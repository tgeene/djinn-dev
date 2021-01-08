export const temp_article_details = (isList = true) =>
{
	const tempArticle = {
		'url':              'temp-article',
		'title':            'Temp Article',
		'publish_datetime': '1990-05-30',
		'publish_date':     'May 30th, 1990',
		'description':      'This is only a temp article, while articles are loaded.',
		'content':          '<p>Djinn ipsum dolor amet, vessel bottle vessel. Wish lamp summon angel elemental order wish jinx bewitch glamour. Conjure magic vessel conjure bottle good jinx genie. Wish lamp sorcery vessel order wish good. Master magic myth enchantment magic spirit demon. Glamour myth myth djinn enchantment summon wish. Bewitch good angel wish order master sorcery conjure.</p>' +
							'<p>Charm legend sorcery spell supernatural illusion charm. Desire genie spell desire conjure bewitch djinn. Illusion good vessel glamour order myth elemental. Power marvel spell djinn charm enchantment supernatural order djinn. Conjure bottle djinn spirit myth master wish magic marvel elemental. Angel demon charm conjure master trick illusion. Fiend wish conjure charm genie sorcery fiend bottle evil trick.</p>'
	};
	return isList ? [ tempArticle ] : tempArticle;
};
