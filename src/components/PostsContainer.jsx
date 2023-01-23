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
              <p>asdasd</p>
<img src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/324435506_512427777622293_3726503721868834797_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BcICFZuSJn4AX88bryY&_nc_ht=scontent-cph2-1.xx&oh=00_AfDmy2tHHw9Ou9THcTiJDgsK3YWhRRiD_g0yW0Q-S-411g&oe=63D4A050" alt="undefined"  style={{height: 'auto', width: 'auto' }}/>
<p></p>
<img src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/325384187_471615008519258_6110225816331374614_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=h2jHbqNn1xcAX83ueoD&tn=FOKBdwe8TKUfhJLF&_nc_ht=scontent-cph2-1.xx&oh=00_AfCOilQNBMAsZ5sDvXZqE2G64RSvKJpDJKxY7xqu1UVYAQ&oe=63D3ADE1" alt="undefined" style={{height: 'auto', width: 'auto' }}/>
<p></p>
              <Card className="mt-10" sx={{ width: 1 }}>
                  <CardContent className="bg-[#656565]">
                    
                    <Typography variant="body2" color="text.secondary">
                      <span className='text-white'><pre>{post.content}</pre></span>
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
