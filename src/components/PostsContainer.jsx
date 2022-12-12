import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import Button from '@mui/material/Button';
import PostsUpdateModal from '../components/PostsUpdateModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import testpic from '../assets/testpic.jpg';




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
            <div class="flex items-center justify-center h-full w-full">
              <div class="h-full w-[80%] sm:w-1/2">
              <Card className="w-1/2 mt-20 " sx={{ width: 1 }}>
                  <CardContent className="bg-[#656565]">
                    <Typography gutterBottom variant="h5" component="div">
                      <h1 className='text-white'>{post.title}</h1>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className='text-white'>{post.content}</span>
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.picture_url  || testpic}
                    alt="bmw"
                  />
              </Card>
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
