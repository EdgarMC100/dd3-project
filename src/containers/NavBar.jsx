import React from 'react'
import Button from '../components/Button'
import Logo from '../components/Logo'
import '@styles/NavBar.scss'
import HamburguerBar from '../components/HamburguerBar'

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Logo />
        <div className="nav-content">
          <nav>
            <ul>
              <li>Nav Link</li>
              <li>Nav Link</li>
              <li>Nav Link</li>
              <li>Nav Link</li>
            </ul>
          </nav>
          <Button width="small" height="height-sm" label="Work with us"/>
          <HamburguerBar/>
        </div>
      </div>

    </>
  );
}

export default NavBar;
