import React from 'react'
import ContactForm from '../components/ContactForm';
import house from '@images/property-house.png';
import '@styles/Main.scss'
import Details from '../components/Details';
import HouseListing from '../components/HouseListing';

const Main = ({houseDetail, houses,houseShownedIndex}) => {
  console.log(houses)
  console.log(houseDetail)
  return (
    <div className="wrapper">
      <main>
          <section>
            <div className="section-content">
            <img className="house-image" src={houseDetail.src} alt="" />
              <ContactForm />
            </div>
          </section>
          <Details houseDetail={houseDetail}/>
          <hr />
        <HouseListing houses={houses} houseShownedIndex={houseShownedIndex}/>
      </main>
    </div>

  );
}

export default Main;
