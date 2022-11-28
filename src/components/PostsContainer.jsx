import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import Button from '@mui/material/Button';
import PostsUpdateModal from '../components/PostsUpdateModal';




const fetchPosts = () => {
  return request({
    url: `api/posts`,
  });
};


function handleOnClickDelete(postId) {
  request({ url: `/api/posts/${postId}`, method: "DELETE" }).then(() => {
    swal("Success!", "Post was deleted.", "success", {
      buttons: false,
      timer: 2000,
    }).then(() => {
      window.location.href = "/admin";
    });
  });
}

export default function PostsContainer() {
    const { isLoading, data } = useQuery("projectNames", fetchPosts);
    const [show, setShow] = React.useState(false);
    const [justClickedPost, setJustClickedPost] = React.useState(null);
    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    
    
  
    return (
      <>
        {
        data?.data.map((post) => (
          <div key={post._id}>
            <div className="relative block p-4 border overflow-hidden border-gray-200 shadow-sm rounded-lg focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200 bg-white">
              <div className="grid-cols-3">
                <div className="my-5">
                  <h6 className="mt-2 mb-3 font-bold">{post.title}</h6>
  
                  <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                    {post.content}
                  </p>
                </div>
                <Button onClick={() => handleOnClickDelete(post._id)}>
                    DELETE
                </Button>
                <Button
                key={post._id}
                onClick={() => {onOpen();setJustClickedPost(post._id)}}
                  className="inline-flex absolute bottom-8 right-4 py-1 text-sm font-light text-indigo-600 transition-colors bg-white border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:opacity-75"
                >

                  
                  <span className="text-sm font-bold mr-1 ml-2">EDIT</span>
                </Button>
              </div>
            </div>
            {show && justClickedPost === post._id ?(<PostsUpdateModal post={post} onClose={onClose} show={show} />) : null }
          </div>
          
        ))}
      </>
    );
  }
