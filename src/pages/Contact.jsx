import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j3td01i', 'template_rnjdl06', form.current, 'wCCDlX82rMgCIlBF1')
      .then((result) => {
          console.log(result.text);
          console.log ("email sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bg-[#505050] h-[850px]'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <Button type="submit" size="large" value="Send">
        SEND
      </Button>
    </form>
    </div>
  );
};

export default Contact;