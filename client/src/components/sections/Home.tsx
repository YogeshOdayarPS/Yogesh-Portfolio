import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

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

        {/* Home Bottom Highlights - "Visually Dense" */}
        <div className="home-highlights">
          <motion.div 
            className="highlight-card glass-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="highlight-icon"><Sparkles size={20} /></div>
            <div className="highlight-text">
              <h3>Open to Opportunities</h3>
              <p>Internships & Full-time Roles</p>
            </div>
          </motion.div>

          <motion.div 
            className="highlight-card glass-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="highlight-icon"><Zap size={20} /></div>
            <div className="highlight-text">
              <h3>IEEE TEMS Member</h3>
              <p>Active Leadership & Events</p>
            </div>
          </motion.div>

          <motion.div 
            className="highlight-card glass-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="highlight-icon"><BookOpen size={20} /></div>
            <div className="highlight-text">
              <h3>Research Focused</h3>
              <p>Hackathons & IPR Published</p>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Home;
