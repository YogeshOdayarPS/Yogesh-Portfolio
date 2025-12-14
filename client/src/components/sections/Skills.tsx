import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'JavaScript', 'C']
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Flutter']
  },
  {
    title: 'Backend & DB',
    skills: ['Node.js', 'MySQL']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Excel']
  },
  {
    title: 'Interests',
    skills: ['Data Science', 'Blockchain', 'Machine Learning', 'AI']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Leadership', 'Critical Thinking', 'Adaptability']
  }
];

const Skills: React.FC = () => {
  return (
    <motion.div 
      className="section skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            className="glass-card skill-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="tags-container">
              {category.skills.map(skill => (
                <span key={skill} className="tag skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
