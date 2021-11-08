import React from 'react'
import NavBar from '../containers/NavBar'
import TitleBar from '../components/TitleBar'
import '@styles/Header.scss'

const Header = ({name, cost, loading}) => {
  return (
    <div className="header">
        <div className="header-content">
          <header>
            <div className="wrapper">
              <NavBar />
            </div>
            <hr className="break-line"></hr>
            <div className="wrapper">
              <TitleBar name={name} cost={cost} loading={loading}/>
            </div>
          </header>
      </div>
    </div>
  );
}

export default Header;
