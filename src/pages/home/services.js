import React from 'react';

// content
function Services() {
  return (
    <section className="services">
      <h2>What services do I offer?</h2>
      <p>For those seeking web services, below is a small list of things that I can offer, but as we full stack web developer I can build just about anything you might need a website to be able to do.</p>
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
            <li>Create Custom Web Applications</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
export default Services;
