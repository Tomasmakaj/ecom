import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ahg50vj', 'template_1welkmc', form.current, 'W0WzL23Z0264HFOjM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      Swal.fire(
        'Good job!',
        'Your message has been sent!',
        'success'
      )
  };

  return (
    <section id='reach'>
      <h1 className="products" >Inventory for sale send us a message!</h1>
        <div className = "dm">
            <div className = "mails">
                <article className="mail">
                    <MdOutlineEmail className="dm_mail-icon"/>
                    <h4>Email</h4>
                    <h5>tmakajcoding@gmail.com</h5>
                    <a href="Tmakajcoding@gmail.com" target="_blank">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='subject' placeholder='Subject' required />
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button  type='submit' className='btn btn-primary'>Send Message</button>
            </form>
       {/* <form ref={form} onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" name="subject" placeholder='Subject' />
      <label>Name</label>
      <input type="text" name="name" placeholder='Your Full Name' />
      <label>Email</label>
      <input type="email" name="email" placeholder='Your Email' />
      <label>Message</label>
      <textarea name="message" placeholder='Your Message'/>
      <input type="submit" value="Send" />
      </form> */}
      </div>
    </section>
  
  )
}

export default Contact