import React, { useState } from 'react';
import '@styles/App.scss'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import useGetData from '../hooks/useGetData';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  const [ type, setType ] = useState('buy')
  const data = useGetData(type);
  let houseDetail = {}
  let houseShownedIndex = 0
  data.map((house,index) => {
    if(index == 0 ){
      houseShownedIndex = index;
      houseDetail = house;
    }
  })

  const changeState = (newType => {
    setType(newType)
    console.log(newType)
  })

  return (
    <div>
      <Header name={houseDetail.name} cost={houseDetail.cost}/>
      <Main houseDetail={houseDetail} houses={data} houseShownedIndex={houseShownedIndex} changeState={changeState} type={type}/>
      <Footer/>
    </div>
  );
}

export default App;
