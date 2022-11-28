import React, { useState } from 'react';
import PostsContainer from '../components/PostsContainer';
import CreatePost from '../components/CreatePost';
import Pagination from '../components/Pagination';



const Admin = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  if (!posts) return "There are no posts";

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="bg-[#505050] min-h-screen flex flex-col items-center ">
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