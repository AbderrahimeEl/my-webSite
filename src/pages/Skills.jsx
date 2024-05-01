import React from "react";
import { skills } from "../Details";

function Skills() {
  const { html, css, js, react, vscode, git, github, figma,ubuntu,c,cpp,mysql,windows } = skills;
  return (
    <main className="container mx-auto pt-5">
      <section className="mb-5">
        <h1>Skills</h1>
      </section>
      <section className="row ">
        <SkillItem imgSrc={html} title="HTML" />
        <SkillItem imgSrc={css} title="CSS" />
        <SkillItem imgSrc={js} title="JavaScript" />
        <SkillItem imgSrc={react} title="React" />
      </section>
      <section className="mt-5 mb-5">
        <h1>Tools</h1>
      </section>
      <section className="row ">
        <SkillItem imgSrc={vscode} title="Visual Studio Code" />
        <SkillItem imgSrc={git} title="Git" />
        <SkillItem imgSrc={github} title="Github" />
        <SkillItem imgSrc={figma} title="Figma" />
        <SkillItem imgSrc={c} title="c" />
        <SkillItem imgSrc={cpp} title="c++" />
        <SkillItem imgSrc={ubuntu} title="ubuntu" />
        <SkillItem imgSrc={windows} title="windows" />
        <SkillItem imgSrc={mysql} title="mysql" />
      </section>
    </main>
  );
}

function SkillItem({ imgSrc, title }) {
  return (
    <div className="col-auto text-center">
      <div style={{ width: "100px", height: "100px" }}>
        <img className="w-100 h-100" src={imgSrc} title={title} alt={title} />
      </div>
      <p className="mt-2">{title}</p>
    </div>
  );
}



export default Skills;
