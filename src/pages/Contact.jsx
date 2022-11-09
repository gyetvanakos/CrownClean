import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import '../form.css';


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
    
    <div className="bg-[#505050] h-screen flex flex-col justify-center items-center">
      <div className='pt-20 w-1/2'>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo felis, porttitor ut justo vel, facilisis luctus nulla. Morbi pellentesque erat id orci dignissim mattis. Mauris commodo posuere purus, eu ultricies nisi varius vitae. Phasellus aliquet tristique turpis vitae auctor. Ut vestibulum, eros eu semper feugiat, elit tellus rutrum purus, sed ullamcorper quam lectus porttitor neque. Mauris augue ipsum, sodales eu nisi molestie, scelerisque porta magna. Cras vel turpis iaculis magna pretium dignissim.</p>
      </div>
    <form className='pt-20' ref={form} onSubmit={sendEmail}>
      <div class="row input-container">
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input type="text" name="user_name" required />
            <label>Name</label> 
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input type="text" name="user_email" required />
            <label>Email</label> 
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <textarea name="message" required></textarea>
            <label>Message</label>
          </div>
        </div>
          <Button variant="contained" type="submit" size="large">
            SEND
          </Button>
      </div>
    </form>
    </div>
  );
};

export default Contact;