import { useEffect, useState } from "react";
import "./App.css";
import DraftEditor from "./components/DraftEditor";
import Header from "./components/Header";
import { EditorState, convertFromRaw } from "draft-js";

function App() {
   useEffect(() => {
     const storedContent = localStorage.getItem("editorContent");
     if (storedContent) {
       const rawContentState = JSON.parse(storedContent);
       const editorState = EditorState.createWithContent(
         convertFromRaw(rawContentState)
       );
       setContent(editorState);
     }
   }, []);
  const [content, setContent] = useState(EditorState.createEmpty());
 
  return (
    <div className="App">
      <Header content={content} setContent={setContent} />
      <div className="editor">
        <DraftEditor content={content} setContent={setContent} />
      </div>
    </div>
  );
}

export default App;
