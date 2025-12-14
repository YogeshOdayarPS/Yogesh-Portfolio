import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <motion.div 
      className="section experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline">
        <motion.div 
          className="timeline-item"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="timeline-marker"></div>
          <div className="glass-card timeline-content">
            <span className="timeline-date">June 2025</span>
            <h3 className="timeline-role">Web Developer Intern</h3>
            <h4 className="timeline-company">Hyundai Motor India Limited</h4>
            
            <div className="timeline-details">
              <p><strong>Problem:</strong> Manual meeting room booking conflicts</p>
              <p><strong>Solution:</strong> Automated Room Management System</p>
              <p><strong>Outcome:</strong> Improved coordination & frontend experience</p>
            </div>
            
            <div className="tech-stack">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
            </div>
            
            <a href="https://roaring-sprinkles-e7d179.netlify.app/#" target="_blank" rel="noopener noreferrer" className="link-btn">
              View Project <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
