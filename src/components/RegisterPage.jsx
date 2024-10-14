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

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
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
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };


    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error1"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
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
                {errorMessage()}
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
                <button onClick={navigate("/tasks")} className="btn1" type="submit">
                    Task Management
                </button>
                <button onClick={navigate("/upload")} className="btn1" type="submit">
                    Upload Image
                </button>
            </form>
        </div>
    );
}
