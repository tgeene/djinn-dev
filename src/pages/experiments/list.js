import React from 'react';
import { Link } from "react-router-dom";

// content
function List() {
  const link_list = [
    {
      'url': "/password-generator",
      'text': "Password Generation Tool",
      'description': "This tool allows you to select from a few differnt options to generate unique and secure passwords based on your needs."
    },
    {
      'url': "/ipsum-generator",
      'text': "Djinn Ipsum Generation Tool",
      'description': "This tool allows your to generate random filler text similar to lorem ipsum, but with a little bit of a magical flair."
    }
  ];

  return (
    <section className="list">
      <h2>On-site Experiments & Tools</h2>
      <nav>
        <ul>
          {link_list.map((item, i) => (
            <li key={i}>
              <Link to={"/experiments"+item.url} title={item.text+" | Djinn Development"}>{item.text}</Link> - {item.description}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
export default List;
