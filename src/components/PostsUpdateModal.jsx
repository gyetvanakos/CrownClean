import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { request } from "../utils/axios-util";
import Button from '@mui/material/Button';

Modal.setAppElement("#root");

const PostsUpdateModal = ({ show, onClose, post, updated }) => {
  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");

  useEffect(() => {
    if (post.title && post.content) {
        setTitle(post.title);
        setContent(post.content);
    }
  }, [post]);


  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if (postTitle === "" || postContent === "") {
      return alert("Please fill out the fields in a correct way!");
    }
    const data = {
      title: postTitle,
      content: postContent,
    };
    if (post) {
      updatePost(data);
      window.location.href = "/admin";
    } else {
      window.location.href = "/admin";
    }
  };

  const updatePost = async (data) => {
    await request({
      url: `api/posts/${post._id}`,
      method: "PUT",
      data: data,
    }).then(() => {
      onClose();
      updated();
    });
  };

  const resetFields = () => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      setTitle("");
      setContent("");
    }
  };

  return (
    <Modal
      className="bg-black"
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
    >
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse">
          <div className="w-full">
            <Button 
              className=""
              onClick={(event) => [onClose(), resetFields()]}
              className={"close-btn"}
              variant="contained" >
              X
            </Button>
          </div>
        </div>
        <form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div className="pt-8">
          <input 
          type="text" 
          name="post_title" 
          id="title" 
          class="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
          placeholder="Title" 
          required
          value={postTitle}
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div class="sm:col-span-2 pt-8">
          <textarea 
          name="message" 
          id="message" 
          rows="6" 
          class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
          placeholder="Leave a comment..."
          value={postContent}
          onChange={(e) => setContent(e.target.value)}>
          </textarea>
        </div>

          {post && (
            <Button 
              className="" 
              variant="contained" 
              type="submit" 
              size="large"
              onClick={handleOnSubmitForm}>
              Update
            </Button>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default PostsUpdateModal;
