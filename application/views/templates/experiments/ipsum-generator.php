<div id='experiments-page'>
	<section class='details'>
		<h1>Djinn Ipsum Generation Tool</h1>
		<p>While this text is pure gibberish, ipsum text is used in the design and development communities to use as
			filler text. This tool was inspired by Lorem Ipsum, but we have chosen to theme it with Djinn (genie)
			themed words.</p>
	</section>
	<section class='form'>
		<h2>Ipsum Configuration</h2>
		<form id='djinnIpsumGenerationForm'>
			<div class='output'></div>
			<fieldset>
				<legend>Output Options</legend>
				<ul class='output-options'>
					<li>
						<label for='numberOfParagraphs'>Number of Paragraphs <span
									class='required'>(required)</span></label>
						<input
							type='number'
							name='numberOfParagraphs'
							id='numberOfParagraphs'
							value='1'
							min='1'
							max='20'
							required
						/>
					</li>
					<li>
						<input type='checkbox' name='startWith' id='startWith' value='1' checked='checked'/>
						<label for='startWith'>Start with "Djinn ipsum dolor amet..."</label>
					</li>
				</ul>
			</fieldset>
			<button type='submit'>Generate Ipsum</button>
		</form>
	</section>
</div>
<script type='text/javascript' src='<?php echo siteUrl('js/ipsum-generator.js'); ?>'></script>