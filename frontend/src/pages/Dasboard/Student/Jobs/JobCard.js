import React from "react";
import "./index.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const JobCard = ({ item }) => {
  const [applied, setApplied] = React.useState(false);

  return (
    <div className="card-container">
      <div className="card-header-container">
        <div className="card-title-container">
          <div className="card-title">
            <h4>{item.jobRole}</h4>
          </div>
          <div className="card-title-side-item">{`${item.ctc} LPA`}</div>
        </div>
        <div className="card-eligibility-container">
          <div>{`Branch: ${item.eligibility.branch}`}</div>
          <div>{`CGPA: ${item.eligibility.cgpa}`}</div>
        </div>
      </div>
      <div className="card-content-container">
        <div className="card-content-description">
          <p>{item.jobDescription}</p>
        </div>
      </div>
      <div
        className={`${
          applied ? "card-button-applied" : "card-button-not-applied"
        } card-button`}
      >
        {applied ? (
          <button>Applied</button>
        ) : (
          <button>
            Apply <ArrowForwardIosIcon sx={{fontSize: '10px', marginLeft: '10px'}}/>
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
