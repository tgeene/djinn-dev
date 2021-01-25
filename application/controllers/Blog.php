<?php


class Blog extends Controller
{
	public array $data = [];

	public function __construct()
	{
		parent::__construct();

		$this->data['style'] = 'blog';

		$this->load->model('articles');
	}

	public function index()
	{
		$this->data['title'] = 'Web Development Insights';
		$this->data['description'] = 'The ramblings of a web developer on the various tops regarding the internet as'
									 . ' a whole.';
		$this->data['template'] = 'blog';
		$this->data['articles'] = $this->articles->getArticles();

		$this->load->view('frame', $this->data);
	}

	public function article(string $blogUrl)
	{
		$article = $this->articles->getArticleByUrl($blogUrl);

		$this->data['title'] = $article->title;
		$this->data['description'] = $article->description;
		$this->data['template'] = 'blog/article';
		$this->data['article'] = $article;

		$this->load->view('frame', $this->data);
	}
}