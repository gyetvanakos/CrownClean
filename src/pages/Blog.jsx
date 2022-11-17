import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import axios from "axios";

const baseURL = "http://localhost:4000/api/posts";

function Blog() {

  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return "There are no posts";

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#505050] min-h-screen flex flex-col items-center ">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
export default Blog;
