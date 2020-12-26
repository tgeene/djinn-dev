import React from 'react';

// content
function Social() {
  const link_list = [
    {
      'url': "https://trevor.geene.co?ref=djinn-development",
      'title': "Trevor Geene's Resume",
      'text': "Resume"
    },
    {
      'url': "https://www.linkedin.com/in/tgeene",
      'title': "Trevor Geene's LinkedIn Profile",
      'text': "LinkedIn"
    },
    {
      'url': "https://github.com/tgeene",
      'title': "Trevor Geene's GitHub Repositories",
      'text': "GitHub"
    },
    {
      'url': "https://stackoverflow.com/users/7764371/trevor-geene",
      'title': "Stack Overflow Profile",
      'text': "Stack Overflow"
    }
  ];

  return (
    <nav id="social-nav">
      <ul>
        {link_list.map((item, i) => (
          <li><a href={item.url} title={item.title} rel="noopener noreferrer" target="_blank">{item.text}</a></li>
        ))}
      </ul>
    </nav>
  );
}
export default Social;
