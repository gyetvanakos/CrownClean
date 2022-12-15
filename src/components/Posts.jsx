import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import testpic from '../assets/testpic.jpg';
import Button from '@mui/material/Button';
import { request } from "../utils/axios-util";
import swal from "sweetalert";

function handleOnClickDelete(postId) {
  request({ url: `/posts/${postId}`, method: "DELETE" }).then(() => {
    swal("Success!", "Post was deleted.", "success", {
      buttons: false,
      timer: 2000,
    }).then(() => {
      window.location.href = "/blog";
    });
  });
}

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <div class="flex items-center justify-center h-full w-full">
    <div class="h-full w-[80%] sm:w-1/2">
    
    {posts.slice(0)
          .reverse()
          .map((post, index) => {
       return (
        <Card className="w-full mt-20 " sx={{ width: 1 }}>
            <CardContent className="bg-[#242526]">
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

    );
    })}

    </div>
  </div>
    
  );
};

export default Posts;