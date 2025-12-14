import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users, Mic, Presentation, ShieldCheck } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    category: 'Events',
    icon: Trophy,
    items: [
      'Ideathon SDG Goal 16 – 1st Runner-Up (HydroGuard SkyDefender)',
      'Hack4Purpose – Selected Participant (Top 100 in India)',
      'SRM IST Ramapuram – 1st Prize, Paper Presentation (Phoenix’25)',
      'Sri Sairam Engineering College – 2nd Prize, ADMAD (BIS)',
      'RMK CET – 1st Place, Technical Quiz (TEZAS 2K25)',
      'Sri Sairam Engineering College – 1st Place, ADMAD (BIS)',
      'Loyola-ICAM – 1st Place, Idea Pitching (Xplore’25)',
      'St. Joseph’s Institute of Technology – 1st Place, Echo Pitch (Incognito’25)',
      'Gojan School of Business & Technology – 1st Prize Pitching, 3rd Prize Quiz',
      'New Prince Shri Bhavani College – 2nd Place, Technical Quiz',
      'MGR Educational & Research Institute – 2nd Prize, SDG Ideathon (CPT Tech Summit)'
    ]
  },
  {
    category: 'Hackathons',
    icon: Star,
    items: [
      'SAIHACK FEST – Winner (2024 & 2025)',
      'MEDCHAIN – Prathyusha Engineering College',
      'BLOCKED – QTUXATHON (Sri Sairam Engineering College)',
      'CBLOCK – VIT Chennai (24-hour hackathon)'
    ]
  },
  {
    category: 'Leadership - Coordinator',
    icon: ShieldCheck,
    items: [
      'GUVI Hackathon (IEEE TEMS × HCL GUVI) (OCT 2025)',
      'INTEMSTELLAR – IEEE TEMS One-Day Symposium (NOV 2025)',
      'CONNIQXION – Online Quiz Event (1st Years) (OCT 2024)'
    ]
  },
  {
    category: 'Leadership - Volunteer',
    icon: Users,
    items: [
      'Winspire 1.0 – Panelist Speaker (March 2025)',
      'Cognizant SPIN Event – Nov 7, 2025'
    ]
  }
];

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
            <div key={section.category} className="achievement-group">
              <h3 className="group-title">
                <Icon className="group-icon" size={24} />
                {section.category}
              </h3>
              <div className="horizontal-scroll">
                {section.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card achievement-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Achievements;
