<?php


class Home extends Controller
{
	public array $data = [];

	public function index()
	{
		$this->data['title'] = 'Trevor Geene\'s Portfolio Site';
		$this->data['description'] = 'This site is to serve as the primary portfolio of Trevor Geene\'s web'
									 . 'development work.';
		$this->data['template'] = 'home';
		$this->data['style'] = 'home';
		$this->load->view('frame', $this->data);
	}
}