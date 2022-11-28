import React, { useState } from "react";
import Modal from "react-modal";
import { request } from "../utils/axios-util";

Modal.setAppElement("#root");

const Window = ({ show, onClose, item, }) => {
  const [titlelNew, setTitle] = useState([]);
  const [contentNew, setContent] = useState([]);

  const handleOnSubmitTitle = async (e) => {
    e.preventDefault();
    if (titlelNew != null) {
      item.title = titlelNew;
    }
    request({ url: `posts/${item._id}`, method: "PUT", data: item }).then(
      () => {
        alert("task updated succesfully");
        setTitle("");
      }
    );
  };

  const handleOnSubmitDescription = async (e) => {
    e.preventDefault();
    if (contentNew != null) {
      item.content = contentNew;
    }
    request({ url: `posts/${item._id}`, method: "PUT", data: item }).then(
      () => {
        alert("task updated succesfully");
        setContent("");
      }
    );
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className="max-w-screen-xl px-4sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl reverse">
              Edit Task
            </h1>
          </div>
          <div className="text-right">
            <button onClick={onClose} className={"close-btn"}>
              X
            </button>
          </div>
        </div>
      </div>

      <form className="max-w-md mx-auto mt-8 space-y-2">
        <h1 style={{ flex: "1 90%", fontWeight: "bold" }}>{item.title}</h1>
        <input
          className="p-3 w-full text-sm border border-indigo-600 rounded-lg relative"
          type="title"
          placeholder="Task Title"
          value={titlelNew}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleOnSubmitTitle}
          type="submit"
          className="block w-full  p-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        >
          Edit Task Title
        </button>

        <div>
          <p>{item.taskDescription}</p>
          <input
            className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
            type="description"
            placeholder="Task Description"
            value={contentNew}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={handleOnSubmitDescription}
            type="submit"
            className="block w-full  p-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          >
            Edit Task Description
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Window;
