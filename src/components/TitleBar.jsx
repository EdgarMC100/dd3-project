import React from 'react'
import '@styles/TitleBar.scss'

const TitleBar = ({name,cost, loading, type}) => {
  return (
    <div className="title-bar">
      <h1>{loading ? null : name}</h1>
      <h1>{loading ? null : type.toUpperCase()}</h1>
      <span>{loading ? null : `$${cost}`}</span>
    </div>
  );
}

export default TitleBar;
