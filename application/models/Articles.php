<?php


class Articles extends Model
{
	private object $_conn;

	public function __construct()
	{
		parent::__construct();

		global $env;

		$host = $env['dbHost'];
		$database = $env['dbName'];
		$username = $env['dbUser'];
		$password = $env['dbPass'];
		$this->_conn = new PDO('mysql:host=' . $host . ';dbname=' . $database, $username, $password);
	}

	public function getArticles()
	{
		$stmt = $this->_conn->prepare('SELECT * FROM articles WHERE published <= :date');
		$today = date('Y-m-d');
		$stmt->bindParam(':date', $today);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_OBJ);
	}

	public function getArticleByUrl(string $slug)
	{
		$stmt = $this->_conn->prepare('SELECT * FROM articles WHERE url = :slug AND published <= :date');
		$stmt->bindParam(':slug', $slug);
		$today = date('Y-m-d');
		$stmt->bindParam(':date', $today);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_OBJ);
	}
}