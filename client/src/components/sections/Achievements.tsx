import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Users, ShieldCheck } from 'lucide-react';
import './Achievements.css';

interface AchievementItem {
  id: string;
  title: string;
  description?: string;
  highlight?: boolean;
}

interface AchievementSection {
  category: string;
  icon: React.ComponentType<any>;
  items: AchievementItem[];
}

const achievements: AchievementSection[] = [
  {
    category: 'Events',
    icon: Trophy,
    items: [
      {
        id: 'event-1',
        title: 'Ideathon SDG Goal 16 – 1st Runner-Up',
        description: 'HydroGuard SkyDefender project recognition',
        highlight: true
      },
      {
        id: 'event-2',
        title: 'Hack4Purpose – Selected Participant',
        description: 'Top 100 in India selection',
        highlight: true
      },
      {
        id: 'event-3',
        title: 'SRM IST Ramapuram – 1st Prize',
        description: 'Paper Presentation (Phoenix\'25)'
      },
      {
        id: 'event-4',
        title: 'Sri Sairam Engineering College – 2nd Prize',
        description: 'ADMAD (BIS) competition'
      },
      {
        id: 'event-5',
        title: 'RMK CET – 1st Place',
        description: 'Technical Quiz (TEZAS 2K25)'
      },
      {
        id: 'event-6',
        title: 'Sri Sairam Engineering College – 1st Place',
        description: 'ADMAD (BIS) competition'
      },
      {
        id: 'event-7',
        title: 'Loyola-ICAM – 1st Place',
        description: 'Idea Pitching (Xplore\'25)'
      },
      {
        id: 'event-8',
        title: 'St. Joseph\'s Institute of Technology – 1st Place',
        description: 'Echo Pitch (Incognito\'25)'
      },
      {
        id: 'event-9',
        title: 'Gojan School of Business & Technology',
        description: '1st Prize Pitching, 3rd Prize Quiz'
      },
      {
        id: 'event-10',
        title: 'New Prince Shri Bhavani College – 2nd Place',
        description: 'Technical Quiz'
      },
      {
        id: 'event-11',
        title: 'MGR Educational & Research Institute – 2nd Prize',
        description: 'SDG Ideathon (CPT Tech Summit)'
      }
    ]
  },
  {
    category: 'Hackathons',
    icon: Star,
    items: [
      {
        id: 'hack-1',
        title: 'SAIHACK FEST – Winner',
        description: '2024 & 2025 consecutive wins',
        highlight: true
      },
      {
        id: 'hack-2',
        title: 'MEDCHAIN',
        description: 'Prathyusha Engineering College'
      },
      {
        id: 'hack-3',
        title: 'BLOCKED – QTUXATHON',
        description: 'Sri Sairam Engineering College'
      },
      {
        id: 'hack-4',
        title: 'CBLOCK – VIT Chennai',
        description: '24-hour hackathon challenge'
      },
      {
        id: 'hack-5',
        title: 'Build2Learn 4hrs hackathon',
        description: 'Freshworks (JUL 2025)'
      }
    ]
  },
  {
    category: 'Leadership - Coordinator',
    icon: ShieldCheck,
    items: [
      {
        id: 'coord-1',
        title: 'GUVI Hackathon Coordinator',
        description: 'IEEE TEMS × HCL GUVI (OCT 2025)',
        highlight: true
      },
      {
        id: 'coord-2',
        title: 'INTEMSTELLAR Coordinator',
        description: 'IEEE TEMS One-Day Symposium (NOV 2025)'
      },
      {
        id: 'coord-3',
        title: 'CONNIQXION Coordinator',
        description: 'Online Quiz Event (1st Years) (OCT 2024)'
      },
      {
        id: 'coord-4',
        title: 'NeoVision 2025 Coordinator',
        description: 'IEEE TEMS (Apr 2025)'
      },
      {
        id: 'coord-5',
        title: 'Winspire 1.0 Organiser',
        description: 'Panel host - IEEE TEMS (Feb 2025)'
      }
    ]
  },
  {
    category: 'Leadership - Volunteer',
    icon: Users,
    items: [
      {
        id: 'vol-1',
        title: 'Winspire 1.0 – Panelist Speaker',
        description: 'March 2025',
        highlight: true
      },
      {
        id: 'vol-2',
        title: 'Cognizant SPIN Event Volunteer',
        description: 'Nov 7, 2025'
      },
      {
        id: 'vol-3',
        title: 'FESTX 2024 Volunteer',
        description: 'CSBS Department Symposium - Sathura Event'
      },
      {
        id: 'vol-4',
        title: 'FESTX 2025 Volunteer',
        description: 'CSBS Department Symposium - UnlockX Event'
      },
      {
        id: 'vol-5',
        title: 'Ascendra - IEEE TEMS 3rd Anniversary',
        description: 'Oct 2024'
      },
      {
        id: 'vol-6',
        title: 'Blockchain BootCamp Volunteer',
        description: 'IEEE TEMS (Apr 2025)'
      },
      {
        id: 'vol-7',
        title: 'B2B Event Volunteer',
        description: 'IEEE TEMS (May 2025)'
      },
      {
        id: 'vol-8',
        title: 'Ascendra - IEEE TEMS 4th Anniversary',
        description: 'Nov 2025'
      }
    ]
  }
];

interface StackedSliderProps {
  items: AchievementItem[];
  category: string;
}

const StackedSlider: React.FC<StackedSliderProps> = ({ items, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      if (!isInteracting && !isDragging) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }, isMobile && category === 'Events' ? 6000 : isMobile ? 5000 : 4000); // Longer interval for Events on mobile
  }, [isInteracting, isDragging, items.length, isMobile, category]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = undefined;
    }
  }, []);

  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
    setIsDragging(true);
    stopAutoSlide();
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  }, [stopAutoSlide]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
    
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, isMobile && category === 'Events' ? 4000 : isMobile ? 3000 : 2000); // Longer timeout for Events on mobile
  }, [isMobile, category]);

  // Enhanced touch/swipe support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    handleInteractionStart();
  }, [handleInteractionStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    // Prevent default scrolling during swipe for Events on mobile
    if (category === 'Events' && isMobile) {
      e.preventDefault();
    }
  }, [category, isMobile]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = isMobile ? 30 : 50; // Lower threshold for mobile
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }
    
    handleInteractionEnd();
  }, [handleInteractionEnd, isMobile]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    if (!isInteracting && !isDragging) {
      startAutoSlide();
    }
  }, [isInteracting, isDragging, startAutoSlide]);

  const nextSlide = () => {
    handleInteractionStart();
    setCurrentIndex((prev) => (prev + 1) % items.length);
    handleInteractionEnd();
  };

  const prevSlide = () => {
    handleInteractionStart();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    handleInteractionEnd();
  };

  // Get visible cards - single card for Events on mobile, 3 cards otherwise
  const getVisibleCards = () => {
    const isEventsOnMobile = category === 'Events' && isMobile;
    
    if (isEventsOnMobile) {
      // Show only center card for Events on mobile
      return [{ ...items[currentIndex], position: 'center', index: currentIndex }];
    }
    
    // Default 3-card layout for desktop and non-Events sections
    const visibleCards = [];
    const totalItems = items.length;
    
    // Left card
    const leftIndex = (currentIndex - 1 + totalItems) % totalItems;
    visibleCards.push({ ...items[leftIndex], position: 'left', index: leftIndex });
    
    // Center card
    visibleCards.push({ ...items[currentIndex], position: 'center', index: currentIndex });
    
    // Right card
    const rightIndex = (currentIndex + 1) % totalItems;
    visibleCards.push({ ...items[rightIndex], position: 'right', index: rightIndex });
    
    return visibleCards;
  };

  const isEventsOnMobile = category === 'Events' && isMobile;

  return (
    <div className={`stacked-slider-container ${isEventsOnMobile ? 'events-mobile-single' : ''}`}>
      <div 
        className={`stacked-slider ${isEventsOnMobile ? 'single-card-mobile' : ''}`}
        onMouseEnter={() => !isMobile && setIsInteracting(true)}
        onMouseLeave={() => !isMobile && setIsInteracting(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`cards-wrapper ${isEventsOnMobile ? 'single-card-wrapper' : ''}`}>
          <AnimatePresence mode="wait">
            {getVisibleCards().map((card, index) => (
              <motion.div
                key={`${card.id}-${card.position}`}
                className={`slider-card ${card.position}-card ${card.highlight ? 'highlight-card' : ''} ${isEventsOnMobile ? 'mobile-single-card' : ''}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: isEventsOnMobile ? 100 : 0 
                }}
                animate={{
                  opacity: card.position === 'center' ? 1 : 0.8,
                  scale: card.position === 'center' ? 1 : 0.85,
                  x: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: isEventsOnMobile ? -100 : 0 
                }}
                transition={{
                  duration: isEventsOnMobile ? 0.5 : 0.6,
                  ease: isEventsOnMobile ? [0.4, 0.0, 0.2, 1] : [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={card.position === 'center' && !isMobile ? { 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                } : {}}
                whileTap={card.position === 'center' && isMobile ? {
                  scale: 0.98,
                  transition: { duration: 0.1 }
                } : {}}
                drag={!isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={!isMobile ? handleInteractionStart : undefined}
                onDragEnd={!isMobile ? (_, info) => {
                  handleInteractionEnd();
                  if (info.offset.x > 100) prevSlide();
                  else if (info.offset.x < -100) nextSlide();
                } : undefined}
              >
                <div className="card-content">
                  <h4 className="card-title">{card.title}</h4>
                  {card.description && (
                    <p className="card-description">{card.description}</p>
                  )}
                </div>
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="slider-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              handleInteractionStart();
              setCurrentIndex(index);
              handleInteractionEnd();
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <motion.div 
      className="section achievements-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">Achievements</h2>
      
      <div className="achievements-container">
        {achievements.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.div 
              key={section.category} 
              className="achievement-group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <h3 className="group-title">
                <Icon className="group-icon" size={24} />
                {section.category}
              </h3>
              
              <StackedSlider 
                items={section.items} 
                category={section.category}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Achievements;