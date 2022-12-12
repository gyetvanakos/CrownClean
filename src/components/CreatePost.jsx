import React, { useState } from 'react';
import { useNavigate } from "react-router";
//import axios from "axios";
import { request } from "../utils/axios-util";
import { storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
          return alert("Please fill out the fields in a correct way!");
        }
        const data = {
          title: title,
          content: content,
          picture_url: imgUrl,
        };
        request({ url: `/api/posts/`, method: "POST", data: data }).then((res) => {
          navigate(`/admin`);
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
    <div>
    <form>
      <label> Title:
      <input
          className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label> Content:
      <input
          className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
          type="text"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label> Image:
          <div className="App">
            <input
              type="file"
              onChange={(event) => {
                uploadFile(event.target.files[0]);
              }}
            
            />
            {imgUrl && (<img src={imgUrl} alt="content"></img>)}
          </div>
      </label>
      <button
        onClick={handleOnSubmitForm}
        disabled={loading}
        type="submit"
        className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
      >
        Create Post
      </button>
    </form>
    </div>
  );
}

export default CreatePost;
