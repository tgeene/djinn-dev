import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// import components
import Details from './details';
import History from './history';
import Languages from './languages';

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
      <Languages />
    </div>
  );
}
export default AboutPage;
