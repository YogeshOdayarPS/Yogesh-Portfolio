import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education: React.FC = () => {
  return (
    <motion.div 
      className="section education-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">Education</h2>
      
      <div className="education-grid">
        <motion.div 
          className="glass-card edu-card"
          whileHover={{ scale: 1.02 }}
        >
          <div className="edu-year">2023 - 2027</div>
          <h3 className="edu-degree">B.Tech – CS & Business Systems</h3>
          <p className="edu-school">Sri Sairam Engineering College, West Tambaram, Chennai</p>
          <div className="edu-score">GPA: <span className="text-neon">8.60</span> (up to IV semester)</div>
        </motion.div>

        <motion.div 
          className="glass-card edu-card"
          whileHover={{ scale: 1.02 }}
        >
          <div className="edu-year">2022 - 2023</div>
          <h3 className="edu-degree">HSC</h3>
          <p className="edu-school">Sri Sankara Matriculation Higher Secondary School, Thiruvanmiyur, Chennai</p>
          <div className="edu-score">Score: <span className="text-neon">92.66%</span></div>
        </motion.div>

        <motion.div 
          className="glass-card edu-card edu-card-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="edu-year">Completed</div>
          <h3 className="edu-degree">Praveen Uttarardh in Hindi (Full Course)</h3>
          <p className="edu-school">Dakshin Bharat Hindi Prachar Sabha (DBHPS), Chennai</p>
          <p className="edu-description">Completed the full Hindi exam series up to Praveen Uttarardh.</p>
          <div className="edu-score">Equivalent to <span className="text-neon">B.A. (Hindi)</span> level; recognized by Central & State Governments.</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
