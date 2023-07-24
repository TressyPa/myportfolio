import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import {BsWhatsapp} from  'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wl0q4pa', 'template_w4pap3p', form.current, 'Br7bh_Lg2BOZlllMf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
                <MdEmail className='contact__option-icon'/>
               <h4>Email</h4>
               <h5>lindawangwe5@gmail.com</h5>
               <a href="mailto:lindawangwe5@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
            </article>

            <article className='contact__option'>
                <BsTelegram className='contact__option-icon'/>
               <h4>Telegram</h4>
               <h5>lindawangwe5@gmail.com</h5>
               <a href='https://web.telegram.org/k/' target='_blank' rel="noreferrer">Telegram Me</a>
            </article>

            <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
               <h4>Whatsapp</h4>
               <h5>lindawangwe5@gmail.com</h5>
               <a href='https://api.whatsapp.com/send?phone=+254711268173' target='_blank' rel="noreferrer">Whatsapp me</a>
            </article>
          </div>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name="name" placeholder='Enter your full name' required/>
              <input type='email' name="email" placeholder='Enter your email' required/>
              <textarea rows="7"  name="message" placeholder='text' required></textarea>  
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact