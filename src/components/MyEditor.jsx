import ReactHtmlParser from "html-react-parser";
import "./myeditor.css";

// eslint-disable-next-line react/prop-types
const MyEditor = ({ content, setContent }) => {
  const handleContentChange = (event) => {
    const value = event.target.value;
    let formattedValue = formatContent(value);
    // console.log(ReactHtmlParser(formattedValue));
    setContent(formattedValue);
  };

  const formatContent = (text) => {
    let lines = text.split(" ") || text.split("\n");
    let temp = [];
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      // Check for heading format
      if (line.startsWith("#") && lines[i + 1] !== undefined) {
        temp[i] = `<h1>${line.slice(1)}</h1>`;
      }
      // Check for underline format
      else if (line.startsWith("***") && lines[i + 1] !== undefined) {
        temp[i] = `<u>${line.slice(3)}</u>`;
      } // Check for red line format
      else if (line.startsWith("**") && lines[i + 1] !== undefined) {
        temp[i] = `<span className="span-red">${line.slice(2)}</span>`;
      }
      // Check for bold format
      else if (line.startsWith("*") && lines[i + 1] !== undefined) {
        temp[i] = `<b>${line.slice(1)}</b>`;
      } else {
        temp[i] = line;
      }
    }

    return temp.join(" ");
  };
  return (
    <div className="Editor-Content">
      <textarea
        value={content}
        onChange={handleContentChange}
        rows="20"
        cols="50"
        placeholder="ENTER SOMETHING.....!!!!!!!!!"
      />
      <p>{ReactHtmlParser(content)}</p>
    </div>
  );
};
export default MyEditor;
