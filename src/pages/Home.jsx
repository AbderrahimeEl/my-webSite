import React from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  
  return (
    <main className="container-md mx-auto section-md">
      <div className="row align-items-center justify-content-center " style={{height: '70vh'}}>
        <div className="col-auto mt-5 ms-lg-0 col-md-6">
          <h1 className="text-2xl text-dark-heading dark-text-heading md-text-4xl xl-text-5xl xl-leading-tight font-weight-bold text-muted">
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1>
            {name}
          </h1>
          <h2 className="text-2xl text-dark-heading dark-text-heading md-text-4xl xl-text-5xl xl-leading-tight font-weight-bold">
            {tagline}
          </h2>
        </div>
        <div className="col-auto col-md-6 text-center">
          <img className="w-lg-100 w-50 mt-5 rounded-circle" src={img} alt="Pavan MG" />
        </div>
      </div>
    </main>
  );
}
export default Home;
