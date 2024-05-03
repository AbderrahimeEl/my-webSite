import React from "react";
import { educationInfo, certificationsInfo, Personwithlap } from "../Details";
import Education from "../components/Education";
import Certification from "../components/certification";
import Skills from "../components/Skills";
function About() {
  return (
    <main className="container mx-auto pt-1">
      <section className="mt-5">
        <h2 className="text-muted text-center mb-5">About me</h2>
      </section>
      <div className="row">
        <div className="col-md-6">
          <div>
            <p className="fs-5 ms-1 text-muted">
              Hi Everyone, I am{" "}
              <span className="text-primary">
                Abderrahim Elmoutaouakil <br />{" "}
              </span>{" "}
              from Essaouira, Morocco. I'm a student studying Software and
              Distributed IT Systems Engineering at{" "}
              <span className="text-primary">ENSET Mohammedia . </span>{" "}
              Currently 20 years old, <br></br>I'm seeking internship
              opportunities to gain practical experience in the field. <br />
              I'm enthusiastic about collaborating on projects and eager to
              explore new opportunities in the ever-evolving world of
              technology.
            </p>
            <p className="fs-5 text-muted ms-1">
              In addition to my academic pursuits, I enjoy engaging in the
              following activities:
            </p>
            <ul className="fs-5 text-primary">
              <li>Photography 📸</li>
              <li>Football ⚽ </li>
              <li>Travelling </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-flex justify-content-center text-center">
          <img
            className="w-lg-100 w-50  rounded-circle"
            src={Personwithlap.personwithlap}
            alt=".."
          />
        </div>
      </div>
      <section className="mt-5">
        <h2 className="text-muted text-center mb-5 mt-5">Education</h2>
        <div className="row gap-4">
          {educationInfo.map(({ SchoolImg, SchoolName, Date, description }) => (
            <Education
              key={SchoolName}
              SchoolImg={SchoolImg}
              SchoolName={SchoolName}
              Date={Date}
              description={description}
            />
          ))}
        </div>
      </section>
      <section className="mt-5">
        <h2 className="text-muted text-center mb-5 mt-5">Skills and tools</h2>
        <Skills />
      </section>
      <section className="mt-5">
        <h2 className="text-muted text-center mb-5 mt-5">Certifications</h2>
        <div className="row gap-4">
          {certificationsInfo.map(
            ({
              companyLogo,
              certifTitle,
              dateReseved,
              description,
              ceriflink,
            }) => (
              <Certification
                key={certifTitle}
                companyLogo={companyLogo}
                certifTitle={certifTitle}
                dateReceived={dateReseved}
                description={description}
                certifLink={ceriflink}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
export default About;
