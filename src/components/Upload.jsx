//Upload Image
import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} alt="" />
    </div>
  );
}

export default Upload;
