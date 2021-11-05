import React from 'react'
import '@styles/Button.scss'
const Button = (props) => {
  const className = `button ${props.type} ${props.width} ${props.height}`
  return (
    <button className={className}>
      {props.label}<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </button>
  );
}

Button.defaultProps ={
  type: "primary",
  width: "small",
  height: "height-sm"
}
export default Button;
