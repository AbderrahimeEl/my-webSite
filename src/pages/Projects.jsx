import React from "react";
import Project from "../components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto p-5">
      <section>
        <h1 className="mb-3 mt-5">Projects</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectDetails.map(
            ({
              title,
              image,
              description,
              technologies,
              previewLink,
              githubLink,
            }) => (
              <div key={title} className="col">
                <Project
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
