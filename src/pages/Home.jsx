import React from "react";
import { personalDetails } from "../Details";
// import "../Home.css"; // Import CSS file for animations

function Home() {
  const { name, tagline, img } = personalDetails;
  return (
    <main className="container-md mx-auto section-md">
      <div
        className="row align-items-center ps-1 pe-1 justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="col-auto mt-5 ms-lg-0 ms-5 col-md-6 home-text-animation">
          <h2 className="text-2xl text-dark-heading dark-text-heading md-text-4xl xl-text-5xl xl-leading-tight font-weight-bold ">
            Hi,👋<br></br>
          </h2>
          <h2>I'm {name}</h2>
          <h2 className="text-2xl text-dark-heading dark-text-heading md-text-4xl xl-text-5xl xl-leading-tight font-weight-bold">
            {tagline}
          </h2>
        </div>
        <div className="col-auto col-md-6 text-center home-image-animation">
          <img
            className="w-lg-100 w-50 mt-5 rounded-circle"
            src={img}
            alt="Pavan MG"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
