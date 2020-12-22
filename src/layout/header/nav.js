import React from 'react';
import { Link } from "react-router-dom";

// content
function Nav() {
  const link_list = [
    {
      'url': "/",
      'text': "Home"
    },
    {
      'url': "/about",
      'text': "About Trevor"
    },
    {
      'url': "/contact",
      'text': "Contact Me"
    }
  ];

  return (
    <nav id="main-nav">
      <ul>
        {link_list.map((item, i) => (
          <li>
            <Link to={item.url} title={item.text+" | Djinn Development"}>{item.text}</Link>
            {item.links ?
              <ul>
                {item.links.map((sub_item, i) => (
                  <li>
                    <Link to={item.url + sub_item.url} title={sub_item.text+" - "+item.text+" | Djinn Development"}>{sub_item.text}</Link>
                  </li>
                ))}
              </ul> : null
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
