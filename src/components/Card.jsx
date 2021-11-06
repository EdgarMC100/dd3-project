import React from 'react'
import '@styles/Card.scss'
import bed from '@images/bed.svg'
import slot from '@images/slot.svg'
import shower from '@images/shower.svg'

const Card = ({house}) => {
  return (
    <div className="card">
      <img className="card-image" src={house.src} alt="" />
      <table>
        <thead>
          <tr><th>{house.name}</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={bed} alt="" />{house.bedrooms}
            </td>
            <td><img src={shower} alt=""/>{house.bathroom}</td>
            <td><img src={slot} alt=""/>{house.slot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;
