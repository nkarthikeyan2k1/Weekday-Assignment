import React from "react";

const Jobs = ({ item }) => {
  //   if (Math.floor(Math.random() * 10) + 1 > 5) {
  //     throw new Error("error founded");
  //   }
  return (
    <div className="card h-100 job-card">
      <div className="card-body">
        <div className="posted-time mb-1">
          <p>⏳ Posted 10 days ago</p>
        </div>
        <div className="d-flex alihn-items-center ps-1">
          <img height="50" width="50" src={item.logoUrl} alt="logo" />
          <div
            className="job-info text-capitalize"
            style={{ marginLeft: "10px" }}
          >
            <h2>{item.companyName}</h2>
            <h3>{item.jobRole}</h3>
            <p>{item.location}</p>
          </div>
        </div>
        <p>
          Estimated Salary:{" "}
          {`₹${item.minJdSalary || 0} - ${item.maxJdSalary} LPA`}
          <span aria-label="Offered salary range"> ✅</span>
        </p>
        <div className="about-company mb-3">
          <h6>About Company</h6>
          <div className="opacityEffect">
            <p>
              <strong>About us</strong>
            </p>
            <p className="notes">
              <span>{item.jobDetailsFromCompany.slice(0, 200)}</span>
            </p>
            <div className="App">
              <a>Show More</a>
            </div>
          </div>
        </div>
        <div className="job-info">
          <h3>Minimum Experience</h3>
          <h2>{item.minExp || 0} years</h2>
        </div>
      </div>
      <button className="btn Easy-apply">⚡ Easy Apply</button>
      <button className="btn Referral">Unlock referral asks</button>
    </div>
  );
};

export default Jobs;
