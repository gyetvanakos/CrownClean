import React from "react";
import Slider from "../components/Slider"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import cclogo from '../assets/logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


function Home() {
  return (
      <div className="bg-landbingbackground bg-cover bg-center h-screen mb:h-[887px]">
          <Slider/>
      </div>
      
  );
}

export default Home;