document.getElementById('djinnIpsumGenerationForm').addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.checkValidity();

	// Clear Old Outputs
	const outputDiv = e.target.getElementsByClassName('output')[0];
	outputDiv.innerHTML = '';

	// Word List for Generator
	const wordList = [
		'wish', 'lamp', 'demon', 'spirit', 'angel', 'good', 'evil', 'supernatural', 'elemental', 'djinn', 'genie',
		'myth', 'legend', 'summon', 'vessel', 'bottle', 'magic', 'power', 'desire', 'order', 'fiend', 'enchantment',
		'charm', 'conjure', 'trick', 'illusion', 'marvel', 'spell', 'bewitch', 'glamour', 'jinx', 'sorcery', 'master'
	];

	// Create Outputs
	const outputs = document.getElementById('numberOfParagraphs').value;
	const startWith = document.getElementById('startWith').checked;
	for(let i = 0; i < outputs; i++)
	{
		let paragraph = '';
		for(let ii = 0; ii < 6 + Math.floor(Math.random() * 2); ii++)
		{
			let sentence = '';

			// Determine Sentence Characteristics
			let sentenceLength = 7 + Math.floor(Math.random() * 3);
			if(i === 0 && ii === 0 && startWith)
			{
				sentence = 'Djinn ipsum dolor amet, ';
				sentenceLength = 3 + Math.floor(Math.random() * 2);
			}

			// Build Sentence
			for(let iii = 0; iii < sentenceLength; iii++)
			{
				sentence += wordList[Math.floor(Math.random() * wordList.length)];
				const sentencePos = iii / sentenceLength;
				sentence += (sentenceLength > 5 && Math.round(sentencePos * 10) === 2) ? ', ' : ' ';
			}

			// Format Sentence
			sentence = substr_replace(sentence, '. ', -1);
			paragraph += sentence.capitalize();
		}
		let paragraphElem = document.createElement('p');
		paragraphElem.innerHTML = paragraph;
		outputDiv.appendChild(paragraphElem);
	}
});