# Premium Stacked Card Slider - Achievements Section

## Overview
A sophisticated center-focused stacked card slider designed for the Achievements section, featuring premium fintech/SaaS UI aesthetics with glassmorphism effects and smooth animations.

## Features

### 🎯 Core Functionality
- **Center-focused design**: 3 cards visible at once with the center card prominently displayed
- **Stacked depth effect**: Left and right cards partially visible behind center card
- **Auto-slide**: Automatically cycles through cards every 4 seconds
- **Smart interaction**: Auto-slide pauses during user interaction and resumes after 2 seconds

### 🎨 Visual Design
- **Dark modern background** with gradient overlays
- **Glassmorphism cards** with backdrop blur and subtle borders
- **Smooth shadows** creating realistic depth
- **Premium animations** using Framer Motion
- **Highlight badges** for featured achievements

### 🖱️ Interaction Features
- **Drag/swipe support**: Cards can be dragged horizontally to navigate
- **Touch-friendly**: Full mobile swipe support
- **Hover effects**: Center card scales and glows on hover
- **Navigation buttons**: Left/right arrow buttons for manual control
- **Dot indicators**: Shows current position and allows direct navigation

### 📱 Responsive Design
- **Desktop**: Full stacked slider with depth effects
- **Mobile**: Optimized for touch with smaller cards and adjusted spacing
- **Adaptive**: Automatically adjusts card sizes and spacing based on screen size

## Component Structure

### Data Structure
```typescript
interface AchievementItem {
  id: string;
  title: string;
  description?: string;
  highlight?: boolean; // Shows "Featured" badge
}

interface AchievementSection {
  category: string;
  icon: React.ComponentType<any>;
  items: AchievementItem[];
  summaryPoints: string[]; // Static points below slider
}
```

### Sections Included
1. **Events** - Competition wins and recognitions
2. **Hackathons** - Hackathon participations and victories
3. **Leadership** - Coordinator and volunteer roles

## Key Animations

### Card Transitions
- **Position**: Smooth horizontal movement with 3D rotation
- **Scale**: Center card at 100%, side cards at 85%
- **Opacity**: Center card fully visible, side cards at 60%
- **Depth**: Z-axis positioning for realistic stacking

### Interaction Feedback
- **Hover**: Scale up to 105% with upward movement and glow
- **Drag**: Real-time position updates with momentum
- **Focus**: Accessibility-friendly focus indicators

## Performance Optimizations
- **Will-change** properties for smooth animations
- **Container queries** for efficient layout
- **Debounced interactions** to prevent excessive re-renders
- **Lazy animation** only when cards are visible

## Accessibility Features
- **Keyboard navigation** with arrow keys
- **Focus indicators** for all interactive elements
- **ARIA labels** for screen readers
- **Semantic HTML** structure

## Usage

The component automatically handles:
- Auto-sliding with pause on interaction
- Touch/mouse drag detection
- Responsive breakpoints
- Animation performance

Simply import and use:
```tsx
import Achievements from './components/sections/Achievements';

// Component handles all internal state and interactions
<Achievements />
```

## Customization

### Colors & Themes
Modify CSS custom properties in `Achievements.css`:
- Card backgrounds: `rgba(255, 255, 255, 0.05)`
- Accent colors: `#60a5fa` (blue) and `#a78bfa` (purple)
- Highlight color: `#f59e0b` (amber)

### Animation Timing
Adjust in component constants:
- Auto-slide interval: `4000ms`
- Interaction timeout: `2000ms`
- Animation duration: `0.6s`

### Card Dimensions
Modify in CSS:
- Desktop: `280px × 200px`
- Mobile: `240px × 180px`
- Small mobile: `200px × 160px`

## Browser Support
- Modern browsers with CSS backdrop-filter support
- Fallback styles for older browsers
- Touch events for mobile devices
- Smooth animations with hardware acceleration