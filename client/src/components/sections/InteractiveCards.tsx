import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveCards.css';

interface Card {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  technologies?: string[];
  isWelcome?: boolean;
  isCTA?: boolean;
  onCTAClick?: () => void;
}

const InteractiveCards: React.FC<{ setActiveSection: (s: string) => void }> = ({ setActiveSection }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards: Card[] = [
    {
      id: 1,
      title: "Hello 👋 Welcome to my portfolio!",
      subtitle: "This is My bio--->",
      isWelcome: true
    },
    {
      id: 2,
      title: "Full Stack Developer",
      technologies: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Aspiring Data Analyst"
    },
    {
      id: 4,
      title: "Actively involved in coordinating and volunteering initiatives"
    },
    {
      id: 5,
      title: "Get started with Projects",
      isCTA: true,
      onCTAClick: () => setActiveSection('projects')
    }
  ];

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0); // Loop back to first card
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(cards.length - 1); // Loop to last card
    }
  };

  const currentCard = cards[currentCardIndex];

  const cardVariants = {
    enter: {
      x: -50,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: 50,
      opacity: 0
    }
  };

  return (
    <div className="interactive-cards-container">
      {/* Achievement Stats */}
      <div className="achievement-stats">
        <div className="stat-item">
          <span className="stat-icon">⚡</span>
          <span className="stat-text">Projects: 5+</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🧠</span>
          <span className="stat-text">Skillrack points: 5000+</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🏆</span>
          <span className="stat-text">Hackathons: 5+</span>
        </div>
      </div>
      
      <div className="card-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            className={`interactive-card ${currentCard.isWelcome ? 'welcome-card' : ''} ${currentCard.isCTA ? 'cta-card' : ''}`}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
            onClick={currentCard.isCTA ? currentCard.onCTAClick : nextCard}
          >
            <div className="card-content">
              <h3 className="card-title">{currentCard.title}</h3>
              
              {currentCard.isWelcome && (
                <div className="welcome-content">
                  {currentCard.subtitle && (
                    <p className="card-subtitle">{currentCard.subtitle}</p>
                  )}
                  <div className="hand-wave">👋</div>
                </div>
              )}
              
              {currentCard.technologies && (
                <div className="tech-stack">
                  {currentCard.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              
              {currentCard.content && !currentCard.isWelcome && (
                <p className="card-description">{currentCard.content}</p>
              )}
              
              {currentCard.isCTA && (
                <div className="cta-arrow">→</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      

    </div>
  );
};

export default InteractiveCards;