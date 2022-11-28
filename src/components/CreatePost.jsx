import React, { useState } from 'react';
import { useNavigate } from "react-router";
//import axios from "axios";
import { request } from "../utils/axios-util";

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); 

    const handleOnSubmitForm = async (e) => {
        e.preventDefault();
        if (title === "" || content === "") {
          return alert("Please fill out the fields in a correct way!");
        }
        const data = {
          title: title,
          content: content,
        };
        request({ url: `/api/posts/`, method: "POST", data: data }).then((res) => {
          navigate(`/admin`);
          console.log(res);
        });
      };
/*const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post('http://localhost:4000/api/posts/', { title, content });
        console.log(res.data);
    }catch(error) {
        console.log(error.response)
    }
}*/

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
      <button
        onClick={handleOnSubmitForm}
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
