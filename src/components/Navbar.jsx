import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import cclogo from '../assets/logo.svg';
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
    <div className="w-full flex justify-center items-center bg-[#3e5c9a]">
    <header className="h-32 w-[1400px] flex ">
      <div className="justify-center">
        <Link to="/">
          <img src={cclogo} className="h-20 pl-8" alt="logo" />
        </Link>
      </div>
      <div className="flex w-full justify-end items-center">
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
        <Link className="pl-8" to="/login"> 
        <ThemeProvider theme={theme}>
          <Button>Login</Button>
        </ThemeProvider>
        </Link>
        <Link className="pl-8" to="/"> 
        <ThemeProvider theme={theme}>
        <Button 
        onClick={logOut} 
        >
          Logout
        </Button>
        </ThemeProvider>
        </Link>
      </div>
    </header>
    </div>
  );
}