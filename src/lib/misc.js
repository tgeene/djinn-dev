export const update_meta_data = (title, description, url, doIndex = true) =>
{
	// HTML Basics
	document.title = title;
	document.querySelector("meta[name='description']").setAttribute("content", description);
	document.querySelector("link[rel='canonical']").setAttribute("href", 'https://djinn.dev' + url);

	// Social Media
	document.querySelector("meta[property='og:url']").setAttribute("content", 'https://djinn.dev' + url);
	document.querySelector("meta[property='og:title']").setAttribute("content", title);
	document.querySelector("meta[property='og:description']").setAttribute("content", description);
	document.querySelector("meta[name='twitter:title']").setAttribute("content", title);
	document.querySelector("meta[name='twitter:description']").setAttribute("content", description);

	const robotsMeta = document.querySelector("meta[name='robots']");
	if(doIndex)
	{
		robotsMeta.setAttribute('content', 'index, follow');
	}
	else
	{
		robotsMeta.setAttribute('content', 'noindex, follow');
	}
};
