import React from 'react';
import "../styles/contact.css";
function Contact() {
  return (
    <div className="Contact text-center">
     <h2 className='text-center pt-5 mb-4'>Contact Us</h2>
     <h5 className='text-center mb-4'>Our Passion is to satisfy our clients</h5>
     <label>Name:</label>
     <input type='text' className='m-3' />
     <label>Contact No:</label>
     <input type='number' className='m-3' />
     <div className='message mt-4'>
     <p class="formfield">
  <label for="textarea" >Your Message : </label>
  <textarea className='m-3' id="textarea" placeholder='Your message here...' ></textarea>
</p>
      </div>
     
    </div>
  );
}

export default Contact;
