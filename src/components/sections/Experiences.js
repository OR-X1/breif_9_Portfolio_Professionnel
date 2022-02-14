import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "YOUCODE  (OCP/SIMPLON)",
    years: "2020-2022",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Licence en FST Al-Hoceima MI",
    years: "2020-2021",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Deust à FST Al-Hoceima MIP ",
    years: "2018-2019",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "FST Al-Hoceima",
    years: "2016-2017",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Baccalauréat Sciences Physique Chimie ",
    years: "2014-2015",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
