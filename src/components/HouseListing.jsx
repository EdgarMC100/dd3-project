import React , { useEffect, useState } from 'react'
import Card from './Card';
import search from '@images/search.svg'
import arrows from '@images/arrows.svg'
import '@styles/HouseListing.scss'
import { ShimmerThumbnail } from 'react-shimmer-effects';

const HouseListing = ({ houses, houseShownedIndex, type, changeState, loading}) => {
  const [ matchedHouses, setMatchedHouses] = useState([])
  let matchedHousesFiltered = []

  const handleSearch = (e) => {
    if(e.target.value.length){
      findDetails(e.target.value)
    }else{
      setMatchedHouses(houses)
    }
  }

  const findDetails = (detail) => {
    houses.map((house) =>{
      compareDetails(house,detail)
    })
    setMatchedHouses(matchedHousesFiltered)
  }

  const compareDetails = (house,detail) => {
    if (
      house.name.toLowerCase().includes(detail) ||
      house.cost == detail || house.bethroom == detail
      || house.bathroom == detail || house.slot == detail
      || house.year == detail) {
      matchedHousesFiltered.push(house)
    }
  }

  const handleOnClickType = () =>{
    type == 'rent' ? changeState('buy'): changeState('rent')
  }
  return (
      <section className="house-listing">
        <div className="filters">
          <h2>Similar listings</h2>
          <div className="inputs">
            <div className="searcher">
              <input type="text" placeholder="Search list..." name="search" onChange={handleSearch}/>
              <img src={search} alt="" />
            </div>
            <div className="searcher">
              <input type="text" placeholder="Type" onClick={handleOnClickType}/>
              <img src={arrows} alt="" />
            </div>
          </div>
        </div>
        <div className="cards">
        {loading ?
          [1,2,3,4].map((_,index)=>{
            return (
              <div style={{height: '100%'}} key={index}>
                <ShimmerThumbnail height={418} width={336}/>
              </div>
            )
          })
        :!matchedHouses.length ? houses.map((house, index) => {
          return (
            <div key={house.name+index}>
              <Card house={house} key={house.name+index}/>
            </div>
          )
        })
        :
        matchedHouses.map((house, index)=>{
            return (
              <>
                <Card house={house}/>
              </>
            )
          })}
        </div>
      </section>
  );
}

export default HouseListing;
