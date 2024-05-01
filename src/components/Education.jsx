import React from "react";

function Education({ SchoolImg, SchoolName, Date, description }) {
  return (
    <div className="card" style={{ maxWidth: "100ref", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-8">
          <div className="card-body">
              <h5 className="text-body-secondary">{Date}</h5>
            <h5 className="card-title">{SchoolName}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
            </p>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <img
            src={SchoolImg}
            className="img-fluid w-50 p-2  rounded-circle" style={{ maxWidth: '100px' }}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
export default Education;
