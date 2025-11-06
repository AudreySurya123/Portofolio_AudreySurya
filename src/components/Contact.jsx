import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <>
      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-5">
        <Container data-aos="zoom-in">
          <h2 className="text-center mb-5">Contact Me</h2>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="contact-card shadow-lg" data-aos="fade-up">
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" data-aos="fade-right">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        className="contact-input"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" data-aos="fade-left">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        className="contact-input"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" data-aos="fade-up">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your Message"
                        className="contact-input"
                      />
                    </Form.Group>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="contact-btn"
                        data-aos="zoom-in"
                      >
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      {/* ===== Footer Section ===== */}
      <footer className="footer text-center text-light py-4">
        <Container>
          <div className="social-icons mb-3">
            <a href="https://github.com/AudreySurya123" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/audreysurya" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/audrey_surya/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <p>© 2025 Audrey Surya. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default Contact;
