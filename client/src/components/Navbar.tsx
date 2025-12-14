import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Code, Award, Mail, FolderOpen, GraduationCap } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Exp' },
  { id: 'education', icon: GraduationCap, label: 'Edu' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'achievements', icon: Award, label: 'Awards' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar glass-card">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="icon-container">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div
                    layoutId="active-glow"
                    className="active-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
