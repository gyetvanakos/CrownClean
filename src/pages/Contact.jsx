import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cclogo from '../assets/logo.svg';
import swal from "sweetalert";

const theme = createTheme({
  palette: {
    primary: {
      main: '#18191a',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j3td01i', 'template_rnjdl06', form.current, 'wCCDlX82rMgCIlBF1')
    
    .then((result) => {
          swal("Success", 'Thank you for your email', "success", {
            buttons: false,
            timer: 3000,
          }) 
      }, (error) => {
          console.log(error.text);
      });

  };

  return (
    
    <div>
      <section class="bg-[#505050]">
        <div class="py-8 lg:py-8 mx-auto max-w-screen-md">
            <img src={cclogo} className="h-10 w-full" alt="logo" />
            <h1 class="mb-4 text-center text-white">CONTACT US</h1>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl">Got questions? Need details about our services? Let us know.</p>
            <form action="#" class="space-y-8" ref={form} onSubmit={sendEmail}>
                <div>
                    <input type="text" name="user_name" id="name" class="shadow-sm bg-[#18191a] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
                </div>
                <div>
                    <input type="email" name="user_email" id="email" class="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
                </div>
                <div class="sm:col-span-2">
                    <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <ThemeProvider theme={theme}> 
                  <Button className="pt-20" variant="contained" type="submit" size="large">
                    Contact us
                  </Button>
                </ThemeProvider>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

