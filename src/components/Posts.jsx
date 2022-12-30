import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import testpic from '../assets/testpic.jpg';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <div class="flex items-center justify-center h-full w-full">
    <div class="h-full w-full lg:w-1/2 sm:w-[80%]">
    
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
              maxHeight="140px"
              image={post.picture_url  || testpic}
              alt="bmw"
            >
            </CardMedia>
        </Card>

    );
    })}

    </div>
  </div>
    
  );
};

export default Posts;