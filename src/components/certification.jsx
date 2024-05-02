import React from "react";

function Certification({
  companyLogo,
  certifTitle,
  dateReceived,
  description,
  certifLink,
}) {
  return (
    <div
      className="card border-0"
      style={{
        maxWidth: "100%",
        margin: "auto",
        backgroundColor: "transparent",
      }}
    >
      <div className="row g-0">
            <hr></hr>
        <div className="col-8">
          <div className="card-body">
            <h5 className="text-body-secondary">{dateReceived}</h5>
            <h5 className="card-title">{certifTitle}</h5>
            <p className="card-text">{description}</p>
            <a
              href={certifLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certification
            </a>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <img
            src={companyLogo}
            className="img-fluid p-2 "
            style={{ maxWidth: "150px", background: "none" }}
            alt="Company Logo"
          />
        </div>
      </div>
    </div>
  );
}
export default Certification;
