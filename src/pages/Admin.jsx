import React, { useState } from 'react';
import axios from "axios"; 
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
const baseURL = "http://localhost:4000/api/posts";


const Admin = () => {
    const [posts, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:4000/api/posts/', { title, content });
            console.log(res.data);
        }catch(error) {
            console.log(error.response)
        }
    }
    
    return (
        <div className="bg-[#505050] min-h-screen flex flex-col items-center ">
        <form>
          <label> Title:
          <input
              className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
              type="text"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label> Content:
          <input
              className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
              type="text"
              placeholder="Post Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <button
            onClick={handleSubmit}
            type="submit"
            className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          >
            Create Post
          </button>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
           />
        </form>
        </div>
    );
  }


export default Admin;