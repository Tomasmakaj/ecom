import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ahg50vj', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='reach'>
      <h1 className="products" >Products for Sale send us a message</h1>
        <div className = "dm">
            <div className = "mails">
                <article className="mail">
                    <MdOutlineEmail className="dm_mail-icon"/>
                    <h4>Email</h4>
                    <h5>TheHypeHutLLC@gmail.com</h5>
                    <a href="Tmakajcoding@gmail.com" target="_blank">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  
  )
}

export default Contact