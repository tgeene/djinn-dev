<?php
$characterList = [
		[ 'name' => 'at', 'character' => '@' ],
		[ 'name' => 'sharp', 'character' => '#' ],
		[ 'name' => 'dollar', 'character' => '$' ],
		[ 'name' => 'underscore', 'character' => '_' ],
		[ 'name' => 'dash', 'character' => '-' ],
		[ 'name' => 'amp', 'character' => '&' ],
		[ 'name' => 'plus', 'character' => '+' ],
		[ 'name' => 'slash', 'character' => '/' ],
		[ 'name' => 'asterisk', 'character' => '*' ],
		[ 'name' => 'exclamation', 'character' => '!' ],
		[ 'name' => 'question', 'character' => '?' ],
		[ 'name' => 'carrot', 'character' => '^' ],
		[ 'name' => 'pipe', 'character' => '|' ],
		[ 'name' => 'parentheses', 'character' => '()' ],
		[ 'name' => 'brackets', 'character' => '[]' ],
		[ 'name' => 'braces', 'character' => '[]' ],
];
$featuresList = [
		[
				'name'    => 'lowercase',
				'option'  => 'Use lowercase letters (a-z)',
				'checked' => true,
		],
		[
				'name'    => 'uppercase',
				'option'  => 'Use uppercase letters (A-Z)',
				'checked' => true,
		],
		[
				'name'    => 'numbers',
				'option'  => 'Use arabic numbers (0-9)',
				'checked' => true,
		],
		[
				'name'    => 'readable',
				'option'  => 'Remove similar looking letters and numbers',
				'checked' => false,
		],
];
?>
<div id='experiments-page'>
	<section class='details'>
		<h1>Password Generation Tool</h1>
		<p>Users can modify the configuration below to meet the needs of what ever password specifications they have.
			By default the system is setup to generate the most secure password, and by changing settings we can no
			longer guarantee the strength of the generated passwords.</p>
	</section>
	<section class='form'>
		<h2>Password Configuration</h2>
		<form id='passwordGenerationForm'>
			<div class='output'></div>
			<fieldset>
				<legend>Special Characters</legend>
				<ul class='character-options'>
					<?php foreach($characterList as $character): ?>
						<li>
							<input
								type='checkbox'
								name='character-<?php echo $character['name']; ?>'
								id='character-<?php echo $character['name']; ?>'
								value='1'
								checked='checked'
							/>
							<label
								for='character-<?php echo $character['name']; ?>'
							><?php echo $character['character']; ?></label>
						</li>
					<?php endforeach; ?>
				</ul>
			</fieldset>
			<fieldset>
				<legend>Password Features</legend>
				<ul class='feature-options'>
					<?php foreach($featuresList as $character): ?>
						<li>
							<input
								type='checkbox'
								name='feature-<?php echo $character['name']; ?>'
								id='feature-<?php echo $character['name']; ?>'
								value='1'
								<?php if($character['checked']): ?>
									checked='checked'
								<?php endif; ?>
							/>
							<label
								for='feature-<?php echo $character['name']; ?>'
							><?php echo $character['option']; ?></label>
						</li>
					<?php endforeach; ?>
				</ul>
			</fieldset>
			<fieldset>
				<legend>Output Options</legend>
				<ul class='output-options'>
					<li class='half'>
						<label for='passwordLength'>Password Length <span class='required'>(required)</span></label>
						<input
							type='number'
							name='passwordLength'
							id='passwordLength'
							value='20'
							min='6'
							max='20'
							required
						/>
					</li>
					<li class='half'>
						<label for='numberOfOutputs'>Number of Passwords <span
								class='required'>(required)</span></label>
						<input
							type='number'
							name='numberOfOutputs'
							id='numberOfOutputs'
							value='1'
							min='1'
							max='10'
							required
						/>
					</li>
				</ul>
			</fieldset>
			<button type='submit'>Generate Password</button>
		</form>
	</section>
</div>
<script type='text/javascript' src='<?php echo siteUrl('js/password-generator.js'); ?>'></script>