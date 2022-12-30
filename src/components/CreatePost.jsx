import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { request } from "../utils/axios-util";
import { storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Button from '@mui/material/Button';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); 
    const [imgUrl, setImgUrl] = useState('')
    const imagesRef = ref( storage, 'images/')
    const [loading, setLoading] = useState(false)

    const handleOnSubmitForm = async (e) => {
        e.preventDefault();
        if (title === "" || content === "") {
          return alert("Please fill out nthe fields in a correct way!");
        }
        const data = {
          title: title,
          content: content,
          picture_url: imgUrl,
        };
        request({ url: `/api/posts/`, method: "POST", data: data }).then((res) => {
          window.location.href = "/admin";
          console.log(res);
        });
        console.log(data)
      };

  const uploadFile = (file) =>{
    setLoading(true)
    if(file == null)
      return alert('Pls select a file!')
    const imageRef = ref( storage, `images/${Date.now() + file.name}` ) 
    uploadBytes(imageRef, file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        console.log(url)
        setImgUrl(url)
        setLoading(false)
      })
    }) 
  }      

  return (
    <div className="xl:w-1/2 sm:w-[80%]">
    <form>
    <div className="pt-8">
      <input 
      type="text" 
      name="post_title" 
      id="title" 
      class="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
      placeholder="Title" 
      required
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div class="sm:col-span-2 pt-8">
      <textarea 
      name="message" 
      id="message" 
      rows="6" 
      class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
      placeholder="Leave a comment..."
      value={content}
      onChange={(e) => setContent(e.target.value)}>
      </textarea>
    </div>
    <div className="pt-8 pb-8">
      <input
      type="file"
      accept="image/*"
      onChange={(event) => {
      uploadFile(event.target.files[0]);
      }}/>
        {imgUrl && (<img src={imgUrl} alt="content"></img>)}
    </div>
      <Button 
      className="" 
      variant="contained" 
      type="submit" 
      size="large"
      onClick={handleOnSubmitForm}
      disabled={loading}>
        Create post
      </Button>
    </form>
    </div>
  );
}

export default CreatePost;