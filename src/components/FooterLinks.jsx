import React from 'react'
import '@styles/FooterLinks.scss'

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <h3>Column Heading</h3>
      <nav>
        <ul>
          <li key={'first'}>Links goes here</li>
          <li key={'second'}>Links goes here</li>
          <li key={'third'}>Links goes here</li>
          <li key={'forth'}>Links goes here</li>
        </ul>
      </nav>
    </div>
  );
}

export default FooterLinks;
