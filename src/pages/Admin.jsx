import React, { useState } from 'react';
import { useNavigate } from "react-router";
import PostsContainer from '../components/PostsContainer';
import CreatePost from '../components/CreatePost';
import Pagination from '../components/Pagination';
import Button from '@mui/material/Button';
import { MdOutlineLogout } from "react-icons/md";



const Admin = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const navigate = useNavigate();

  

  if (!posts) return "There are no posts";

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber)



  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
    return (
        <div className="bg-[#505050] min-h-screen flex flex-col items-center ">
        <div class='fixed bottom-0 w-full'>
          <Button 
          className='my-8 float-right px-5 py-2 bg-red-500 text-white text-sm font-bold tracking-wide'
          variant="contained"
          onClick={logOut} 
          >
            <MdOutlineLogout className="w-8"/>Logout
          </Button>
        </div>
        <CreatePost/>
        <PostsContainer posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
        </div>
    );
  }


export default Admin;