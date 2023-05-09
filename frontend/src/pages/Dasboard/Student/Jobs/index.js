import React from "react";
import { useLocation } from "react-router-dom";
import { Tab, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import JobCard from "./JobCard";
import Header from "../../../../components/header/header";
import "./index.css";

const Jobs = () => {
  const location = useLocation();
  const companyData = location.state;
  console.log(companyData);
  const data = [
    {
      jobRole: "Job Role 1",
      jobDescription: "Job Description 1",
      ctc: "10",
      fixed: "10",
      location: "Remote",
      eligibility: {
        branch: "All",
        medicallyFit: "Yes",
        cgpa: "7.5",
      },
    },
    {
      jobRole: "Job Role 2",
      jobDescription: "Job Description 2",
      ctc: "10",
      fixed: "10",
      location: "Remote",
      eligibility: {
        branch: "All",
        medicallyFit: "Yes",
        cgpa: "7.5",
      },
    },
  ];
  return (
    <div className="dashboard-container">
      <Header />
      <section className="dashboard-section-container">
        <div className="dashboard-section-header">
          <div className="dasboard-section-image">
            <img src={companyData.imageLink} />
          </div>
          <div className="dasboard-section-content">
            <div className="dashboard-section-title">
              <h4>{companyData.companyName}</h4>
            </div>
            <div className="dashboard-section-description">
              <p>{companyData.companyDescription}</p>
            </div>
          </div>
        </div>
        <TabContext value="1">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="jobs">
              <Tab label="Jobs" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="section-card-item-container">
              {data.map((item, idx) => {
                console.log(item, idx);
                return <JobCard item={item} />;
              })}
            </div>
          </TabPanel>
        </TabContext>
      </section>
    </div>
  );
};

export default Jobs;
