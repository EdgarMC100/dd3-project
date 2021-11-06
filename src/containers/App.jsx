import React from 'react';
import '@styles/App.scss'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import useGetData from '../hooks/useGetData';

const App = () => {
  const data = useGetData();
  let houseDetail = {}
  let houseShownedIndex = 0
  data.map((house,index) => {
    if(index == 0 ){
      houseShownedIndex = index;
      houseDetail = house;
    }
  })
  return (
    <div>
      {/* {data.map((obj) => <p>{obj.name}</p>)} */}
      <Header name={houseDetail.name} cost={houseDetail.cost}/>
      <Main houseDetail={houseDetail} houses={data} houseShownedIndex={houseShownedIndex}/>
      <Footer/>
    </div>
  );
}

export default App;
