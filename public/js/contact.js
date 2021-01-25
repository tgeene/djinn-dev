document.getElementById('contactForm').addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.checkValidity();

	// Clear Old Outputs
	const outputDiv = e.target.getElementsByClassName('output')[0];
	outputDiv.innerHTML = '';

	// Set AJAX Variables
	const requestOptions = {
		method: 'post',
		body:   new FormData(e.target)
	};

	// Make AJAX Request
	fetch('/contact/submit', requestOptions)
		.then(response => response.json())
		.then(data =>
			{
				if(typeof data.error !== "undefined")
				{
					data.messages.forEach((msg, key) => {
						let error = document.createElement("p");
						error.classList.add("error");
						error.textContent = msg;
						outputDiv.append(error);
					});
				}
				else
				{
					let output = document.createElement("p");
					output.classList.add("output");
					output.innerHTML = data.message;
					outputDiv.append(output);
				}
			});
});