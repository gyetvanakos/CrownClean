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
    <div>
    {posts.map((post) => {
       return (
    <div className="h-full w-3/6 block pt-20">
        <Card className="" sx={{ width: 1 }}>
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
              image={testpic}
              alt="bmw"
            />
          <Button onClick={() => handleOnClickDelete(post._id)}>
            DELETE
          </Button>
        </Card>
    </div>
    );
    })}
  </div>
    
  );
};

export default Posts;