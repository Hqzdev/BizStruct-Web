# BizStruct Website - Features & Technical Documentation

## Overview

BizStruct website is a modern, responsive Next.js application designed to showcase the BizStruct Assistant Telegram bot. The website features a clean, professional design with interactive elements, smooth animations, and comprehensive information about the product.

---

## Technical Stack

### Core Technologies

- **Next.js 14** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

### Key Libraries

- **Intersection Observer API** - Scroll-triggered animations
- **Custom hooks** - Reusable React hooks for animations and language management
- **Local Storage API** - Language preference persistence

---

## Site Structure

### Pages

1. **Homepage (`/`)** - Main landing page with product overview
2. **Features (`/features`)** - Detailed feature descriptions
3. **Pricing (`/pricing`)** - Pricing information and plans
4. **Documentation (`/documentation`)** - User guides and setup instructions

### Layout System

- **Left-aligned layout** - Content aligned to the left edge (not centered)
- **Wide container** - Maximum width: 1400px (desktop), 1600px (XL screens)
- **Vertical lines** - Decorative left and right border lines
- **Responsive padding** - Adaptive spacing: `px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`

---

## Design Features

### Color Scheme

- **Background**: `#F7F5F3` (warm beige)
- **Primary text**: `#37322F` (dark brown)
- **Secondary text**: `#49423D` (medium brown)
- **Muted text**: `#605A57` (light brown)
- **Borders**: `rgba(55,50,47,0.12)` (subtle borders)
- **Accent**: `#5D4E37` (brown accent)

### Typography

- **Sans-serif**: Open Sans (body text, UI elements)
- **Serif**: Instrument Serif (headings, emphasis)
- **Font weights**: 300, 400, 500, 600, 700, 800
- **Responsive sizing**: Scales from mobile to desktop

### Spacing System

- Consistent spacing using Tailwind's scale
- Responsive gaps: `gap-4 sm:gap-6 md:gap-8 lg:gap-[66px]`
- Adaptive padding throughout components

---

## Interactive Features

### 1. Scroll Animations

**Intersection Observer Implementation**
- Elements fade in and slide up when scrolled into view
- Custom hook: `useIntersectionObserver`
- Threshold: 0.1 (10% visibility)
- Root margin: `0px 0px -50px 0px` (triggers slightly before viewport)

**Animation Classes**
- `animate-on-scroll` - Base animation class
- `animate-fade-in-up` - Fade and slide animation
- Smooth transitions with CSS animations

### 2. Interactive Dashboard Visualizations

**Notion Dashboard Components**
- Three interactive dashboard views:
  1. **Telegram Capture View** - Shows Notion Inbox with captured items
  2. **Gmail Classification View** - Displays AI-powered email classification
  3. **Daily Summary View** - Telegram summary interface

**Features:**
- Smooth transitions between views
- Auto-rotation every 5 seconds
- Click-to-switch functionality
- Progress bar animation (5-second cycle)
- Responsive sizing

### 3. Language Switching

**Bilingual Support (EN/RU)**
- Toggle button in navigation
- Persistent language preference (localStorage)
- Custom event system for language changes
- All content translated dynamically
- Smooth transitions between languages

**Implementation:**
- Custom hook: `getStoredLanguage()` / `setStoredLanguage()`
- Event-driven updates: `languageChange` custom event
- React state management for instant updates

### 4. Feature Cards Auto-Rotation

**Hero Section Cards**
- Three feature cards with automatic rotation
- Progress bar showing rotation progress
- Manual click-to-switch option
- Smooth fade and scale transitions
- 5-second interval between rotations

---

## Component Architecture

### Main Sections (Homepage)

1. **Hero Section**
   - Large headline with serif font
   - Subtitle and description
   - CTA button linking to Telegram bot
   - Scroll-triggered animations

2. **Interactive Dashboard Preview**
   - Large dashboard visualization (1200px width)
   - Three rotating views
   - Responsive height: 200px (mobile) to 695px (desktop)

3. **Feature Cards Section**
   - Three clickable feature cards
   - Active state with progress bar
   - Border decorations (left/right patterns)
   - Responsive grid layout

4. **Social Proof Section**
   - Badge component
   - Title and description
   - Logo grid component
   - Client testimonials

5. **Bento Grid Section**
   - Multi-column layout
   - Feature highlights
   - Visual components
   - Decorative patterns

6. **Numbers That Speak Section**
   - Financial dashboard visualization
   - Layered chart components
   - Figma-exported design elements
   - Precise measurements (482×300px)

7. **Documentation Section**
   - Three feature cards with descriptions
   - Interactive card switching
   - Dashboard visualizations
   - Progress bar animations

8. **Testimonials Section**
   - Customer testimonials
   - Avatar images
   - Star ratings
   - Company information

9. **FAQ Section**
   - Accordion component (Radix UI)
   - Expandable questions/answers
   - Smooth animations
   - Bilingual support

10. **Pricing Section**
    - Pricing card
    - Feature list
    - CTA button
    - Trial information

11. **CTA Section**
    - Final call-to-action
    - Telegram bot link
    - Encouraging copy

12. **Footer Section**
    - Links and navigation
    - Social media links
    - Company information
    - Language support

---

## Responsive Design

### Breakpoints

- **Mobile**: Default (< 640px)
- **SM**: 640px+
- **MD**: 768px+
- **LG**: 1024px+
- **XL**: 1280px+

### Adaptive Features

**Navigation**
- Fixed position navigation bar
- Rounded pill design
- Responsive padding and sizing
- Hidden menu items on mobile

**Typography**
- Responsive font sizes:
  - Headlines: `text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px]`
  - Body: `text-sm sm:text-base md:text-lg`
  - Buttons: `text-xs md:text-[13px]`

**Layout**
- Flexible grid systems
- Responsive columns (1 col mobile, 2+ cols desktop)
- Adaptive spacing
- Mobile-first approach

**Images & Visualizations**
- Responsive image sizing
- Object-fit strategies
- Adaptive dashboard heights
- Mobile-optimized layouts

---

## UI Components

### Custom Components

1. **Badge Component**
   - Rounded pill design
   - Icon + text layout
   - Shadow effects
   - Border styling

2. **Feature Card Component**
   - Clickable cards
   - Active state styling
   - Progress bar indicator
   - Hover effects

3. **Dashboard Visualization**
   - Notion-style interfaces
   - Data tables
   - Status indicators
   - Color-coded elements

4. **Numbers That Speak**
   - Financial charts
   - Layered design
   - Precise measurements
   - Theme support

### Radix UI Components Used

- Accordion (FAQ section)
- Dialog
- Dropdown Menu
- Popover
- Tooltip
- And more (full UI component library)

---

## Performance Features

### Optimization

- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Lazy Loading** - Components load on demand
- **Intersection Observer** - Efficient scroll detection
- **CSS-in-JS** - Scoped styles, no global conflicts

### Loading States

- Smooth page transitions
- Progressive content loading
- Animation-ready states
- No layout shift

---

## Accessibility Features

### ARIA Labels

- Language toggle button: `aria-label="Toggle language"`
- Navigation links properly labeled
- Semantic HTML structure

### Keyboard Navigation

- All interactive elements keyboard accessible
- Focus states visible
- Tab order logical

### Screen Reader Support

- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Descriptive link text

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes
- Graceful degradation for older browsers

---

## Development Features

### Code Organization

- **Component-based architecture** - Reusable React components
- **TypeScript** - Type safety throughout
- **Modular CSS** - Tailwind utility classes
- **Custom hooks** - Reusable logic
- **Translation system** - Centralized translations

### File Structure

```
app/
  ├── page.tsx (Homepage)
  ├── features/page.tsx
  ├── pricing/page.tsx
  ├── documentation/page.tsx
  └── layout.tsx

components/
  ├── ui/ (Radix UI components)
  ├── hero-section.tsx
  ├── feature-cards.tsx
  ├── pricing-section.tsx
  ├── faq-section.tsx
  ├── testimonials-section.tsx
  └── ... (other sections)

lib/
  ├── language.ts (Language management)
  └── utils.ts (Utilities)
```

---

## Special Features

### 1. Left-Aligned Layout

- Unique left-aligned design (not centered)
- Wide content area (1400-1600px)
- Generous left padding
- Professional, editorial feel

### 2. Decorative Elements

- Vertical border lines (left and right)
- Decorative patterns in feature sections
- Gradient overlays
- Shadow effects

### 3. Interactive Visualizations

- Real-time dashboard previews
- Notion-style interfaces
- Data visualization components
- Smooth transitions

### 4. Progress Indicators

- Auto-rotation progress bars
- Visual feedback for interactions
- Smooth animations
- Clear state indication

### 5. Multi-language Support

- Seamless language switching
- Persistent preferences
- Event-driven updates
- Complete translation coverage

---

## User Experience Features

### Navigation

- Fixed navigation bar
- Smooth scroll behavior
- Clear section indicators
- Mobile-friendly menu

### Content Presentation

- Clear hierarchy
- Scannable content
- Visual breaks between sections
- Consistent spacing

### Call-to-Actions

- Prominent CTA buttons
- Clear value propositions
- Direct links to Telegram bot
- Multiple conversion points

### Information Architecture

- Logical page flow
- Clear feature explanations
- Comprehensive FAQ
- Easy-to-find documentation

---

## Technical Implementation Details

### State Management

- React hooks (useState, useEffect, useRef)
- Local storage for persistence
- Custom event system
- Component-level state

### Animation System

- CSS transitions
- Intersection Observer API
- Custom animation classes
- Smooth performance

### Styling Approach

- Tailwind CSS utility classes
- Inline styles for dynamic components
- CSS variables for theming
- Responsive design utilities

### Performance Optimizations

- Next.js automatic optimizations
- Code splitting
- Image optimization
- Efficient re-renders

---

## Deployment & Build

### Build Process

- Next.js production build
- TypeScript compilation
- CSS optimization
- Asset optimization

### Environment

- Node.js runtime
- Modern ES6+ features
- React Server Components support
- Static generation where possible

---

## Maintenance & Updates

### Easy Updates

- Component-based structure
- Centralized translations
- Reusable components
- Clear code organization

### Scalability

- Modular architecture
- Easy to add new sections
- Flexible component system
- Extensible design

---

## Summary

The BizStruct website is a modern, feature-rich Next.js application with:

✅ **Responsive design** - Works on all devices  
✅ **Interactive elements** - Engaging user experience  
✅ **Smooth animations** - Professional feel  
✅ **Bilingual support** - EN/RU languages  
✅ **Performance optimized** - Fast loading  
✅ **Accessible** - WCAG compliant  
✅ **Modern stack** - Next.js 14, React 19, TypeScript  
✅ **Unique design** - Left-aligned, wide layout  
✅ **Rich components** - Dashboard visualizations, interactive cards  
✅ **SEO friendly** - Proper meta tags and structure  

---

*Last updated: 2024*
