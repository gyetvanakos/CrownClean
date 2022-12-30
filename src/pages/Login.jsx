import React, { useState } from "react";
import swal from "sweetalert";
import TextField from "../components/Textfield";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@mui/material/Button';

async function loginUser(credentials) {
    return await fetch('https://crowncleanapi.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
   }
 
   export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await loginUser({
        email,
        password,
      });
      const res = await response.json()

      if (response.ok) {
        swal("Success", res.message, "success", {
          buttons: false,
          timer: 2000,
        }).then((value) => {
          localStorage.setItem("accessToken", res["data"].token);
          localStorage.setItem("user", res["data"].userId);
          localStorage.setItem("name", res["data"].name);
          localStorage.setItem("email", res["data"].email);
          window.location.href = "/admin";
        });
      } else {
        toast.error(res.error + ", please try again!", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    };
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