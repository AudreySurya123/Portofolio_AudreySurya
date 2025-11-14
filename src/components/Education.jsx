import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Education.css";

function Education() {
  const education = [
    {
      degree: "Associate Degree - Informatics Engineering",
      school: "Universitas Sebelas Maret",
      year: "2022 - 2025",
      gpa: "3.76 / 4.00",
    },
  ];

  return (
    <section id="education">
      <Container data-aos="fade-up" data-aos-duration="1000">
        {/* Judul Section */}
        <h2 className="text-center mb-5">Education</h2>

        {/* Daftar Pendidikan */}
        <Row className="justify-content-center">
          {education.map((edu, index) => (
            <Col
              md={12}
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200} // animasi berurutan
            >
              <Card className="education-card shadow-sm">
                {/* Garis gradient atas */}
                <div className="card-gradient"></div>
                <Card.Body>
                  <Card.Title className="edu-title">{edu.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted edu-subtitle">
                    {edu.school} ({edu.year})
                  </Card.Subtitle>
                  {edu.gpa && (
                    <p className="edu-gpa mb-2">
                      <strong>GPA:</strong> {edu.gpa}
                    </p>
                  )}
                  <Card.Text className="edu-desc">{edu.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
