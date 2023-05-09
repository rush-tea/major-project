import React, { useRef } from "react";
import { TextField, Button } from "@mui/material";
import "./CreateCompany.css";

const CreateCompany = () => {
  const companyNameRef = useRef(null);
  const companyDescriptionRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const companyName = companyNameRef.current.value;
    const companyDescription = companyDescriptionRef.current.value;
    console.log(companyName, companyDescription); // You can replace this with your own logic to send the data to the backend API
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Create Company</h2>
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <TextField
              id="companyName"
              label="Company Name"
              variant="outlined"
              inputRef={companyNameRef}
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="companyDescription"
              label="Company Description"
              variant="outlined"
              inputRef={companyDescriptionRef}
              multiline
              rows={4}
              required
            />
          </div>
          <div className="form-button">
            <Button variant="contained" type="submit">
              Create Company
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
