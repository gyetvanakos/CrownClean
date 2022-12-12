import React from "react";
import { Link } from "react-router-dom";
import cclogo from '../assets/logo.svg';
import { FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full flex bg-[#18191a]">
        <footer className="h-24 w-full flex flex-col justify-center items-center">
          <section className="flex">
            <p className="text-white pr-8">
              +36 30 931 7888
            </p>
            <p className="text-white">
              <Link  to="/contact">info@crownclean.hu</Link>
            </p>
          </section>
          <section class="flex flex-col justify-center text-2xl w-1/2">
            <div className="flex items-center justify-center">
            <a className="pr-12" href="https://www.facebook.com/CrownCleanKft"><FaFacebook className="text-white"/></a>
            <a href="https://www.tiktok.com/@crowncleancarcosmetics"><FaTiktok className="text-white"/></a>
            </div>
          </section>
        </footer>
    </div>
  );
}

export default Footer;