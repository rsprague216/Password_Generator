# Password Generator

A secure, customizable password generator web application built with modern web technologies. Generate strong, cryptographically random passwords with full control over character types and length.

## Project Evolution

This project began as a **vanilla HTML/CSS/JavaScript application** with no build tools or frameworks - just pure client-side code that could run directly in a browser. It served as a learning project to understand the fundamentals of web development, DOM manipulation, and the Web Crypto API for secure random number generation.

The project has since been **migrated to a modern React architecture** using Vite and TailwindCSS, while maintaining all the original functionality and security features. This evolution demonstrates the transition from vanilla JavaScript to component-based architecture while preserving the core cryptographic security principles.

## Features

- **Cryptographically Secure**: Uses the Web Crypto API (`crypto.getRandomValues()`) for true randomness, not pseudo-random `Math.random()`
- **Customizable Length**: Generate passwords from 8 to 64 characters
- **Character Type Controls**: Toggle uppercase, lowercase, numbers, and symbols independently
- **Avoid Ambiguous Characters**: Option to exclude easily confused characters (I, l, 1, 0, O)
- **Minimum Character Enforcement**: Ensures at least 2 characters of each selected type for balanced passwords
- **One-Click Copy**: Copy generated passwords to clipboard instantly
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast & Offline**: Runs entirely client-side with no server dependencies

## Tech Stack

### Current Implementation (React Era)
- **Build Tool**: Vite 6.x - Fast, modern development server with hot module replacement
- **Framework**: React 18.x - Component-based UI with hooks and functional components
- **Styling**: TailwindCSS 3.x - Utility-first CSS framework
- **Routing**: React Router v7 - Client-side routing for multi-page navigation
- **Markdown**: react-markdown 9.x - Renders project documentation dynamically
- **Deployment**: GitHub Pages - Static site hosting

### Original Implementation (Vanilla Era)
- Pure HTML5 with semantic markup
- Custom CSS with flexbox layouts and media queries
- Vanilla JavaScript with event-driven updates
- No build process - direct browser execution
- marked.js CDN for markdown rendering

### Preserved Across Both Versions
- **Security**: Web Crypto API for cryptographically secure random generation
- **Design**: Same color palette and visual identity
- **Logic**: Fisher-Yates shuffle algorithm and minimum character enforcement
- **Deployment**: GitHub Pages compatible static output

## Security Approach

Password generation prioritizes cryptographic security:

1. **Web Crypto API**: All random numbers generated via `crypto.getRandomValues()`, which uses the operating system's cryptographically secure random number generator (CSPRNG)

2. **Character Distribution**: Enforces minimum 2 characters of each selected character type to prevent weak passwords (e.g., won't generate "aaaaaa12" when all types are selected)

3. **Fisher-Yates Shuffle**: After generating the minimum required characters, the final password is shuffled using the Fisher-Yates algorithm with crypto-secure randomness to eliminate positional patterns

4. **No Server Dependency**: Runs entirely in the browser - passwords never leave your device or touch any server

## Project Structure

```
Password_Generator/
├── src/
│   ├── App.jsx                           # Main app with React Router
│   ├── main.jsx                          # Application entry point
│   ├── index.css                         # Tailwind CSS imports
│   ├── components/
│   │   ├── Header.jsx                    # Navigation header
│   │   ├── Footer.jsx                    # Footer component
│   │   └── PasswordGenerator/
│   │       ├── PasswordGenerator.jsx     # Main generator component
│   │       ├── PasswordDisplay.jsx       # Password output display
│   │       ├── PasswordControls.jsx      # Length slider control
│   │       ├── PasswordToggles.jsx       # Character type checkboxes
│   │       ├── PasswordButtons.jsx       # Generate/Copy buttons
│   │       └── usePasswordGenerator.js   # Custom React hook for state
│   ├── pages/
│   │   ├── GeneratorPage.jsx            # Home page (generator)
│   │   └── AboutPage.jsx                # About page (this README)
│   └── utils/
│       └── passwordUtils.js             # Core crypto functions
├── public/
│   └── README.md                        # Served for About page
├── vite.config.js                       # Vite configuration
├── tailwind.config.js                   # Tailwind custom theme
├── package.json                         # Dependencies and scripts
└── CLAUDE.md                           # AI-assisted development docs
```

## How It Works

### Password Generation Algorithm

1. **User Input Collection**: Gather selected character types (uppercase, lowercase, numbers, symbols) and desired length

2. **Character Pool Building** (`buildSelectionSet`):
   - Create pools for each selected character type
   - Optionally filter out ambiguous characters (I, l, 1, 0, O)
   - Combine into a master selection set

3. **Minimum Character Enforcement**:
   - Generate 2 random characters from each selected character type pool
   - Uses `crypto.getRandomValues()` for secure randomness
   - Ensures password contains representation from all selected types

4. **Fill Remaining Length**:
   - Calculate remaining characters needed to reach target length
   - Randomly select from the combined character pool
   - Again using `crypto.getRandomValues()`

5. **Shuffle** (`cryptoShuffle`):
   - Apply Fisher-Yates shuffle algorithm
   - Eliminates positional patterns (prevents minimum chars from clustering)
   - Uses crypto-secure random values for swap positions

6. **Output**: Return the final shuffled password string

### Component Architecture

The React implementation uses a modular component hierarchy:

- **App**: Top-level routing container
  - **Header**: Fixed navigation (Home, About, GitHub)
  - **Routes**: Page routing
    - **GeneratorPage**: Password generator wrapper
      - **PasswordGenerator**: Main orchestrator
        - **PasswordDisplay**: Shows generated password
        - **PasswordControls**: Length slider (8-64)
        - **PasswordToggles**: Character type checkboxes
        - **PasswordButtons**: Generate & Copy actions
    - **AboutPage**: Dynamic README renderer
  - **Footer**: Copyright and tech stack info

State management is handled by a custom `usePasswordGenerator` hook that manages all password settings and automatically regenerates when options change.

## Development

### Prerequisites
- Node.js 18+ and npm

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/rsprague216/Password_Generator.git
   cd Password_Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173/Password_Generator/`

### Available Scripts

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to GitHub Pages
```

### Making Changes

- **Components**: Add or modify React components in `src/components/`
- **Password Logic**: Update crypto functions in `src/utils/passwordUtils.js`
- **Styling**: Modify Tailwind classes or extend theme in `tailwind.config.js`
- **Colors**: Custom colors defined in `tailwind.config.js` (navy, slate, silver, mint)

## Deployment

The app is configured for GitHub Pages deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch**:
   ```bash
   npm run deploy
   ```

The site will be live at: `https://rsprague216.github.io/Password_Generator/`

The base path is configured in `vite.config.js` to work with the GitHub repository name.

## Browser Compatibility

Requires browsers supporting:
- Web Crypto API (`crypto.getRandomValues()`)
- ES6+ JavaScript features
- CSS Grid and Flexbox

Supported browsers: Chrome 60+, Firefox 57+, Safari 11+, Edge 79+

## License

This project is open source and available for educational purposes.

## Credits

**Developer**: Ryan Sprague
**Color Palette**: Generated with [Coolors.co](https://coolors.co/)
**Original Version**: Vanilla HTML/CSS/JavaScript (2025)
**Current Version**: React + TailwindCSS (2025)