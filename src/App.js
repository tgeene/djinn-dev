import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// layout
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

// pages
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import BlogPage from './pages/blog/blog';
import ArticlePage from './pages/article/article';
import ExperimentsPage from './pages/experiments/experiments';
import PasswordGeneratorPage from './pages/experiments/password-generator/password-generator';
import IpsumGeneratorPage from './pages/experiments/ipsum-generator/ipsum-generator';
import ContactPage from './pages/contact/contact';

// CSS
import './assets/css/styles.css';

// content
function App()
{
	return (
		<Router basename='/'>
			<div className='wrapper'>
				<Header/>
				<main className='content'>
					<Route exact path='/' component={ HomePage }/>
					<Route exact path='/about' component={ AboutPage }/>
					<Route exact path='/blog' component={ BlogPage }/>
					<Route exact path='/article/:articleUrl' component={ ArticlePage }/>
					<Route exact path='/experiments' component={ ExperimentsPage }/>
					<Route exact path='/experiments/password-generator' component={ PasswordGeneratorPage }/>
					<Route exact path='/experiments/ipsum-generator' component={ IpsumGeneratorPage }/>
					<Route exact path='/contact' component={ ContactPage }/>
				</main>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
