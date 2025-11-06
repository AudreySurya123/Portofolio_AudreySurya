import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png"; 
import reactIcon from "../assets/icons/react.png";
import phpIcon from "../assets/icons/php.png"; 
import mysqlIcon from "../assets/icons/mysql.png"; 
import laravelIcon from "../assets/icons/laravel.png"; 
import codeigniterIcon from "../assets/icons/codeigniter.png";
import flaskIcon from "../assets/icons/flask.png";
import pythonIcon from "../assets/icons/python.png";
import javaIcon from "../assets/icons/java.png";
import nodejsIcon from "../assets/icons/node.png";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "HTML", level: "Advanced", icon: htmlIcon },
    { name: "CSS", level: "Advanced", icon: cssIcon },
    { name: "JavaScript", level: "Advanced", icon: jsIcon },
    { name: "React JS", level: "Intermediate", icon: reactIcon },
    { name: "PHP", level: "Intermediate", icon: phpIcon }, 
    { name: "MySQL", level: "Intermediate", icon: mysqlIcon }, 
    { name: "Laravel", level: "Intermediate", icon: laravelIcon }, 
    { name: "CodeIgniter", level: "Intermediate", icon: codeigniterIcon },
    { name: "Flask", level: "Intermediate", icon: flaskIcon },
    { name: "Python", level: "Intermediate", icon: pythonIcon },
    { name: "Java", level: "Basic", icon: javaIcon },
    { name: "Node JS", level: "Basic", icon: nodejsIcon },
  ];

  return (
    <section id="skills">
      <Container className="fade-in">
        <h2 className="text-center" data-aos="fade-up">
          Skills
        </h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
          There are some tech stacks and tools that I’ve learned and experienced
        </p>
        <Row>
          {skills.map((skill, index) => (
            <Col
              key={index}
              xs={6}
              md={3}
              lg={2}
              className="mb-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="skill-card text-center">
                <div className="skill-box">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h6>{skill.name}</h6>
                  <p className="level">{skill.level}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
