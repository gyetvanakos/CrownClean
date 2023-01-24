import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { request } from "../utils/axios-util";
import { storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Button from '@mui/material/Button';
import TextEditor from './TextEditor';

function CreatePost() {
  return (
    <div className="xl:w-1/2 sm:w-[80%]">
    <form>
      <TextEditor/>
    </form>
    </div>
  );
}

export default CreatePost;