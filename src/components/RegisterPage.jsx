//User Registration
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export default function Form() {
  const navigate = useNavigate();

  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (name === "" || email === "" || password === "") {
      setError(true);
      setErrorMessage("Please fill out all fields");
      return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
      setError(true);
      setErrorMessage("Invalid email format");
      return;
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setError(true);
      setErrorMessage(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 spl character, and be at least 8 length"
      );
      return;
    }

    // If validation passes, proceed
    setSubmitted(true);
    setError(false);
  };

  // Navigation handlers for buttons
  const handleNavigateToTasks = () => {
    navigate("/tasks");
  };

  const handleNavigateToUpload = () => {
    navigate("/upload");
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success1"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h3>User {name} successfully registered!!</h3>
      </div>
    );
  };

  // Showing error message
  const errorDisplayMessage = () => {
    return (
      <div
        className="error1"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h3>{errorMessage}</h3>
      </div>
    );
  };

  return (
    <div className="form1">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages1">
        {errorDisplayMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label1">Name</label>
        <input
          onChange={handleName}
          className="input1"
          value={name}
          type="text"
        />

        <label className="label1">Email</label>
        <input
          onChange={handleEmail}
          className="input1"
          value={email}
          type="email"
        />

        <label className="label1">Password</label>
        <input
          onChange={handlePassword}
          className="input1"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn1" type="submit">
          Submit
        </button>
        <button onClick={handleNavigateToTasks} className="btn1" type="button">
          Task Management
        </button>
        <button onClick={handleNavigateToUpload} className="btn1" type="button">
          Upload Image
        </button>
      </form>
    </div>
  );
}
