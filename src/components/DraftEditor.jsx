/* eslint-disable react/prop-types */
import {  useCallback } from "react";
import { Editor,  RichUtils } from "draft-js";
import "./Draft.css";

const MyEditor = ({ content:editorState, setContent :setEditorState}) => {

  const styleMap = {
    UNDERLINE: {
      textDecoration: "underline",
    },
    RED: {
      color: "red",
    },
    HEADER: {
      fontSize: "2rem",
    },
  };
  const handleBeforeInput = useCallback(
    (e) => {
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
      const currentBlock = contentState.getBlockForKey(selection.getStartKey());
      const currentText = currentBlock.getText();
      const endText = currentText.slice(-4);

      if (e === " " && endText.endsWith("***")) {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
        return "handled";
      } else if (e === " " && endText.endsWith("**")) {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "RED"));
        return "handled";
      } else if (e === " " && endText.at(-1) == "*") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
        return "handled";
      } else if (e === " " && endText.at(-1) == "#") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADER"));
        return "handled";
      } else {
        return "not-handled";
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editorState]
  );

  return (
    <Editor
      editorState={editorState}
      customStyleMap={styleMap}
      handleBeforeInput={handleBeforeInput}
      onChange={setEditorState}
      placeholder="ENTER A TEXT"
    />
  );
};

export default MyEditor;
