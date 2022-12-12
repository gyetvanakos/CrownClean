import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import cclogo from '../assets/logo.svg';
import Hamburger from './Hamburger';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


export default function Navbar(){
  
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  
  return (
    <div className="w-full h-20 flex justify-center bg-[#18191a]">
      <div className="w-1/2 flex justify-start">
        <Link to="/">
          <img src={cclogo} className="h-12 pl-8 w-full" alt="logo" />
        </Link>
      </div>
      <div className="h-full pt-1 pr-8 w-1/2 hidden justify-end md:flex ">
        <Link className="pl-8" to="/"> 
          <ThemeProvider theme={theme}>
            <Button>Home</Button>
          </ThemeProvider>
        </Link>
        <Link className="pl-8" to="/blog"> 
          <ThemeProvider theme={theme}>
            <Button>Blog</Button>
          </ThemeProvider>
        </Link>
        <Link className="pl-8" to="/about"> 
          <ThemeProvider theme={theme}>
            <Button>About</Button>
          </ThemeProvider>
        </Link>
        <Link className="pl-8" to="/services"> 
          <ThemeProvider theme={theme}>
            <Button>Services</Button>
          </ThemeProvider>
        </Link>
        <Link className="pl-8" to="/contact"> 
          <ThemeProvider theme={theme}>
            <Button>Contact</Button>
          </ThemeProvider>
        </Link>
      </div>
      <Hamburger/>
    </div>
  );
}