import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Award } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'ieee'>('industry');

  return (
    <motion.div 
      className="section experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        
        {/* Tab Navigation */}
        <div className="experience-tabs">
          <motion.button
            className={`tab-button ${activeTab === 'industry' ? 'active' : ''}`}
            onClick={() => setActiveTab('industry')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Briefcase size={20} />
            <span>Industry</span>
          </motion.button>
          
          <motion.button
            className={`tab-button ${activeTab === 'ieee' ? 'active' : ''}`}
            onClick={() => setActiveTab('ieee')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Award size={20} />
            <span>IEEE</span>
          </motion.button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'industry' && <IndustryExperience />}
          {activeTab === 'ieee' && <IEEEExperience />}
        </div>
      </div>
    </motion.div>
  );
};

const IndustryExperience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="experience-content"
    >
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

const IEEEExperience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="experience-content"
    >
      <IEEETimeline />
    </motion.div>
  );
};

const IEEETimeline: React.FC = () => {
  const ieeeRoles = [
    {
      role: "Content Writer",
      organization: "IEEE TEMS SBC",
      duration: "2023–2024",
      delay: 0.1
    },
    {
      role: "Mastermind",
      organization: "MAGIC Member, IEEE TEMS SBC",
      duration: "2024–2025",
      delay: 0.2
    },
    {
      role: "Secretary",
      organization: "Office Bearer, IEEE TEMS",
      duration: "2025–2026",
      delay: 0.3
    }
  ];

  return (
    <div className="ieee-timeline">
      {ieeeRoles.map((item, index) => (
        <IEEETimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

const IEEETimelineItem: React.FC<{
  role: string;
  organization: string;
  duration: string;
  delay: number;
}> = ({ role, organization, duration, delay }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <motion.div
      ref={ref}
      className="ieee-timeline-item"
      initial={{ y: 50, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className="ieee-timeline-marker"></div>
      <div className="glass-card ieee-timeline-content">
        <span className="timeline-date">{duration}</span>
        <h4 className="timeline-role">{role}</h4>
        <p className="timeline-company">{organization}</p>
      </div>
    </motion.div>
  );
};

export default Experience;
