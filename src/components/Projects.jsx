import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaGithub } from "react-icons/fa";
import "./Projects.css";

// 🖼️ Gambar project
import sipbibuImg from "../assets/sipbibu.png";
import katalogImg from "../assets/katalog.png";
import proctoringImg from "../assets/proctoring.png";

// 🧩 Tech icons
import flaskIcon from "../assets/icons/flask.png";
import yolov11Icon from "../assets/icons/yolo.png";
import codeigniterIcon from "../assets/icons/codeigniter.png";
import reactIcon from "../assets/icons/react.png";
import mysqlIcon from "../assets/icons/mysql.png";
import laravelIcon from "../assets/icons/laravel.png";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "SIPBIBU - Sistem Pencegahan dan Penanganan Baby Blues Pada Ibu",
      desc: "A CodeIgniter and React.js-based web system to help prevent baby blues through questionnaires, consultations, and educational content.",
      demo: "https://sipbibu.tifpsdku.com/beranda",
      code: "https://github.com/AudreySurya123/FE_SIPBIBU",
      image: sipbibuImg,
      tech: [
        { name: "CodeIgniter", icon: codeigniterIcon },
        { name: "React", icon: reactIcon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
    {
      title: "Katalog Barang PT KAI Indonesia Daop 7 Madiun",
      desc: "A Laravel-based inventory catalog system for managing and tracking items at PT KAI Daop 7 Madiun with admin dashboard and responsive interface.",
      demo: "https://katalogbarang.tifpsdku.com/login",
      code: "https://github.com/AudreySurya123/Katalog-Barang",
      image: katalogImg,
      tech: [
        { name: "Laravel", icon: laravelIcon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
    {
      title: "ExamVision - Online Exam Proctoring Application",
      desc: "A Flask-based online exam system integrated with YOLOv11 for real-time proctoring, detecting suspicious behavior, and managing exam sessions.",
      demo: "https://examvision.tifpsdku.com/",
      code: "https://github.com/AudreySurya123/ExamVision",
      image: proctoringImg,
      tech: [
        { name: "Flask", icon: flaskIcon },
        { name: "YOLO", icon: yolov11Icon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container data-aos="fade-up">
        <h2 className="text-center mb-5">My Projects</h2>

        <Row className="justify-content-center align-items-stretch">
          {projects.map((p, index) => (
            <Col
              md={4}
              sm={12}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="d-flex"
            >
              <Card className="project-card mb-4 shadow-lg border-0 flex-fill">
                <div className="card-gradient"></div>

                <Card.Img
                  variant="top"
                  src={p.image}
                  alt={p.title}
                  className="project-img"
                />

                <Card.Body className="d-flex flex-column">
                  <div className="project-content flex-grow-1">
                    <Card.Title className="project-title">{p.title}</Card.Title>
                    <Card.Text className="project-desc">{p.desc}</Card.Text>

                    <div className="tech-stack d-flex flex-wrap align-items-center">
                      {p.tech.map((t, i) => (
                        <div
                          key={i}
                          className="d-flex align-items-center me-3 mb-2 tech-item"
                        >
                          <img
                            src={t.icon}
                            alt={t.name}
                            title={t.name}
                            className="tech-icon me-1"
                          />
                          <span className="tech-name">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tombol */}
                  <div className="mt-auto d-flex justify-content-between pt-3">
                    <Button
                      variant="outline-primary"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-preview"
                    >
                      <FaEye className="me-2" /> Preview
                    </Button>
                    <Button
                      variant="dark"
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-code"
                    >
                      <FaGithub className="me-2" /> View Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
