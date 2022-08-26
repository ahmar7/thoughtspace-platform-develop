import React, { useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.css";

function Commentbox({EditorRef}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  
  return (
    <div>
      <div className="text-box-editor-wrapper">
        <div className="text-box-editor-con">
          <Editor
            editorRef={(ref) => (EditorRef.current = ref)}
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ["inline", "list", "link"],
            }}
          />
        </div>
      </div>
      <div className="commentbtncon">
        <button>comment</button>
      </div>
    </div>
  );
}
export default Commentbox;
