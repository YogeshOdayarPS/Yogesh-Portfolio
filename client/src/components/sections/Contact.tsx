import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <motion.div 
      className="section contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="contact-container glass-card">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="contact-subtitle">
          Whether you have a question, want to collaborate, or just say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="contact-links">
          <a href="mailto:yogeshodayarps@gmail.com" className="contact-item">
            <div className="icon-box">
              <Mail size={32} />
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>yogeshodayarps@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/yogesh-odayar-p-s-8a2077293/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="icon-box">
              <Linkedin size={32} />
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>Yogesh Odayar P S</p>
            </div>
          </a>

          <a href="https://github.com/YogeshOdayarPS" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="icon-box">
              <Github size={32} />
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>@YogeshOdayarPS</p>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
