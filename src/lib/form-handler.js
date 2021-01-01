export const formSubmitHelper = (values, form_id, url) =>
{
	// Get Form Object
	const form = document.getElementById(form_id);
	let outputDiv = form.querySelector('.output');

	// Remove Old Form Output
	outputDiv.innerHTML = '';

	// Set AJAX Variables
	const requestOptions = {
		method: 'post',
		body:   new FormData(form)
	};

	// Make AJAX Request
	fetch(url, requestOptions)
		.then(response => response.json())
		.then(data =>
			  {
				  if(typeof data.error !== "undefined")
				  {
					  for(const key in data.messages)
					  {
						  let error = document.createElement("p");
						  error.classList.add("error");
						  error.textContent = data.messages[key];
						  outputDiv.append(error);
					  }
				  }
				  else
				  {
					  let output = document.createElement("p");
					  output.classList.add("output");
					  output.innerHTML = data.message;
					  outputDiv.append(output);
				  }
			  });
};
