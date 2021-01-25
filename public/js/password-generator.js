document.getElementById('passwordGenerationForm').addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.checkValidity();

	// Clear Old Outputs
	const outputDiv = e.target.getElementsByClassName('output')[0];
	outputDiv.innerHTML = '';


	let characters = '';

	// Build Character String by Symbol Object
	const symbolList = {
		at: "@",
		sharp: "#",
		dollar: "$",
		underscore: "_",
		dash: "-",
		amp: "&",
		plus: "+",
		slash: "/",
		asterisk: "*",
		exclamation: "!",
		question: "?",
		carrot: "^",
		pipe: "|",
		parentheses: "()",
		brackets: "[]",
		braces: "{}"
	};
	symbolList.forEach((symbol, key) => {
		const checkbox = document.getElementById('character-' + key);
		if(checkbox.checked)
		{
			characters += symbol;
		}
	});

	// Build Character String of Alpha Numerics
	const readable = document.getElementById('feature-readable').checked;
	if(document.getElementById('feature-lowercase').checked)
	{
		characters += "abcdefghijkmnpqrstxyz";
		if(!readable)
		{
			characters += "louvw";
		}
	}
	if(document.getElementById('feature-uppercase').checked)
	{
		characters += "ABCDEFGHJKMNPQRSTXYZ";
		if(!readable)
		{
			characters += "ILOUVW";
		}
	}
	if(document.getElementById('feature-numbers').checked)
	{
		characters += "23456789";
		if(!readable)
		{
			characters += "10";
		}
	}

	// Create Outputs
	const outputs = document.getElementById('numberOfOutputs').value;
	const strLen = document.getElementById('passwordLength').value;
	for(let i = 0; i < outputs; i++)
	{
		let paragraphElem = document.createElement('p');
		let password = '';
		for(let ii = 0; ii < strLen; ii++)
		{
			password += characters.substr(Math.floor(Math.random() * characters.length), 1);
		}
		paragraphElem.innerHTML = password;
		outputDiv.appendChild(paragraphElem);
	}
});