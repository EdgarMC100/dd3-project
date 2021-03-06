import React, { useState, useEffect } from 'react';
import '@styles/App.scss'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import useGetData from '../hooks/useGetData';

const App = () => {
  const [ type, setType ] = useState('buy')
  const { data, loading, setLoading} = useGetData(type);
  let houseDetail = {}
  let houseShownedIndex = 0
  data.map((house,index) => {
    if(index == 0 ){
      houseShownedIndex = index;
      houseDetail = house;
    }
  })

  const changeState = (newType) => {
    setType(newType)
    setLoading(true)
  }

  return (
    <div id="home">
      <Header name={houseDetail.name} cost={houseDetail.cost} loading={loading} type={type}/>
      <Main houseDetail={houseDetail} houses={data} houseShownedIndex={houseShownedIndex} changeState={changeState} type={type} loading={loading}/>
      <Footer/>
    </div>
  );
}

export default App;
