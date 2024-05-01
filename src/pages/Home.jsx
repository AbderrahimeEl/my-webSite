import React from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  
  return (
    <main className="container-md mx-auto section-md">
      <div className="row mt-5 align-items-center">
        <div className="ms-5 mt-5 ms-lg-0 col-md-6 mt-5">
          <h1 className="text-2xl text-dark-heading dark-text-heading md-text-4xl xl-text-5xl xl-leading-tight font-weight-bold">
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1>
            {name}
          </h1>
          <h2 className="text-2xl text-dark-heading dark-text-heading md-text-4xl xl-text-5xl xl-leading-tight font-weight-bold">
            {tagline}
          </h2>
        </div>
        <div className="col-md-6 mt-5 mt-md-0 text-center">
          <img className="w-100 mt-5 w-md-75" src={img} alt="Pavan MG" />
        </div>
      </div>
    </main>
  );
}
export default Home;
