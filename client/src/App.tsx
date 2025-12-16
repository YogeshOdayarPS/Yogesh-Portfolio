import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import profileImg from "./assets/profile.jpg";
import logoImg from "./assets/logo.png";
import { MapPin, Linkedin, Github, Mail } from "lucide-react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "achievements":
        return <Achievements />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <>
      {/* Fixed Headers - Outside app-container */}
      <div className="top-left-header">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="app-logo" />
        </div>
        <div className="location-badge">
          <MapPin size={14} className="location-icon" />
          <span>Chennai, TN, India</span>
        </div>
      </div>

      <div className="top-right-socials">
        <a href="https://www.linkedin.com/in/yogesh-odayar-p-s-8a2077293/" target="_blank" rel="noopener noreferrer" className="social-link">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/YogeshOdayarPS" target="_blank" rel="noopener noreferrer" className="social-link">
          <Github size={20} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yogeshodayarps@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <Mail size={20} />
        </a>
      </div>

      <div className="app-container">

      {/* Profile Photo - Persistent */}
      <div className={`profile-container ${activeSection === 'home' ? 'home-mode' : ''}`}>
        <div className="profile-circle">
          <img src={profileImg} alt="Yogesh Odayar P S" />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="main-content container">
        {renderSection()}
      </main>

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
        {/* Background Elements */}
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
      </div>
    </>
  );
}

export default App;
