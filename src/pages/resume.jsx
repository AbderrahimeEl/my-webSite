import React from "react";
import pdf from "../images/cV.pdf";
import cvImg from "../images/cv.jpg";
function Resume() {
  return (
    <>
      <>
        <h3 className="text-center text-muted p-2 pb-1">My Resume</h3>
        <div className="d-flex flex-column align-items-center p-md-5">
          <a href={pdf}  className="pb-4" download="AbderrahimeElmoutaouakil_Resume">
            <button className="btn btn-primary">Download</button>
          </a>
          <img
            src={cvImg}
            className="img-fluid mb-4"
            alt="My Resume"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          />
        </div>
      </>
    </>
  );
}
export default Resume;
