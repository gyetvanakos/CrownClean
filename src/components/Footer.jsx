import React from "react";
import { Link } from "react-router-dom";
import cclogo from '../assets/logo.svg';
import { FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-[#656565]">
        <footer className="h-44 w-[1400px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center w-4/12">
              <Link to="/">
                <img src={cclogo} className="block h-12 pl-8" alt="logo" />    
              </Link>
                <h2 className="pt-4 block text-base text-white">@Copyrights</h2>
            </div>
            <div className=" items-center justify-center w-1/4">
              <Link className="block" to="/"> Home </Link>
              <Link className="block" to="/blog"> Blog </Link>
              <Link className="block" to="/services"> Services </Link>
              <Link className="block" to="/contact"> Contact </Link>
            </div>
            <div class="flex flex-col justify-center text-2xl w-4/12">
              <h1 className="text-base text-white">Contact Us</h1>
              <div className="flex items-center justify-center">
              <a className="pr-4" href="https://www.facebook.com/CrownCleanKft"><FaFacebook className="text-white"/></a>
              <a className="pr-4" href="https://www.tiktok.com/@4c_crowncleancarcosmetic"><FaTiktok className="text-white"/></a>
              <Link  to="/contact"><FaEnvelope className="text-white"/></Link>
              </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;