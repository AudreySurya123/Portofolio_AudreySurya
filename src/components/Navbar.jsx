import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "experience",
        "projects",
        "contact",
      ];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.clientHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            current = id;
          }
        }
      });

      setActiveLink(current);
    };

    // jalankan saat scroll
    window.addEventListener("scroll", handleScroll);
    // jalankan pertama kali untuk inisialisasi
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Surya Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav
            className="ms-auto custom-nav"
            activeKey={activeLink}
            onSelect={(selectedKey) => setActiveLink(selectedKey)}
          >
            <Nav.Link eventKey="home" href="#home">Home</Nav.Link>
            <Nav.Link eventKey="about" href="#about">About</Nav.Link>
            <Nav.Link eventKey="skills" href="#skills">Skills</Nav.Link>
            <Nav.Link eventKey="education" href="#education">Education</Nav.Link>
            <Nav.Link eventKey="experience" href="#experience">Experience</Nav.Link>
            <Nav.Link eventKey="projects" href="#projects">Projects</Nav.Link>
            <Nav.Link eventKey="contact" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
