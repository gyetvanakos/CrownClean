import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function About() {

  return (
    <div className=" box-content flex flex-col justify-center items-center bg-[#505050] w-full">
      <section className="w-[80%] box-border h-1/3">
        <div className="text-center md:pt-28">
            <h1 className='text-white'>
              ABOUT US
            </h1>
            <p className='text-white w-full'>
            The Car Cleaning Company are a leading mobile vehicle enhancement specialist. established in 2012, and operating around the Ribble Valley, we have been dedicated to bringing our customers the very best in vehicle enhancement, protection and maintenance from the very start. 
            </p>
            <p className='text-white pt-8 w-full'>
            We pride ourselves on delivering only the finest valeting and vehicle preparation with our attention to detail second to non. 
            Our fully mobile units are equipped with their own water and electric supply so no matter where you are, at home or at work, The Car Cleaning Company will take care of your vehicle without compromise! 
            </p>
            <p className='text-white pt-8 pb-8 w-full'>
            Our dedication to product development and keeping up to date with the latest products, machines and methods has enabled us to bring you the very best in  mobile valeting and detailing, ensuring that your vehicle is cared for exactly how it should be.  
            </p>
          </div>
      </section>
      <section className="w-[80%] box-border h-1/3">
        <ImageSlider/>
      </section>
      <section className="w-[80%] box-border h-1/3">
        <div className="text-center">
          <Link className="" to="/contact"> 
            <Button className="pt-20" variant="contained" type="submit" size="large">
              Contact us
            </Button>
          </Link>
          <h1 className='text-white text-[3rem]'>
            "Amikor az átlagosnál többet szeretnél"
          </h1>
        </div>
      </section>
    </div>
  );
};
export default About;
