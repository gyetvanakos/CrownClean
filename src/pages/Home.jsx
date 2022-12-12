import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function Home() {
  return (
      <div className="bg-landbingbackground h-[887px] flex justify-center">
        <div className="h-full w-full">
          <div  className="h-3/6 w-full">
            <h1 className="text-[8vw] text-white text-left pt-8 flex justify-center items-center">
              PREMIUM CAR <br/> DETAILING 
            </h1>
          </div>
          <div  className="w-full pt-8 flex justify-center items-center">
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