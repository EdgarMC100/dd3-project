import React from 'react'
import ContactForm from '../components/ContactForm';
import '@styles/Main.scss'
import Details from '../components/Details';
import HouseListing from '../components/HouseListing';
import { ShimmerThumbnail } from 'react-shimmer-effects';

const Main = ({ houseDetail, houses, houseShownedIndex, type, changeState, loading}) => {
  const shimmerContent = {
    width: '100%', marginRight: '23px', borderRadius: '0 57px 0 0', overflow:'hidden', height: 'auto'
  }
  return (
    <div className="wrapper">
      <main>
          <section>
            <div className="section-content">
              {loading ? <div style={shimmerContent}>
                <ShimmerThumbnail card height={520} rounded={true}/></div>
                : <div className="img-content"><img className="house-image" src={houseDetail.src} alt="" /></div>
              }
              <ContactForm />
              <div style={{ width: 'auto' }}>

              </div>
              <Details houseDetail={houseDetail} loading={loading} />
            </div>
          </section>

          <hr />
        <HouseListing houses={houses} houseShownedIndex={houseShownedIndex} changeState={changeState} type={type} loading={loading}/>
      </main>
    </div>

  );
}

export default Main;
