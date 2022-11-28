import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import { request } from "../utils/axios-util";
import Select from "react-select";
import { useQuery } from "react-query";

Modal.setAppElement("#root");

const PostsUpdateModal = ({ show, onClose, post, updated }) => {
  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");
  const navigate = useNavigate();

  //handling project and loading values if project is not null
  useEffect(() => {
    // do some checking here to ensure data exist
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
    } else {
      createPost(data);
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

  const createPost = async (data) => {
    await request({ url: `/posts/`, method: "POST", data: data }).then(
      (res) => {
        const post = res.data;
        navigate(`/posts/${post._id}`);
      }
    );
  };

  const resetFields = () => {
    //reseting fields
    //back to project values if project is not null, otherwise to empty string
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
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse">
          <div className="max-w-lg mx-auto text-center">
            {!post && (
              <h1 className="text-2xl font-bold sm:text-3xl reverse">
                {" "}
                Create New Post{" "}
              </h1>
            )}
            {post && (
              <h1 className="text-2xl font-bold sm:text-3xl reverse">
                {" "}
                Update Post{" "}
              </h1>
            )}
          </div>
          <div className={"close-btn-ctn"}>
            <button
              onClick={(event) => [onClose(), resetFields()]}
              className={"close-btn"}
            >
              X
            </button>
          </div>
        </div>
        <form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <input
            className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
            type="text"
            placeholder="Project Name"
            value={postTitle}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>
            <input
              className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
              type="text"
              placeholder="Project Description"
              value={postContent}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {!post && (
            <button
              onClick={handleOnSubmitForm}
              type="submit"
              className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              Create Project
            </button>
          )}

          {post && (
            <button
              onClick={handleOnSubmitForm}
              type="submit"
              className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              Update Project
            </button>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default PostsUpdateModal;
