/* eslint-disable react/prop-types */

import { convertToRaw } from "draft-js";
import "./Header.css";
const Header = ({content}) => {
  const handleSave = () => {
    const contentState = content.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    localStorage.setItem("editorContent", JSON.stringify(rawContentState));
    alert("Content Saved");
  };
 
  return (
    <div className="header">
      <h1>Demo Editor By Ujjwal Pandey.......</h1>
      <button onClick={handleSave}>SAVE</button>
    </div>
  );
};

export default Header;
