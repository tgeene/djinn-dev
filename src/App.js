import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// layout
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

// pages
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';

// CSS
import './assets/css/styles.css';

// content
function App() {
  return (
    <Router basename='/'>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
