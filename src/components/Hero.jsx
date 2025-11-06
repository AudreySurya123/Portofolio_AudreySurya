import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import profilePic from "../assets/Aku.jpg";
import cvFile from "../assets/CV_AudreySurya.pdf"; // ✅ tambahkan file CV

function Hero() {
    return (
        <section id="home" className="hero-section d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <div className="hero-image-wrapper">
                            <img src={profilePic} alt="profile" className="hero-image" />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="hero-text text-light">
                            <h3 className="fw-normal mb-2">
                                Hi, It's <span className="highlight">Audrey Surya</span>
                            </h3>

                            <h1 className="fw-bold mb-3">
                                I'm a{" "}
                                <span className="highlight">
                                    <ReactTyped
                                        strings={[
                                            "Web Enthusiast",
                                            "Full Stack Developer",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={40}
                                        loop
                                    />
                                </span>
                            </h1>

                            <p className="text-light mb-4">
                                I’m a fresh graduate in Informatics Engineering with strong passion for web development.
                                I specialize in building responsive and interactive web apps using React, Flask, and Laravel.
                            </p>

                            <div className="hero-social mb-4">
                                <a
                                    href="https://www.linkedin.com/in/audreysurya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a
                                    href="https://github.com/AudreySurya123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>

                            {/* 🔹 Tombol Download CV */}
                            <a href={cvFile} download="CV_AudreySurya.pdf">
                                <Button variant="outline-light" className="hire-btn">
                                    Download CV
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
