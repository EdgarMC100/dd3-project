import React from 'react'
import Button from '../components/Button'
import Logo from '../components/Logo'
import '@styles/NavBar.scss'

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
          {/* <button>Work with us <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button> */}
        </div>
      </div>

    </>
  );
}

export default NavBar;