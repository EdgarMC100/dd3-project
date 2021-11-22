import React from 'react'
import './Menu.scss'
const $body = document.getElementsByTagName('body')[0];


const Menu = ({setShow}) => {
  const handleHiddeMenu = () => {
    const $menu = document.getElementsByClassName('menu')[0];
    $menu.classList.add('menu-closed')

    $body.style.overflowY = 'visible'
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }

  const handleAnchor = () => {

  }
  return (
    <div className="menu">
      <i className="fa fa-times" aria-hidden="true" onClick={handleHiddeMenu}></i>
      <nav>
        <ul>
          <li><i class="fa fa-home" aria-hidden="true"></i><a href="#home" onClick={handleHiddeMenu}>Home</a></li>
          <li><i class="fa fa-info" aria-hidden="true"></i><a href="#details" onClick={handleHiddeMenu}>Info</a></li>
          <li><i class="fa fa-list" aria-hidden="true"></i><a href="#houses" onClick={handleHiddeMenu}>Houses</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;