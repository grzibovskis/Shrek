import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef('#');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xscn0yh', 'template_h5zfycd', form.current, 'fRQh1zJPr1Wk510bX')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sirshrek777@gmail.com</h5>
            <a href="mailto:sirshrek777@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Massenger</h4>
            <h5>Sir Shrek</h5>
            <a href="https://m.me/sir.shrek" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+371 12345678</h5>
            <a href="https://api.whatsapp.com/send?phone+37112345678" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts