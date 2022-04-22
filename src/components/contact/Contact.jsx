import './contact.scss'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03iv4x9', 'template_6bgsp9q', form.current, 'm7H6hOWsGqrLX2Zw-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/Mailbox.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='email' placeholder='Email' required/>
          <input type="text" name='name' placeholder='Name' required/>
          <textarea name='message' placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
        </form>
        <ul>
          <li>
            <IconButton href='https://github.com/jppak86' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </IconButton>
          </li>
          <li>
            <IconButton href='https://www.linkedin.com/in/jaydenpak/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  )
}
