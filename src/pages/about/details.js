import React from 'react';

import trevor_geene from '../../assets/images/trevor_geene.jpg';

// content
function Details() {
  return (
    <section className="details">
      <img src={trevor_geene} alt="Trevor Geene" className="profile-picture" width="250px" />
      <h1>Trevor Geene's Bio</h1>
      <ul>
        <li><strong>Name Pronunciation:</strong> TRE-ver JEE-nee</li>
        <li><strong>Current Location:</strong> Las Vegas, NV</li>
        <li><strong>Languages Spoken:</strong> English</li>
      </ul>
      <p>As a developer who has spent most of his carrer working for web firms I never spent the time to build or maintain a personal website. Yet for one reason or another I am feeling compelled to put who I am to a website beyond my resume. Being primarily a coder I don't really have a portfolio for non-coders to really look at, but over time I will build fun tools/experiments into this website to show off my skills.</p>
    </section>
  );
}
export default Details;
