import React, { useState } from 'react';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import axios from "axios";
import cclogo from '../assets/logo.svg';

const baseURL = "http://localhost:4000/api/posts";

function Blog() {

  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

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
    <div className="bg-[#505050] min-h-screen w-full">
      <div className=" box-content flex flex-col justify-center items-center bg-[#505050] w-full">
      <section className="w-[80%] h-1/3 md:w-[50%] ">
      <div className="pt-8">
            <img src={cclogo} className="h-10 w-full" alt="logo" />
            <h1 className='text-white'>
              BLOG
            </h1>
            <p className='font-light text-center text-gray-500 dark:text-white sm:text-xl w-full'>
            The Car Cleaning Company are a leading mobile vehicle enhancement specialist. established in 2012, and operating around the Ribble Valley, we have been dedicated to bringing our customers the very best in vehicle enhancement, protection and maintenance from the very start. 
            </p>
        </div>
      </section>
    </div>
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
