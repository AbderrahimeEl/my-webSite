import React from "react";
import { educationInfo } from "../Details";
import Education from "../components/Education";

function About() {
  return (
    <main className="container mx-auto pt-5">
      <h1 className="text-center text-dark-heading font-weight-bold mb-4">
        About Me
      </h1>
      <section>
        <h3 className="text-dark-heading font-weight-bold mb-4">Education</h3>
        <div className="row gap-4">
          {educationInfo.map(({ SchoolImg, SchoolName, Date, description }) => (
            <Education
              SchoolImg={SchoolImg}
              SchoolName={SchoolName}
              Date={Date}
              description={description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
