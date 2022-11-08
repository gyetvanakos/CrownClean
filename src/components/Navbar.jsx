import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import cclogo from '../assets/logo.svg';

function Navbar() {
  return (
    <div class="w-full flex justify-center items-center bg-[#3e5c9a]">
    <header class="h-32 w-[1400px] flex ">
      <div class="justify-center">
        <img src={cclogo} className="h-20 pt-8 pl-8" alt="logo" />
      </div>
      <div class="flex w-full justify-end items-center">
        <Link className="pl-8" to="/blog"> Blog </Link>
        <Link className="pl-8" to="/services"> Services </Link>
        <Link className="pl-8" to="/aboutus"> About us </Link>
        <Link className="pl-8" to="/contact"> Contact </Link>
      </div>
    </header>
    </div>
  );
}

export default Navbar;