import React from 'react';
import { useForm } from 'react-hook-form';

// load library
import { formSubmitHelper } from '../../../lib/form-handler';

// content
function Form()
{
	// Handle Form Submission
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = values =>
	{
		formSubmitHelper(values, 'passwordGenerationForm', "https://api.djinn.dev/password-generator.php");
	};

	// Checkbox Option List - @#$_&-+()/*!?^|{}[]
	const character_list = [
		{ 'name': "at", 'character': "@" },
		{ 'name': "sharp", 'character': "#" },
		{ 'name': "dollar", 'character': "$" },
		{ 'name': "underscore", 'character': "_" },
		{ 'name': "dash", 'character': "-" },
		{ 'name': "amp", 'character': "&" },
		{ 'name': "plus", 'character': "+" },
		{ 'name': "slash", 'character': "/" },
		{ 'name': "asterisk", 'character': "*" },
		{ 'name': "exclamation", 'character': "!" },
		{ 'name': "question", 'character': "?" },
		{ 'name': "carrot", 'character': "^" },
		{ 'name': "pipe", 'character': "|" },
		{ 'name': "parentheses", 'character': "()" },
		{ 'name': "brackets", 'character': "[]" },
		{ 'name': "braces", 'character': "{}" }
	];
	// Feature Option List
	const features_list = [
		{
			'name':    "lowercase",
			'option':  "Use lowercase letters (a-z)",
			'checked': true
		},
		{
			'name':    "uppercase",
			'option':  "Use uppercase letters (A-Z)",
			'checked': true
		},
		{
			'name':    "numbers",
			'option':  "Use arabic numbers (0-9)",
			'checked': true
		},
		{
			'name':    "readable",
			'option':  "Remove similar looking letters and numbers",
			'checked': false
		}
	];

	return (
		<section className='form'>
			<h2>Password Configuration</h2>
			<form id='passwordGenerationForm' onSubmit={ handleSubmit(onSubmit) }>
				<div className='output'></div>
				<fieldset>
					<legend>Special Characters</legend>
					<ul className='character-options'>
						{ character_list.map((item, i) => (
							<li key={ i }>
								<input type='checkbox' name={ "character-" + item.name } id={ "character-" + item.name }
									   value='1' defaultChecked='checked'/>
								<label htmlFor={ "character-" + item.name }>{ item.character }</label>
							</li>
						)) }
					</ul>
				</fieldset>
				<fieldset>
					<legend>Password Features</legend>
					<ul className='feature-options'>
						{ features_list.map((item, i) => (
							<li key={ i }>
								<input type='checkbox' name={ "feature-" + item.name } id={ "feature-" + item.name }
									   value='1' defaultChecked={ item.checked }/>
								<label htmlFor={ "feature-" + item.name }>{ item.option }</label>
							</li>
						)) }
					</ul>
				</fieldset>
				<fieldset>
					<legend>Output Options</legend>
					<ul className='output-options'>
						<li className='half'>
							<label htmlFor='passwordLength'>Password Length <span className='required'>(required)</span></label>
							<input
								type='number'
								name='passwordLength'
								id='passwordLength'
								defaultValue='20'
								min='6'
								max='20'
								ref={ register({ required: "Required" }) }
							/>
							{ errors.passwordLength && <p className='error'>{ errors.passwordLength.message }</p> }
						</li>
						<li className='half'>
							<label htmlFor='numberOfOutputs'>Number of Passwords <span
								className='required'>(required)</span></label>
							<input
								type='number'
								name='numberOfOutputs'
								id='numberOfOutputs'
								defaultValue='1'
								min='1'
								max='10'
								ref={ register({ required: "Required" }) }
							/>
							{ errors.numberOfOutputs && <p className='error'>{ errors.numberOfOutputs.message }</p> }
						</li>
					</ul>
				</fieldset>
				<button type='submit'>Generate Password</button>
			</form>
		</section>
	);
}

export default Form;
