import { useState, useEffect } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { homeSlider } from "../home_slider";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import cclogo from '../assets/logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = homeSlider.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="h-content w-full"> 
      {homeSlider.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="h-full w-full flex-col justify-center items-center pt-24">
                <div className="h-[10%] flex justify-center items-center">
                        <img src={cclogo} className="h-12 w-full" alt="logo" />
                </div>
                <div  className="h-1/3 w-full">
                  <h1 className="text-[16vw] text-white text-left pt-8 flex justify-center items-center md:text-[8vw] text-center pt-0">
                    {slide.heading}
                  </h1>
                </div>
                <div  className="h-1/3 w-full pt-2 flex justify-center items-center mb:pb-16 pt-8">
                  <Link className="" to={slide.link}> 
                    <ThemeProvider theme={theme}>
                      <Button variant="outlined" size="large">{slide.button}</Button>
                    </ThemeProvider>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;