import React, { useRef } from "react";
import "./Login.css";
import { TextField } from "@mui/material";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password); // You can replace this with your own logic to send the data to the backend API
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Login to Enter Dashboard</h2>
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              ref={emailRef}
            />
          </div>
          <div className="form-field">
            <TextField
              label="Password"
              variant="outlined"
              ref={passwordRef}
              type="password"
            />
          </div>
          <div className="form-button">
            <button type="submit">
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
