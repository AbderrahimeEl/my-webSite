import React from "react";
// import pdf from "../images/cV.pdf";
import cvImg from "../images/cv.jpg";
function Resume() {
  return (
    <>
      <>
        <h3 className="text-center text-muted p-3">My Resume</h3>
        <div className="d-flex flex-column align-items-center p-5">
          <a href="https://drive.usercontent.google.com/u/3/uc?id=1cv4ZUwkxWnIuY6Xg3p8F5hlSqmlFZiEf&export=download" className="pb-4" download>
            <button className="btn btn-primary">Download CV</button>
          </a>
          <img
            src={cvImg}
            className="img-fluid mb-4"
            alt="My Resume"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </>
    </>
  );
}
export default Resume;
