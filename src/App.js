import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"



function App() {
  return (
    <div className="App" >
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
