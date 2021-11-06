import React from 'react'
import '@styles/TitleBar.scss'

const TitleBar = ({name,cost}) => {
  return (
    <div className="title-bar">
      <h1>{name}</h1>
      <span>{`$${cost}`}</span>
    </div>
  );
}

export default TitleBar;
