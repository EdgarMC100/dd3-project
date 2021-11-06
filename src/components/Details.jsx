import React from 'react'
import '@styles/Details.scss'
import garage from '@images/garage.svg'
import bed from '@images/bed.svg'
import shower from '@images/shower.svg'
import slot from '@images/slot.svg'
import date from '@images/date.svg'

const Details = ({houseDetail}) => {
  return (
    <section className="details">
      <table>
        <thead>
          <tr><th>Details</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={bed} alt="bed image"/>{houseDetail.bedrooms}</td>
            <td><img src={shower} alt="shower image"/>{houseDetail.bathroom}</td>
            <td><img src={slot} alt="slot image"/>{houseDetail.slot}</td>
            <td><img src={garage} alt="car garage image" />{houseDetail.slot}</td>
            <td><img src={date} alt="date image" />{houseDetail.year}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Details;
