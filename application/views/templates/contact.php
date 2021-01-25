<div id='contact-page'>
	<section class='form'>
		<h1>Contact Trevor Geene</h1>
		<form id='contactForm'>
			<div class='output'></div>
			<ul>
				<li class='half'>
					<label for='firstName'>First Name <span class='required'>(required)</span></label>
					<input
						type='text'
						name='firstName'
						id='firstName'
						required
					/>
				</li>
				<li class='half'>
					<label for='lastName'>Last Name <span class='required'>(required)</span></label>
					<input
						type='text'
						name='lastName'
						id='lastName'
						required
					/>
				</li>
				<li class='half'>
					<label for='phoneNumber'>Phone # <span class='required'>(required)</span></label>
					<input
						type='tel'
						name='phoneNumber'
						id='phoneNumber'
						required
					/>
				</li>
				<li class='half'>
					<label for='emailAddress'>Email <span class='required'>(required)</span></label>
					<input
						type='email'
						name='emailAddress'
						id='emailAddress'
						required
					/>
				</li>
				<li>
					<label for='messageContent'>Message <span class='required'>(required)</span></label>
					<textarea
						name='messageContent'
						id='messageContent'
						required
					></textarea>
				</li>
			</ul>
			<button type='submit'>Send Email</button>
		</form>
	</section>
	<section class='details'>
		<h2>Emergency Contact</h2>
		<p>If you really need to get in touch with me you can use the contact information below, but the form above is the best way to get in touch with me.</p>
		<ul>
			<li>
				<strong>Email Address:</strong> <a class='email' href='' title="Trevor Geene's Email Address"></a>
			</li>
			<li>
				<strong>Phone Number:</strong> <a class='phone' href='' title="Trevor Geene's Phone Number"></a> *
			</li>
		</ul>
		<p>* Please text first if you are not already a client as I don't answer number that I do not know.</p>
	</section>
</div>
<script type='text/javascript' src='<?php echo siteUrl('js/contact.js'); ?>'></script>