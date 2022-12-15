import { useState, useEffect } from "react";
import { sliderData } from "../slider_data";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Slider.css";

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

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

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
    <div className="h-[300px] w-full flex justify-center items-center pt-0 sm:pt-12 sm:h-[500px]">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="flex justify-center items-center w-full">
                <img src={slide.image} alt="slide" className="image w-[800px]" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;