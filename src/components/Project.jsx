import React from "react";
import github from "../images/github.svg";
import download from "../images/download.svg";
function Project({
  title,
  image,
  description,
  technologies,
  previewLink,
  githubLink,
}) {
  return (
    <article className="card p-2 m-1  rounded-xl mt-10 shadow-xl">
      <img className="card-img-top" src={image} alt="" loading="lazy" />
      <div className="card-body">
        <h4 className="card-title font-semibold text-lg "  >{title}</h4>
        <p className="card-text pt-4 fs-8 font-light" style={{ height: "10vh" }}>{description}</p>
        <h5 className="card-subtitle text-muted ">
        <span className="text-primary"> Tech Stack:</span><br /> <span className="fs-5">{technologies}</span>
        </h5>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <div className="d-flex align-items-center">
            <a href={githubLink} className="ms-3">
              <img src={download} height="30" alt="Lo" loading="lazy" />
            </a>
          </div>
          <div className="d-flex align-items-center">
            <a href={githubLink} className="me-3">
              <img src={github} height="30" alt="Lo" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
