import React from 'react'
import NavBar from '../containers/NavBar'
import TitleBar from '../components/TitleBar'
import '@styles/Header.scss'

const Header = () => {
  return (
    <div className="header">
        <div className="header-content">
          <header>
            <div className="wrapper">
              <NavBar />
            </div>
            <hr className="break-line"></hr>
            <div className="wrapper">
              <TitleBar />
            </div>
          </header>
      </div>

    </div>
  );
}

export default Header;
