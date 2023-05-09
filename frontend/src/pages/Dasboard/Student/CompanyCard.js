import React from "react";
import "./index.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const CompanyCard = ({ item }) => {
  const [applied, setApplied] = React.useState(false);

  return (
    <div className="card-container">
      <div className="card-header-container">
        <div className="card-title-container">
        <div className="card-image-container">
            <img src={item.imageLink}/>
        </div>
        <div className="card-title">
          <h4>{item.companyName}</h4>
        </div>
        </div>
        <div className="card-title-side-item">{`${item.jobs.length} Jobs`}</div>
      </div>
      <div className="card-content-container">
        <div className="card-content-description">
          <p>{item.companyDescription}</p>
        </div>
      </div>
      <div className="card-button-container">
        <button>
            <Link to='/student/jobs' state={item}>
                View Jobs
            </Link>
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
