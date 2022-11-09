import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import testpic from '../assets/testpic.jpg';

function Blog() {
    return (
      <div className="bg-[#505050] min-h-screen flex justify-center">
      <div className="h-full w-3/6">
          <Card className="mt-20" sx={{ width: 1 }}>
              <CardContent className="bg-[#656565]">
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className='text-white'>Title</h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo felis, porttitor ut justo vel, facilisis luctus nulla. Morbi pellentesque erat id orci dignissim mattis. Mauris commodo posuere purus, eu ultricies nisi varius vitae. Phasellus aliquet tristique turpis vitae auctor. Ut vestibulum, eros eu semper feugiat, elit tellus rutrum purus, sed ullamcorper quam lectus porttitor neque. Mauris augue ipsum, sodales eu nisi molestie, scelerisque porta magna. Cras vel turpis iaculis magna pretium dignissim.</p>
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={testpic}
                alt="bmw"
              />
          </Card>
      </div>
    </div>
    );
  }
  
  export default Blog;