import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistration from "./components/RegisterPage";
import TaskManagement from "./components/Tasks";
import UploadImage from "./components/Upload";

function App() {
  return (
    <>
      <h1
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          backgroundColor: "#7731d8",
          borderRadius: "10px",
          display: "inline",
          padding: "8px",
          color: "white",
        }}
      >
        TaskRabbit
      </h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserRegistration />} />
          <Route exact path="/tasks" element={<TaskManagement />} />
          <Route exact path="/upload" element={<UploadImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
