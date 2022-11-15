import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import testpic from '../assets/testpic.jpg';
import axios from "axios";

const baseURL = "http://localhost:4000/api/posts";

export default function Blog() {

  const [posts, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return "null";

  return (
    <div className="bg-[#505050] min-h-screen flex justify-center">
    {posts.map((post) => {
       return (
    <div className="h-full w-3/6 block">
        <Card className="mt-20" sx={{ width: 1 }}>
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
        </Card>
    </div>
    );
    })}
  </div>
  );
}
