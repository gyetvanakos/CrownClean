import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function Home() {
  return (
      <div className="bg-landbingbackground h-[850px] flex justify-center">
        <div className="h-full w-3/6">
          <div  className="h-3/6 w-full">
            <h1 className="text-9xl text-white text-left pt-48">
              PREMIUM CAR DETAILING
            </h1>
          </div>
          <div  className="w-full flex justify-start pt-8">
            <Link  to="/services">
              <Button variant="contained" size="large">
                SEE OUR SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Home;