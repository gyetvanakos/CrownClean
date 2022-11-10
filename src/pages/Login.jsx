import React, { useState } from "react";
import swal from "sweetalert";
import TextField from "../components/Textfield";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@mui/material/Button';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('email', JSON.stringify(response['email']));
        window.location.href = "/blog";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }
  return (
    <div className="relative w-full h-screen bg-[#505050]">
      <ToastContainer />
      <div className="flex justify-center items-center h-full">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-[#2d2d2d] p-8"
        >
          <TextField
            value={email}
            label="Email"
            type={"text"}
            onChange={(value) => setEmail(value)} 
          />
          <TextField
            value={password}
            label="Password"
            type={"password"}
            onChange={(value) => setPassword(value)} 
          />
          <Button variant="contained" size="large" type="submit">
             Login
          </Button>
        </form>
      </div>
    </div>
  );
}