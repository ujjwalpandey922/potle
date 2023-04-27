import { useState } from "react";
import "./App.css";
import MyEditor from "./components/MyEditor";
import { useEffect } from "react";

function App() {
  const [content, setContent] = useState("");
  const handleSave = () => {
    localStorage.setItem("All-Content", content);
    alert("Content Saved");
  };
  useEffect(() => {
    if (localStorage.getItem("All-Content")) {
      setContent(localStorage.getItem("All-Content"));
    }
  }, []);
  return (
    <div className="App">
      <h1>MY EDITOR.......</h1>
      <button onClick={handleSave}>SAVE</button>
      <div className="editor">
        <MyEditor content={content} setContent={setContent} />
      </div>
    </div>
  );
}

export default App;
