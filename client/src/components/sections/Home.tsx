import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg';
import './Home.css';

// Animation variants for better performance
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const profileVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, delay: 0.2 }
};

const contentVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay: 0.4 }
};

const actionsVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay: 0.6 }
};

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = memo(({ setActiveSection }) => {
  const handleContactClick = useCallback(() => {
    setActiveSection('contact');
  }, [setActiveSection]);

  return (
    <motion.div 
      className="section home-section"
      {...containerVariants}
    >
      <div className="home-container">
        {/* Profile Photo */}
        <motion.div 
          className="profile-photo"
          {...profileVariants}
        >
          <img 
            src={profileImg} 
            alt="Yogesh Odayar P S - CSBS Engineer" 
            loading="eager"
            width="200"
            height="200"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="hero-content"
          {...contentVariants}
        >
          <h1 className="hero-heading">
            Hi, I'm <span className="name-highlight">Yogesh Odayar P S.</span>
          </h1>
          
          <p className="hero-description">
            Aspiring CSBS engineer with strong fundamentals, web development experience, and IEEE TEMS leadership, building scalable, impactful solutions.
          </p>

          <motion.div 
            className="hero-actions"
            {...actionsVariants}
          >
            <a 
              href="/resume.pdf" 
              download="Yogesh_Odayar_Resume.pdf"
              className="btn btn-primary"
              aria-label="Download Yogesh Odayar's Resume"
            >
              Download Resume
            </a>
            <button 
              onClick={handleContactClick} 
              className="btn btn-secondary"
              type="button"
              aria-label="Go to Contact section"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
});

Home.displayName = 'Home';

export default Home;