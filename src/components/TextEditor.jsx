import React, { useState, useEffect } from 'react';
import { EditorState,  convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { request } from "../utils/axios-util";
import Button from '@mui/material/Button';
import draftToHtml from "draftjs-to-html";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function TextEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState('');

  useEffect(() => {
    let html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setConvertedContent(html);
  }, [editorState]);

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if ( convertedContent === "") {
      return alert("Please fill out the field in a correct way!");
    }
    const data = {
      content: convertedContent,
    };
    request({ url: `/api/posts/`, method: "POST", data: data }).then((res) => {
      window.location.href = "/admin";
      console.log(res);
    });
    console.log(data)
  };

  return (
    <div>
      <div className="block mb-3 mt-3 p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#18191a] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </div>
        <Button 
          className="pt-8" 
          variant="contained" 
          type="submit" 
          size="large"
          onClick={handleOnSubmitForm}>
            Create post
        </Button>
    </div>
  )
}

export default TextEditor;