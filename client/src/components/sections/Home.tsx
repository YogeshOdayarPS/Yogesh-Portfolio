import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC<{ setActiveSection: (s: string) => void }> = ({ setActiveSection }) => {
  return (
    <motion.div 
      className="section home-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-container">
        
        {/* Main Hero Content */}
        <div className="home-hero">
          <div className="hero-text">
            <h1 className="greeting">Hi, I'm <span className="text-neon">Yogesh Odayar P S.</span></h1>
            <h2 className="subheading">
              Building technology-driven solutions that connect <span className="highlight">innovation</span>, <span className="highlight">business</span>, and <span className="highlight">impact</span>.
            </h2>
            
            <p className="description">
              Aspiring Computer Science and Business Systems engineer with strong technical fundamentals,
              hands-on experience in web development, and a growing interest in data science.
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
          
          {/* Right side is reserved for profile image via CSS absolute positioning or layout */}
          <div className="hero-spacer"></div> 
        </div>

      </div>
    </motion.div>
  );
};

export default Home;
