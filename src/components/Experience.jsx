import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experience.css"; // ✅ pastikan file CSS-nya diimport

function Experience() {
  // 🔹 Inisialisasi AOS saat pertama kali komponen dimuat
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      role: "Fullstack Web Developer Intern",
      company: "PT Garapan Indonesia Sukses",
      year: "Feb 2024 - Jun 2024",
      desc: "Designed and developed a full-stack web platform using CodeIgniter and React.js to support mental wellness among new mothers. The system empowers users to prevent baby blues through personalized questionnaires, virtual consultations, and interactive learning content.",
    },
    {
      role: "Fullstack Web Developer Intern",
      company: "PT Garapan Indonesia Sukses",
      year: "Aug 2024 - Dec 2024",
      desc: "Developed an online exam proctoring website using Flask and YOLOv8 technology for real-time cheating detection via webcam. Built the system into a standalone executable (.exe) application to enhance accessibility and ease of deployment.",
    },
    {
      role: "Software Developer Intern",
      company: "PT KAI Indonesia",
      year: "Dec 2024 - Feb 2025",
      desc: "Developed a web-based inventory catalog system using Laravel 11 and MySQL as the database. Implemented CRUD features, stock management, and export functionalities for item reports (PDF/XLSX). Collaborated with the IT team to improve backend performance and enhance the admin dashboard with responsive UI and data visualization.",
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <Container data-aos="fade-up">
        <h2 className="text-center mb-5">Experience</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col
              md={6}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200} // animasi muncul bergantian
            >
              <Card className="experience-card shadow-lg border-0 mb-4">
                <div className="card-gradient"></div>
                <Card.Body>
                  <Card.Title className="fw-bold">{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.company} ({exp.year})
                  </Card.Subtitle>
                  <Card.Text>{exp.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
