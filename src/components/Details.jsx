import React from 'react'
import '@styles/Details.scss'
import garage from '@images/garage.svg'
import bed from '@images/bed.svg'
import shower from '@images/shower.svg'
import slot from '@images/slot.svg'
import date from '@images/date.svg'

const Details = () => {
  return (
    <section className="details">
      <table>
        <thead>
          <tr><th>Details</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={bed} alt="bed image"/>4</td>
            <td><img src={shower} alt="shower image"/>2</td>
            <td><img src={slot} alt="slot image"/>2</td>
            <td><img src={garage} alt="car garage image" />1</td>
            <td><img src={date} alt="date image" />2007</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Details;
