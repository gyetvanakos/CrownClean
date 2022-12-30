import React from "react";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
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
        data?.data.slice(0)
        .reverse()
        .map((post, index) => (
          <div key={post._id}>
            <div class="flex items-center justify-center box-content">
              <div class="xl:w-[900px] sm:w-[80%]">
              <Card className="mt-10" sx={{ width: 1 }}>
                  <CardContent className="bg-[#656565]">
                    <Typography gutterBottom variant="h5" component="div">
                      <h1 className='text-white'>{post.title}</h1>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className='text-white'>{post.content}</span>
                    </Typography>
                    <Typography className="pt-4" color="text.secondary">
                      <span className='text-white'>{post.date}</span>
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.picture_url  || testpic}
                    alt="bmw"
                  />
              </Card>
                <div className="w-full h-20 flex justify-evenly items-center bg-[#656565] mb-10">
                  <Button 
                  className="w-1/2 h-full"
                  variant="contained" 
                  onClick={() => handleOnClickDelete(post._id)}>
                      DELETE
                  </Button>
                  <Button
                  className="w-1/2 h-full"
                  variant="contained" 
                  key={post._id}
                  onClick={() => {onOpen();setJustClickedPost(post._id)}}>
                    EDIT
                  </Button>
                </div> 
              </div>
            </div>
            {show && justClickedPost === post._id ?(
            <PostsUpdateModal 
            post={post} 
            onClose={onClose} 
            show={show}
            scroll="paper"
            positions="fixed"
             
            />) : null }
          </div>
        ))}
      </>
    );
  }
