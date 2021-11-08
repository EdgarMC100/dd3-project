import React from 'react';
import Button from '../components/Button';
import '@styles/Footer.scss'
import Logo from '../components/Logo';
import FooterLinks from '../components/FooterLinks';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <footer>
            <div className="cta">
              <h2>Make your dreams a <span>reality</span></h2>
              <Button type="primary" width="small" height="height-lg" label="Work with us" />
            </div>
            <div className="footer-information">
              <section className="company-information">
                <Logo />
                <div className="social-networks">
                  <span className="social-network">
                    <i className="fa fa-twitter-square social-network" aria-hidden="true"></i>
                  </span>
                  <span className="social-network">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                  <span className="social-network">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </span>
                </div>
              </section>
              <div className="links">
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>

  );
}

export default Footer;
