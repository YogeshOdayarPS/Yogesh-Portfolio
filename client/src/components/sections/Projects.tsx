import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import './Projects.css';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  outcome?: string;
  details: string;
}

const projectsData: Project[] = [
  {
    id: 'kidbrace',
    title: 'CK KidBrace',
    category: 'IoT & Health',
    description: 'Smart wearable system for infant health monitoring.',
    tech: ['IoT Sensors', 'Microcontroller', 'Mobile App'],
    details: 'A smart wearable system that monitors infant health parameters and sends real-time safety alerts to parents via a mobile application. Tech Stack includes IoT Sensors, Microcontroller, and Mobile App integration.',
    outcome: 'Real-time alerts & preventive child safety'
  },
  {
    id: 'blocked',
    title: 'BlockED',
    category: 'Blockchain',
    description: 'NFT Microcredential Framework for secure learning.',
    tech: ['Blockchain', 'Smart Contracts', 'NFTs', 'IPFS'],
    link: 'https://block-ed.netlify.app/',
    details: 'A blockchain-based course learning platform enabling secure, verifiable, and personalized learning certifications using smart contracts and decentralized storage.',
  },
  {
    id: 'cblock',
    title: 'CBlock',
    category: 'Web3 Marketplace',
    description: 'Decentralized carbon credit trading platform.',
    tech: ['Blockchain', 'Smart Contracts', 'Web/Mobile App'],
    link: 'https://cblock.vercel.app/',
    details: 'Decentralized carbon credit trading platform that ensures transparent issuance, verification, and trading of carbon credits aligned with AICTE student innovation guidelines. Cleared all levels of internal hackathon for SIH.',
  },
  {
    id: 'hydroguard',
    title: 'HYDROGUARD',
    category: 'Research / IPR',
    description: 'Homeostatic Flying Hovercraft for military use.',
    tech: ['IPR Publication', 'Research', 'Defence Tech'],
    details: 'Published: Sept 13, 2024. Office of the Controller General of Patents, Govt. of India. Paper: Homeostatic Flying Hovercraft: Efficient and Durable Solutions for Military and Rescue Missions.',
    outcome: 'IPR Published'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.div 
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="glass-card project-card"
            whileHover={{ y: -10, boxShadow: '0 20px 40px -20px rgba(57, 255, 20, 0.2)' }}
            onClick={() => setSelectedProject(project)}
            layoutId={`project-${project.id}`}
          >
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.slice(0, 3).map(t => <span key={t} className="mini-tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="glass-card project-modal"
              layoutId={`project-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-content">
                <span className="text-neon">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <div className="modal-body">
                  <p className="modal-details">{selectedProject.details}</p>
                  
                  {selectedProject.outcome && (
                    <div className="modal-section">
                      <h4>Outcome</h4>
                      <p>{selectedProject.outcome}</p>
                    </div>
                  )}

                  <div className="modal-tags">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View Live <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
