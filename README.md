# Attack on Titan Memory Game

A React-based memory card game featuring characters from Attack on Titan. Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## 🎮 About

Test your memory by clicking on character cards without clicking the same character twice! The game features three difficulty levels and tracks your best scores using local storage.

## ✨ Features

- **Three Difficulty Levels:**
  - Easy: 3x3 grid (9 cards)
  - Medium: 4x3 grid (12 cards)
  - Hard: 6x3 grid (18 cards)
- **Dynamic Character Loading:** Fetches random Attack on Titan characters from the [Attack on Titan API](https://attackontitanapi.com/)
- **Score Tracking:** Tracks current score and best score per difficulty level
- **Smooth Animations:** Card shuffle animations using Motion library
- **Persistent Storage:** Best scores saved in browser local storage
- **Responsive Design:** Styled with Tailwind CSS

## 🛠️ Tech Stack

- **React** 19.2 - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Motion** - Animations
- **Attack on Titan API** - Character data

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── CharacterCard.jsx
│   ├── Footer.jsx
│   └── LevelButton.jsx
├── pages/           # Page components
│   ├── HomePage.jsx
│   └── GamePage.jsx
├── constants/       # Game configuration
│   └── levels.js
├── utils/          # Helper functions and utilities
│   ├── API.js      # API integration
│   ├── helper.js   # Utility functions
│   └── storage.js  # Local storage management
└── assets/         # Images, icons, fonts
```

## 🎯 Game Rules

1. Click on any character card to start
2. Cards shuffle after each click
3. Don't click the same character twice
4. Win by clicking all unique characters
5. Game over if you click a character you've already selected

## 📝 Curriculum

This project is part of The Odin Project curriculum.
