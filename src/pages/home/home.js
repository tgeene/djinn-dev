import React from 'react';

// load library
import { update_meta_data } from '../../lib/misc';

// content
function HomePage() {
  // Update Page Details
  const title = "Trevor Geene's Portfolio Site | Djinn Development";
  const description = "This site is to serve as the primary portfolio of Trevor Geene's web development work.";
  update_meta_data(title, description, '/');

  // Load Page Content
  return (
    <div id="home-page">
      <p>The purpose of this site is to not only showcase the work and experience of Trevor Geene, but also to serve as a way to contact me for recieving development services. While this site currently is lacking in work to show off my skills; it is my goal for 2021 to build useful tools and fun experients on this site that even people who do not seem work from me will hopefully enjoy.</p>
      <p>For those seeking web services, below is a small list of things that I can offer:</p>
      <ul>
        <li>
          Consulting Services
          <ul>
            <li>Backend &amp; Frontend Technology Selection</li>
            <li>Database Architecture Creation</li>
            <li>Search Engine Optimization Analysis</li>
          </ul>
        </li>
        <li>
          Freelance Services
          <ul>
            <li>Server Setup &amp; Managment</li>
            <li>Develop Responsive Websites</li>
            <li>Build Restful API Systems</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
