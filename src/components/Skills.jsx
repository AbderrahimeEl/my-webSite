import React from "react";
import { skills } from "../Details";

function Skills() {
  const {
    html,
    css,
    js,
    react,
    vscode,
    git,
    github,
    figma,
    ubuntu,
    c,
    cpp,
    mysql,
    windows,
    bootstrap,
  } = skills;
  return (
    <main className="container mx-auto pt-5 text-center">
      <section className="row justify-content-center">
        <SkillItem imgSrc={html} title="HTML" />
        <SkillItem imgSrc={css} title="CSS" />
        <SkillItem imgSrc={bootstrap} title="Bootstrap" />
        <SkillItem imgSrc={js} title="JavaScript" />
        <SkillItem imgSrc={react} title="React" />
        <SkillItem imgSrc={mysql} title="mysql" />
        <SkillItem imgSrc={c} title="c" />
        <SkillItem imgSrc={cpp} title="c++" />
        <SkillItem imgSrc={vscode} title="vsode" />
        <SkillItem imgSrc={git} title="Git" />
        <SkillItem imgSrc={github} title="Github" />
        <SkillItem imgSrc={figma} title="Figma" />
        <SkillItem imgSrc={ubuntu} title="ubuntu" />
        <SkillItem imgSrc={windows} title="windows" />
      </section>
    </main>
  );
}
function SkillItem({ imgSrc, title }) {
  return (
    <div className="col-auto text-center ms-1 me-1">
      <div style={{ width: "70px", height: "70px" }}>
        <img className="w-100 h-100" src={imgSrc} title={title} alt={title} />
      </div>
      <p className="mt-2 fs-10 text-muted">{title}</p>
    </div>
  );
}
export default Skills;
