import React, { useRef } from "react";
import { TextField, MenuItem } from "@mui/material";
import axios from "axios";

const StudentProfile = () => {
  const rollNoRef = useRef();
  const nameRef = useRef();
  const collegeEmailRef = useRef();
  const personalEmailRef = useRef();
  const phoneRef = useRef();
  const currentCgpaRef = useRef();
  const branchRef = useRef();
  const highSchoolNameRef = useRef();
  const highSchoolPassingYearRef = useRef();
  const highSchoolGradeRef = useRef();
  const pwdRef = useRef();
  const intermediateNameRef = useRef();
  const intermediatePassingYearRef = useRef();
  const intermediateGradeRef = useRef();
  const jeeMainsRankRef = useRef();
  const yearOfPassingRef = useRef();
  const currentBacklogsRef = useRef();
  const totalBacklogsRef = useRef();
  const resumeLinkRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      rollNo: rollNoRef.current.value,
      name: nameRef.current.value,
      collegeEmail: collegeEmailRef.current.value,
      personalEmail: personalEmailRef.current.value,
      phone: phoneRef.current.value,
      currentCgpa: currentCgpaRef.current.value,
      branch: branchRef.current.value,
      highSchoolName: highSchoolNameRef.current.value,
      highSchoolPassingYear: highSchoolPassingYearRef.current.value,
      highSchoolGrade: highSchoolGradeRef.current.value,
      pwd: pwdRef.current.value,
      intermediateName: intermediateNameRef.current.value,
      intermediatePassingYear: intermediatePassingYearRef.current.value,
      intermediateGrade: intermediateGradeRef.current.value,
      jeeMainsRank: jeeMainsRankRef.current.value,
      yearOfPassing: yearOfPassingRef.current.value,
      currentBacklogs: currentBacklogsRef.current.value,
      totalBacklogs: totalBacklogsRef.current.value,
      resumeLink: resumeLinkRef.current.value,
      dob: dobRef.current.value,
      gender: genderRef.current.value,
    };
    try {
      const response = await axios.post("/api/students", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Student Registration Form</h2>
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <TextField
              id="rollNo"
              label="Roll No"
              variant="outlined"
              inputRef={rollNoRef}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              inputRef={nameRef}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="collegeEmail"
              label="College Email"
              variant="outlined"
              inputRef={collegeEmailRef}
              className="form-input"
              type="email"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="personalEmail"
              label="Personal Email"
              variant="outlined"
              inputRef={personalEmailRef}
              className="form-input"
              type="email"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              inputRef={phoneRef}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="currentCgpa"
              label="Current CGPA"
              variant="outlined"
              inputRef={currentCgpaRef}
              className="form-input"
              type="number"
              step="0.01"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="branch"
              label="Branch"
              variant="outlined"
              inputRef={branchRef}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="highSchoolName"
              label="High School Name"
              variant="outlined"
              inputRef={highSchoolNameRef}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="highSchoolPassingYear"
              label="High School Passing Year"
              variant="outlined"
              inputRef={highSchoolPassingYearRef}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <TextField
              id="highSchoolGrade"
              label="High School Grade"
              variant="outlined"
              inputRef={highSchoolGradeRef}
              className="form-input"
              type="number"
              step="0.01"
              required
            />
          </div>
          <div class="form-field">
            <TextField
              id="pwd"
              label="PWD"
              variant="outlined"
              select
              name="pwd"
              inputRef={pwdRef}
              required
              className="form-input"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </TextField>
          </div>
          <div class="form-field">
            <TextField
              id="intermediateName"
              label="Intermediate Name"
              variant="outlined"
              type="text"
              name="intermediateName"
              inputRef={intermediateNameRef}
              required
              className="form-input"
            />
          </div>
          <div class="form-field">
            <TextField
              id="intermediatePassingYear"
              label="Intermediate Passing Year"
              variant="outlined"
              type="text"
              name="intermediatePassingYear"
              inputRef={intermediatePassingYearRef}
              required
              className="form-input"
            />
          </div>
          <div class="form-field">
            <TextField
              id="intermediateGrade"
              label="Intermediate Grade"
              variant="outlined"
              type="number"
              step="0.01"
              name="intermediateGrade"
              inputRef={intermediateGradeRef}
              required
              className="form-input"
            />
          </div>
          <div class="form-field">
            <TextField
              id="jeeMainsRank"
              label="JEE Mains Rank"
              variant="outlined"
              type="number"
              name="jeeMainsRank"
              inputRef={jeeMainsRankRef}
              required
              className="form-input"
            />
          </div>
          <div class="form-field">
            <TextField
              id="yearOfPassing"
              label="Year of Passing"
              variant="outlined"
              type="number"
              name="yearOfPassing"
              inputRef={yearOfPassingRef}
              required
              className="form-input"
            />
          </div>
          <div className="form-field">
            <TextField
              id="currentBacklogs"
              label="Current Backlogs"
              variant="outlined"
              inputRef={currentBacklogsRef}
              className="form-input"
              required
              type="number"
            />
          </div>
          <div className="form-field">
            <TextField
              id="totalBacklogs"
              label="Total Backlogs"
              variant="outlined"
              inputRef={totalBacklogsRef}
              className="form-input"
              required
              type="number"
            />
          </div>
          <div className="form-field">
            <TextField
              id="resumeLink"
              label="Resume Link"
              variant="outlined"
              inputRef={resumeLinkRef}
              className="form-input"
              required
              type="url"
            />
          </div>
          <div className="form-field">
            <TextField
              id="dob"
              variant="outlined"
              inputRef={dobRef}
              className="form-input"
              required
              type="date"
            />
          </div>
          <div className="form-field">
            <TextField
              id="gender"
              label="Gender"
              variant="outlined"
              inputRef={genderRef}
              className="form-input"
              required
              select
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;
