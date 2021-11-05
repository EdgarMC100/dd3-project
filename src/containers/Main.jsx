import React from 'react'
import ContactForm from '../components/ContactForm';
import house from '@images/property-house.png';
import '@styles/Main.scss'
import Details from '../components/Details';
import Card from '../components/Card';
import HouseListing from '../components/HouseListing';

const Main = () => {
  return (
    <div className="wrapper">
      <main>
          <section>
            <div className="section-content">
              <img className="house-image" src={house} alt="" />
              <ContactForm />
            </div>
          </section>
          <Details/>
          <hr />
          <HouseListing/>
      </main>
    </div>

  );
}

export default Main;
