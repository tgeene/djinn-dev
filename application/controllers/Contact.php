<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


class Contact extends Controller
{
	public array $data = [];

	public function index()
	{
		$this->data['title'] = 'Contact Trevor Geene';
		$this->data['description'] = 'Reach out to Trevor Geene to discuss receiving services in regards to freelance'
									 . ' projects or consulting opportunities.';
		$this->data['template'] = 'contact';
		$this->data['style'] = 'contact';
		$this->load->view('frame', $this->data);
	}

	public function submit()
	{
		global $env;

		// CORS
		header('Access-Control-Allow-Origin: *');
		// header('Vary: Origin');
		header('Access-Control-Allow-Methods: *');
		header("Access-Control-Allow-Headers: X-Requested-With");
		// Output Format
		header('Content-Type: application/json');

		$errors = [];
		if($_SERVER['REQUEST_METHOD'] === 'POST')
		{
			if(empty($_POST['firstName']))
			{
				$errors[] = 'First name field is required.';
			}

			if(empty($_POST['lastName']))
			{
				$errors[] = 'Last name field is required.';
			}

			if(empty($_POST['phoneNumber']))
			{
				$errors[] = 'Phone # field is required.';
			}
			elseif(!preg_match("/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i", $_POST['phoneNumber']))
			{
				$errors[] = 'Invalid phone # submitted.';
			}

			if(empty($_POST['emailAddress']))
			{
				$errors[] = 'Email address field is required.';
			}
			elseif(!filter_var($_POST['emailAddress'], FILTER_VALIDATE_EMAIL))
			{
				$errors[] = 'Invalid email address submitted.';
			}

			if(empty($_POST['messageContent']))
			{
				$errors[] = 'Message field is required.';
			}
		}
		else
		{
			$errors[] = 'Invalid request type.';
		}

		if(!$errors)
		{
			$mail = new PHPMailer(true);

			try
			{
				if(IS_LIVE)
				{
					//Server settings
					$mail->isSMTP();
					// $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
					$mail->Host = 'smtp.gmail.com';
					$mail->SMTPAuth = true;
					$mail->Username = 'trevor.geene@gmail.com';
					$mail->Password = $env['gmailSecret'];
					$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
					$mail->Port = 587;

					//Recipients
					$mail->setFrom('no-reply@djinn.dev', 'Djinn Delopment');
					$mail->addAddress('trevor.geene@gmail.com', 'Trevor Geene');
					$name = $_POST['firstName'] . ' ' . $_POST['lastName'];
					$mail->addReplyTo($_POST['emailAddress'], $name);

					// Content
					$mail->isHTML(false);
					$mail->Subject = 'Contact Form Submission - ' . $name;

					$message = 'Name: ' . $name . "\n";
					$message .= 'Phone: ' . $_POST['phoneNumber'] . "\n";
					$message .= 'Email: ' . $_POST['emailAddress'] . "\n";
					$message .= 'Message: ' . "\n";
					$message .= $_POST['messageContent'];
					$mail->Body = $message;

					$mail->send();
				}

				$this->data['message'] = 'Message sent successfully!';
			}
			catch(Exception $e)
			{
				$this->data['error'] = true;
				$this->data['messages'] = ['An error as occured. Please try again.'];
			}
		}
		else
		{
			$this->data['error'] = true;
			$this->data['messages'] = $errors;
		}

		echo json_encode($this->data);
	}
}