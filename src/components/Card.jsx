import React from 'react'
import '@styles/Card.scss'
import bed from '@images/bed.svg'
import slot from '@images/slot.svg'
import cardImage from '@images/house.png'
import shower from '@images/shower.svg'
const Card = () => {
  return (
    <div className="card">
      <img className="card-image"src={cardImage} alt="" />
      <table>
        <thead>
          <tr><th>Malto House</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={bed} alt="" /> 4
            </td>
            <td><img src={shower} alt=""/>2</td>
            <td><img src={slot} alt=""/>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;
