import React from 'react';

// load library
import { update_meta_data } from '../../../lib/misc';

// import components
import Details from './details';
import Form from './form';

// content
function PasswordGeneratorPage() {
  // Update Page Details
  const title = "Unique Password Generation Tool | Djinn Development";
  const description = "";
  update_meta_data(title, description, '/experiments/password-generator');

  // Load Page Content
  return (
    <div id="experiments-page">
      <Details />
      <Form />
    </div>
  );
}
export default PasswordGeneratorPage;
