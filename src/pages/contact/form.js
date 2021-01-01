import React from 'react';
import { useForm } from 'react-hook-form';

// load library
import { formSubmitHelper } from '../../lib/form-handler';

// content
function Form()
{
	// Handle Form Submission
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = values =>
	{
		formSubmitHelper(values, 'contactForm', "https://api.djinn.dev/contact-form.php");
	};

	// Load Page Content
	return (
		<section className='form'>
			<h1>Contact Trevor Geene</h1>
			<form id='contactForm' onSubmit={ handleSubmit(onSubmit) }>
				<div className='output'></div>
				<ul>
					<li className='half'>
						<label for='firstName'>First Name <span className='required'>(required)</span></label>
						<input
							type='text'
							name='firstName'
							id='firstName'
							ref={ register({ required: "Required" }) }
						/>
						{ errors.firstName && <p className='error'>{ errors.firstName.message }</p> }
					</li>
					<li className='half'>
						<label for='lastName'>Last Name <span className='required'>(required)</span></label>
						<input
							type='text'
							name='lastName'
							id='lastName'
							ref={ register({ required: "Required" }) }
						/>
						{ errors.lastName && <p className='error'>{ errors.lastName.message }</p> }
					</li>
					<li className='half'>
						<label for='phoneNumber'>Phone # <span className='required'>(required)</span></label>
						<input
							type='tel'
							name='phoneNumber'
							id='phoneNumber'
							ref={ register({
											   required: "Required",
											   pattern:  {
												   value:   /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
												   message: "Invalid Phone Number"
											   }
										   }) }
						/>
						{ errors.phoneNumber && <p className='error'>{ errors.phoneNumber.message }</p> }
					</li>
					<li className='half'>
						<label for='emailAddress'>Email <span className='required'>(required)</span></label>
						<input
							type='email'
							name='emailAddress'
							id='emailAddress'
							ref={ register({
											   required: "Required",
											   pattern:  {
												   value:   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
												   message: "Invalid Email Address"
											   }
										   }) }
						/>
						{ errors.emailAddress && <p className='error'>{ errors.emailAddress.message }</p> }
					</li>
					<li>
						<label for='messageContent'>Message <span className='required'>(required)</span></label>
						<textarea
							name='messageContent'
							id='messageContent'
							ref={ register({ required: "Required" }) }
						></textarea>
						{ errors.messageContent && <p className='error'>{ errors.messageContent.message }</p> }
					</li>
				</ul>
				<button type='submit'>Send Email</button>
			</form>
		</section>
	);
}

export default Form;
