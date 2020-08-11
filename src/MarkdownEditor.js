import React, { useState } from "react";
import { Remarkable } from "remarkable";

function MarkdownEditor() {
  const md = new Remarkable();
  const [value, setValue] = useState("### h3 title");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getRawMarkup = () => {
    return { __html: md.render(value) };
  };
  return (
    <div className="MarkdownEditor">
      <h3>Input</h3>
      <label htmlFor="markdown-content">Enter some markdown</label>
      <textarea
        id="markdown-content"
        onChange={handleChange}
        defaultValue={value}
      />
      <h3>Output</h3>
      <div className="content" dangerouslySetInnerHTML={getRawMarkup()} />
    </div>
  );
}

export default MarkdownEditor;
