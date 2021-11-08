import React from 'react'
import '@styles/TitleBar.scss'

const TitleBar = ({name,cost, loading}) => {
  return (
    <div className="title-bar">
      <h1>{loading ? null : name}</h1>
      <span>{loading ? null : `$${cost}`}</span>
    </div>
  );
}

export default TitleBar;
