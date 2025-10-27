# 🔍 Signal Decoder - The Invisible Pattern Game

An interactive pattern recognition puzzle game built with React and TypeScript. Test your ability to decode hidden patterns from visual signals across 5 challenging levels.

## 🎮 Game Overview

Players observe a 5x5 grid where certain squares flash on and off according to hidden rules. After watching the pattern, players must identify which squares were flashing. Each level introduces a new, more complex pattern rule.

## 🧩 Levels

1. **Even Indices** - Squares at even index positions flash
2. **Diagonals** - Squares on both main diagonals flash
3. **Prime Numbers** - Squares at prime index positions flash
4. **Center Cluster** - The center square and its 4 direct neighbors flash
5. **Modulo Pattern** - Squares where (row + col) is divisible by 3 flash

## ✨ Features

- ✅ 5 progressively challenging levels
- ✅ Clean, modern UI with smooth animations
- ✅ Score tracking system
- ✅ Hint system for each level
- ✅ Replay demo functionality
- ✅ Responsive design (mobile & desktop)
- ✅ Keyboard accessible
- ✅ No external UI libraries
- ✅ Pure CSS animations

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling and animations
- **ESLint** - Code linting

## 📋 Prerequisites

Before running the project, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd signal-decoder-game
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The game will open at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
signal-decoder-game/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Cell.tsx        # Individual grid cell
│   │   ├── Grid.tsx        # 5x5 grid layout
│   │   └── GameController.tsx  # Main game logic
│   ├── hooks/           # Custom React hooks
│   │   └── useDemo.ts      # Demo flashing logic
│   ├── levels/          # Level definitions
│   │   └── levelDefinitions.ts
│   ├── types/           # TypeScript type definitions
│   │   └── game.ts
│   ├── utils/           # Utility functions
│   │   └── helpers.ts
│   ├── styles/          # CSS files
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Cell.css
│   │   ├── Grid.css
│   │   └── GameController.css
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

## 🎯 How to Play

1. **Watch the Demo**: When a level starts, observe which squares flash on and off for ~10 seconds
2. **Select Squares**: After the demo, click on the squares you believe were flashing
3. **Submit**: Click "Submit Answer" to check your selection
4. **Get Feedback**: 
   - ✅ Green = Correct selections
   - ❌ Red = Incorrect selections
5. **Progress**: Move to the next level or replay the demo
6. **Use Hints**: Click "Show Hint" if you need help understanding the pattern

## 🎨 Design Features

- **Dark Theme**: Modern dark UI with gradient accents
- **Smooth Animations**: CSS-powered transitions and pulse effects
- **Responsive Grid**: Adapts to different screen sizes
- **Accessibility**: Keyboard navigation and ARIA labels
- **Visual Feedback**: Clear indication of game state and results

## 📊 Scoring System

- **+10 points** for each correctly identified square
- **-5 points** for each incorrectly selected square
- **Perfect match** advances to the next level automatically

## 🧪 Testing

Run ESLint to check code quality:
```bash
npm run lint
```

## 🚢 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📝 Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Enforced code standards
- **Component Architecture**: Modular and reusable components
- **Custom Hooks**: Encapsulated demo logic
- **Clean Code**: Well-commented and documented

## 🤝 Assignment Requirements Checklist

- ✅ React with functional components and Hooks
- ✅ TypeScript for type safety
- ✅ Custom CSS styling (no UI libraries)
- ✅ No animation libraries (pure CSS)
- ✅ Responsive and clean UI
- ✅ Clean and modular code
- ✅ Important logic commented
- ✅ 5 levels with unique rules
- ✅ Pattern flashing demo
- ✅ User selection and feedback
- ✅ Score tracking
- ✅ Hint system
- ✅ Level progression

## 🐛 Troubleshooting

### Port already in use
If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies not installing
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Build errors
Ensure you're using Node.js v18 or higher:
```bash
node --version
```

## 📄 License

This project is created as an assignment submission.

## 👤 Author

Created for Frontend Assignment - Signal Decoder Game

---

**Enjoy the game! 🎮**
