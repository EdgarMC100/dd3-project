import React from 'react';
import Button from '../components/Button';
import '@styles/Footer.scss'
import Logo from '../components/Logo';
import FooterLinks from '../components/FooterLinks';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div class="footer-content">
          <footer>
            <div className="cta">
              <h2>Make your dreams a <span>reality</span></h2>
              <Button type="primary" width="small" height="height-lg" label="Work with us" />
            </div>
            <div className="footer-information">
              <section class="company-information">
                <Logo />
                <div class="social-networks">
                  <span class="social-network">
                    <i class="fa fa-twitter-square social-network" aria-hidden="true"></i>
                  </span>
                  <span class="social-network">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                  <span class="social-network">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
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
