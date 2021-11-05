import React from 'react'
import Card from './Card';
import search from '@images/search.svg'
import arrows from '@images/arrows.svg'
import '@styles/HouseListing.scss'
const HouseListing = () => {
  return (
      <section className="house-listing">
        <div className="filters">
          <h2>Similar listings</h2>
          <div className="inputs">
            <div className="searcher">
              <input type="text" placeholder="Search list..." />
              <img src={search} alt="" />
            </div>
            <div className="searcher">
              <input type="text" placeholder="Type" />
              <img src={arrows} alt="" />
            </div>

          </div>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
  );
}

export default HouseListing;
