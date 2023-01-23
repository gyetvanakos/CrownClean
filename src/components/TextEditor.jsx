import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { request } from "../utils/axios-util";
import Button from '@mui/material/Button';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    content: ''
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      content:draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
    console.log('fasz', this.state.content)
  };

  handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if (this.state.content === "") {
      return alert("Please fill out nthe fields in a correct way!");
    }
    const data = {
      content: this.state.content,
    };
    request({ url: `/api/posts/`, method: "POST", data: data }).then((res) => {
      window.location.href = "/admin";
      console.log(res);
    });
    console.log(data)
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
        <Button 
          className="" 
          variant="contained" 
          type="submit" 
          size="large"
          onClick={this.handleOnSubmitForm}>
        Create post
      </Button>
      </div>
    );
  }
}