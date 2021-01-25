<?php


class About extends Controller
{
	public array $data = [];

	public function index()
	{
		$this->data['title'] = 'About Trevor Geene & His Programming Experience';
		$this->data['description'] = 'Trevor Geene is a Las Vegas based Web Developer & Consultant with 10 years of'
									 . ' professional experience building websites, applications, and managing'
									 . ' projects.';
		$this->data['template'] = 'about';
		$this->data['style'] = 'about';
		$this->load->view('frame', $this->data);
	}
}