import React from 'react'
import avatar from '@images/avatar.png';
import '@styles/ContactForm.scss'
import Button from '../components/Button'

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="agent">
        <img src={avatar} alt="avatar image" />
        <div className="contact-information">
          <p>Kayley Hall</p>
          <a href="#">View profile</a>
        </div>
      </div>
      <form action="">
        <input type="text" placeholder="Name"/>
        <input type="phone" placeholder="Phone"/>
        <input type="email" placeholder="Email"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Hello, I am interested in..." maxLength="200"></textarea>
        <Button type="secondary" width="large" height="height-lg" label="Learn more"/>
      </form>
    </section>
  );
}

export default ContactForm;
