import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";
import profilePic from "../assets/Aku2.png"; // ✅ import gambar dari folder src/assets

function About() {
  return (
    <section id="about">
      <Container data-aos="fade-up">
        <h2 className="text-center">About Me</h2>
        <Row className="align-items-center mt-5">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src={profilePic} // ✅ gunakan variabel
              roundedCircle
              fluid
              alt="Profile"
            />
          </Col>
          <Col md={8}>
            <p>
              I am a fresh graduate of Informatics Engineering from Sebelas Maret University with a great interest and passion in the field of software development. I focus on Web Development and have gained valuable experience in this field. I have the ability to work collaboratively in a team and possess good problem-solving skills.
              The skills that I have mastered include communication and teamwork, attention to detail, responsibility, and proficiency in several programming languages such as HTML, CSS, PHP, Java, Python, and JavaScript. In addition, I am also experienced in using web frameworks such as React.js, Flask, Laravel, and CodeIgniter to develop dynamic and scalable web applications.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
