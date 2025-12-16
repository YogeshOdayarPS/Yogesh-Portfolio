import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCards from './InteractiveCards';
import './Home.css';

const Home: React.FC<{ setActiveSection: (s: string) => void }> = ({ setActiveSection }) => {
  return (
    <motion.div 
      className="section home-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT SECTION - Interactive Cards (Desktop Only) */}
      <div className="left-section">
        {/* Achievement Stats */}
        <div className="achievement-stats-home">
          <div className="stat-item-home">
            <span className="stat-icon-home">⚡</span>
            <span className="stat-text-home">Projects: 5+</span>
          </div>
          <div className="stat-item-home">
            <span className="stat-icon-home">🧠</span>
            <span className="stat-text-home">Skillrack points: 5000+</span>
          </div>
          <div className="stat-item-home">
            <span className="stat-icon-home">🏆</span>
            <span className="stat-text-home">Hackathons: 5+</span>
          </div>
        </div>
        <InteractiveCards setActiveSection={setActiveSection} />
      </div>

      {/* CENTER SECTION - Main Content */}
      <div className="center-section">
        <div className="home-content">
          <h1 className="greeting">Hi, I'm <span className="text-neon">Yogesh Odayar P S.</span></h1>
          <h2 className="subheading">
            Building technology-driven solutions that connect <span className="highlight">innovation</span>, <span className="highlight">business</span>, and <span className="highlight">impact</span>.
          </h2>
          
          <p className="description">
            Aspiring Computer Science and Business Systems engineer with strong technical fundamentals,
            hands-on experience in web development, 
            and a growing interest in data science.
            An active IEEE TEMS member with proven leadership skills, driven to build practical,
            scalable solutions and contribute to impactful technology initiatives.
          </p>

          <div className="actions">
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
            <button onClick={() => setActiveSection('contact')} className="btn btn-secondary contact-btn">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - Info Boxes (Profile image is handled by App.css) */}
      <div className="right-section">
        <div className="info-boxes-container">
          <motion.div 
            className="info-box"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setActiveSection('education')}
          >
            <span className="info-text">B.Tech CSBS<br/>Pre-Final Year</span>
            <div className="arrow-right"></div>
          </motion.div>
          
          <motion.div 
            className="info-box"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setActiveSection('achievements')}
          >
            <span className="info-text">IEEE TEMS SBC<br/>Secretary</span>
            <div className="arrow-right"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;