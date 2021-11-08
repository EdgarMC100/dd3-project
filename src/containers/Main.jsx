import React from 'react'
import ContactForm from '../components/ContactForm';
import '@styles/Main.scss'
import Details from '../components/Details';
import HouseListing from '../components/HouseListing';



const Main = ({ houseDetail, houses, houseShownedIndex, type, changeState}) => {
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
        <HouseListing houses={houses} houseShownedIndex={houseShownedIndex} changeState={changeState} type={type}/>
      </main>
    </div>

  );
}

export default Main;
