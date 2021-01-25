<?php


class Experiments extends Controller
{
	public array $data = [];

	public function __construct()
	{
		parent::__construct();

		$this->data['style'] = 'experiments';
	}

	public function index()
	{
		$this->data['title'] = 'Trevor Geene\'s Coding Experiments';
		$this->data['description'] = 'This section of the site will be filled with fun web experiments and random'
									 . ' tools for people to play with and utilize as they see fit.';
		$this->data['template'] = 'experiments';
		$this->load->view('frame', $this->data);
	}

	public function password_generator()
	{
		$this->data['title'] = 'Trevor Geene\'s Coding Experiments';
		$this->data['description'] = 'A simple tool built to return unique and secure passwords. This is nothing'
									 . ' special, but it has a decent amount customization available.';
		$this->data['template'] = 'experiments/password-generator';
		$this->load->view('frame', $this->data);
	}

	public function ipsum_generator()
	{
		$this->data['title'] = 'Djinn Ipsum Generator';
		$this->data['description'] = 'A magical themed ipsum generation tool. A perfect option when your designs need'
									 . ' something a little magical.';
		$this->data['template'] = 'experiments/ipsum-generator';
		$this->load->view('frame', $this->data);
	}
}