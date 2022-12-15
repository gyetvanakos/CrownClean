import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient} from 'react-query';
import './App.css';
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Navbar from "./components/Navbar"
import SinglePost from "./components/SinglePost"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"
import './form.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <div className="App" >
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/" element={<><ProtectedRoutes/></>}>
              <Route path='/admin' element={<Admin/>} />
              <Route path="/posts/:postId" element={<SinglePost />} />
            </Route>
          </Routes>
          <Footer/>
        </Router>
    </div>
    </QueryClientProvider>
  );
}

export default App;
