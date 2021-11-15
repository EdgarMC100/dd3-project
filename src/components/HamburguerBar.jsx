import React, {useState}from 'react'
import '@styles/Hamburguerbar.scss'
import Menu from './Menu/Menu';

const $body = document.getElementsByTagName('body')[0]

const HamburguerBar = () => {
  const [show, setShow ] = useState(false);
  const handleShowMenu = (e) => {
    e.preventDefault()
    setShow(true)
    $body.style.overflowY = 'hidden'
  }
  return (
    <div className="hamburguer-menu">
      <a href="" onClick={handleShowMenu}><i className="fa fa-bars" aria-hidden="true"></i></a>
      {show && <Menu setShow={setShow}/>}
    </div>
  );
}

export default HamburguerBar;