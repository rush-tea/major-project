import React from "react";
import Header from "../../../components/header/header";
import CompanyCard from "./CompanyCard";
import "./index.css";

const StudentDashboard = () => {
  const data = [
    {
      companyName: "Company1",
      companyDescription: "Description",
      jobs: [],
      imageLink: 'data:image/png;base64,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'
    },
    {
      companyName: "Company2",
      companyDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      jobs: [],
      imageLink: 'data:image/png;base64,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'
    },
  ];

  return (
    <div className="dashboard-container">
      <Header />
      <div className="card-item-container"> 
        {data.map((item, idx) => {
          console.log(item, idx);
          return <CompanyCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default StudentDashboard;
