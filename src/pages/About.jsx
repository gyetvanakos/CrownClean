import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cclogo from '../assets/logo.svg';

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

function About() {

  return (
    <div className=" box-content flex flex-col justify-center items-center bg-[#505050] w-full ">
      <section className="w-[80%] h-1/3 md:w-[50%] ">
        <div className="pt-8">
            <img src={cclogo} className="h-10 w-full" alt="logo" />
            <h1 className='text-white'>
              ABOUT US
            </h1>
            <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-white sm:text-xl">
            The Car Cleaning Company are a leading mobile vehicle enhancement specialist. established in 2012, and operating around the Ribble Valley, we have been dedicated to bringing our customers the very best in vehicle enhancement, protection and maintenance from the very start. 
            </p>
            <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-white sm:text-xl">
            We pride ourselves on delivering only the finest valeting and vehicle preparation with our attention to detail second to non. 
            Our fully mobile units are equipped with their own water and electric supply so no matter where you are, at home or at work, The Car Cleaning Company will take care of your vehicle without compromise! 
            </p>
            <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-white sm:text-xl">
            Our dedication to product development and keeping up to date with the latest products, machines and methods has enabled us to bring you the very best in  mobile valeting and detailing, ensuring that your vehicle is cared for exactly how it should be.  
            </p>
          </div>
      </section>
      <section className="w-[80%] h-1/3 flex justify-center items-center mb-0 sm:mb-20">
        <ImageSlider/>
      </section>
      <section className="w-[80%] h-1/3">
        <div className="text-center">
          <Link className="" to="/contact">
            <ThemeProvider theme={theme}> 
            <Button className="" variant="contained" type="submit" size="large">
              Contact us
            </Button>
            </ThemeProvider>
          </Link>
          <h1 className='text-white text-[3rem] pt-12 pb-12'>
            "If you want more than average"
          </h1>
        
        </div>
      </section>
    </div>
  );
};
export default About;
