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
		formSubmitHelper(values, 'djinnIpsumGenerationForm', "https://api.djinn.dev/djinn-ipsum-generator.php");
	};

	return (
		<section className='form'>
			<h2>Ipsum Configuration</h2>
			<form id='djinnIpsumGenerationForm' onSubmit={ handleSubmit(onSubmit) }>
				<div className='output'></div>
				<fieldset>
					<legend>Output Options</legend>
					<ul className='output-options'>
						<li>
							<label htmlFor='numberOfParagraphs'>Number of Paragraphs <span
								className='required'>(required)</span></label>
							<input
								type='number'
								name='numberOfParagraphs'
								id='numberOfParagraphs'
								defaultValue='1'
								min='1'
								max='20'
								ref={ register({ required: "Required" }) }
							/>
							{ errors.numberOfParagraphs &&
							  <p className='error'>{ errors.numberOfParagraphs.message }</p> }
						</li>
						<li>
							<input type='checkbox' name='startWith' id='startWith' value='1' defaultChecked='checked'/>
							<label htmlFor='startWith'>Start with "Djinn ipsum dolor amet..."</label>
						</li>
					</ul>
				</fieldset>
				<button type='submit'>Generate Ipsum</button>
			</form>
		</section>
	);
}

export default Form;
