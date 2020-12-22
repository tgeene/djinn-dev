import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// import components
import Details from './details';
import History from './history';

// content
function AboutPage() {
  // Update Page Details
  const title = "About Trevor Geene & His Programming Experience | Djinn Development";
  const description = "Trevor Geene is a Las Vegas based Web Developer & Consultant with 10 years of professional experience building websites, applications, and managing projects.";
  update_meta_data(title, description, '/about');

  // Load Page Content
  return (
    <div id="about-page">
      <Details />
      <History />
      <a href="https://trevor.geene.co?ref=djinn-development" title="Trevor Geene's Resume" className="button" rel="noopener noreferrer" target="_blank">View Full Resume</a>
    </div>
  );
}
export default AboutPage;
