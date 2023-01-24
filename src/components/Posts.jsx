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

export default function PostsContainer() {
    const { isLoading, data } = useQuery("projectNames", fetchPosts);
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
                    
                    <Typography variant="body2" color="text.secondary">
                      <span className='text-white'>
                        <div dangerouslySetInnerHTML={{__html: post.content}} />
                      </span>
                    </Typography>
                  </CardContent>
              </Card>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
