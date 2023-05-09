import React, { useRef } from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button
} from "@mui/material";
import "./Register.css";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const role = roleRef.current.value;
    console.log(email, password, role); // You can replace this with your own logic to send the data to the backend API
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Register on the site</h2>
      </div>
      <div className="form-content">
        <form>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              inputRef={emailRef}
            />
          </div>
          <div className="form-field">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              inputRef={passwordRef}
            />
          </div>
          <div className="form-field">
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-standard-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                inputRef={roleRef}
                label="Role"
                defaultValue="student"
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="company">Company</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-button">
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
