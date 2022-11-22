import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" >
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/" element={<><ProtectedRoutes/></>}>
              <Route path='/admin' element={<Admin/>} />
            </Route>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
