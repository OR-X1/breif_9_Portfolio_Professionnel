import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Front end",
    content:
      "HTML5, css3, Javascript, Bootstrap, Vuejs, React , SASS,JQuery.",
    color: "#FFD15C",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Back end",
    content:
      "PHP, API RESTFUL , DJANGO , NodeJs, MVC,Laravel.",
    color: "#62C795",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "UI/UX design",
    content:
      "Adobe XD, Figma.",
    color: "#6C6CE5",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
