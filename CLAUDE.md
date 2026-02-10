# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based password generator built with Vite and TailwindCSS. The project uses modern React patterns with hooks and component composition, while maintaining the security-first approach with Web Crypto API for password generation.

## Development Workflow

### Local Development
```bash
npm run dev        # Start Vite dev server at localhost:5173
npm run build      # Build for production to dist/
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages
```

Development server runs at: `http://localhost:5173/Password_Generator/`

### Deployment
The project is configured for GitHub Pages deployment:
- Run `npm run deploy` to build and push to gh-pages branch
- GitHub Pages serves from the gh-pages branch
- Base path is set to `/Password_Generator/` in [vite.config.js](vite.config.js)

## Architecture

### Tech Stack
- **Build Tool:** Vite 6.x
- **Framework:** React 18.x (JavaScript, not TypeScript)
- **Styling:** TailwindCSS 3.x
- **Routing:** React Router v7
- **Markdown:** react-markdown 9.x

### File Structure

```
src/
├── App.jsx                    # Main app with React Router setup
├── main.jsx                   # Entry point, renders App into root div
├── index.css                  # Tailwind directives (@tailwind base/components/utilities)
├── components/
│   ├── Header.jsx             # Fixed header with navigation (home/about/github)
│   ├── Footer.jsx             # Fixed footer with copyright
│   └── PasswordGenerator/
│       ├── PasswordGenerator.jsx     # Main orchestrator component
│       ├── PasswordDisplay.jsx       # Shows generated password
│       ├── PasswordControls.jsx      # Length slider (8-64)
│       ├── PasswordToggles.jsx       # Checkboxes for character types
│       ├── PasswordButtons.jsx       # Generate/Copy buttons
│       └── usePasswordGenerator.js   # Custom hook with state & logic
├── pages/
│   ├── GeneratorPage.jsx     # Home page wrapper for PasswordGenerator
│   └── AboutPage.jsx         # Fetches and renders README.md with react-markdown
└── utils/
    └── passwordUtils.js      # Pure functions for password generation (crypto API)

public/
├── ABOUT.md                  # Concise about page content
└── README.md                 # Full project documentation (for reference)

Configuration files:
- vite.config.js              # Vite config with base path for GH Pages
- tailwind.config.js          # Custom colors: navy, slate, silver, mint
- postcss.config.js           # PostCSS config for Tailwind
- package.json                # Dependencies and scripts
```

### Component Architecture

**App.jsx** - Top-level component
- Sets up React Router with `HashRouter` for GitHub Pages compatibility
- Wraps app in `<HashRouter>` (uses hash-based routing to avoid 404s on refresh)
- Renders Header, Routes (/ and /about), Footer
- Sets background to mint color

**Pages:**
- **GeneratorPage** - Renders `<PasswordGenerator />` with proper spacing
- **AboutPage** - Fetches `/ABOUT.md`, strips H1, renders with react-markdown

**PasswordGenerator Component Hierarchy:**
```
PasswordGenerator (orchestrator)
├── PasswordDisplay (shows password)
├── PasswordControls (length slider)
├── PasswordToggles (5 checkboxes)
└── PasswordButtons (Generate/Copy)
```

### Password Generation Logic

**Core Files:**
- [src/utils/passwordUtils.js](src/utils/passwordUtils.js) - Pure crypto functions
- [src/components/PasswordGenerator/usePasswordGenerator.js](src/components/PasswordGenerator/usePasswordGenerator.js) - React hook

**Key Functions (passwordUtils.js):**

1. **buildSelectionSet(toggles, avoidAmbiguous)**
   - Creates character pools based on toggles array `[uppercase, lowercase, numbers, symbols]`
   - Filters out ambiguous characters (I, l, 1, 0, O) if `avoidAmbiguous` is true
   - Returns `{ selectionSet, characterSets }`

2. **cryptoShuffle(array)**
   - Fisher-Yates shuffle using `crypto.getRandomValues()` for secure randomness
   - Modifies array in place

3. **generatePassword(length, options)**
   - Main generation function
   - Options: `{ uppercase, lowercase, numbers, symbols, avoidAmbiguous }`
   - Enforces minimum 2 characters per selected character type (hardcoded `minCharsCount = 2`)
   - Uses `crypto.getRandomValues()` for cryptographically secure randomness
   - Returns shuffled password string

**Custom Hook (usePasswordGenerator.js):**
- **State:** password, length (20 default), uppercase/lowercase/numbers/symbols/avoidAmbiguous (all true default)
- **Effect:** Regenerates password whenever any option changes
- **Methods:**
  - `generateNewPassword()` - Calls passwordUtils and updates state
  - `copyToClipboard()` - Uses navigator.clipboard API
- Returns all state, setters, and methods for components to use

### Styling with TailwindCSS

**Custom Colors** ([tailwind.config.js](tailwind.config.js)):
```javascript
colors: {
  navy: '#011638',    // Header/footer background, borders
  slate: '#364156',   // Generator card background, text
  silver: '#cdcdcd',  // Password display, buttons
  mint: '#dff8eb',    // Page background, header text
}
```

**Key Styling Patterns:**
- Responsive breakpoints: `max-[730px]:`, `max-[605px]:`, `max-[530px]:`, `max-[450px]:`, `max-[375px]:`, `max-[360px]:`
- Landscape queries: `landscape:max-h-[450px]:`
- Fixed header/footer with `fixed top-0`/`fixed bottom-0`
- Card-based layout with rounded corners (removed on mobile)
- Hover states with `hover:bg-mint`, `hover:bg-silver`
- Active states with `active:shadow-[inset_1px_1px_5px_rgba(0,0,0,0.5)]`

**Responsive Behavior:**
- Mobile (< 730px): Full width generator, no rounded corners, no shadow
- Small mobile (< 530px): Abbreviated button text ("Generate" vs "Generate Password")
- Header height adjusts at 605px breakpoint
- Footer hides "extra" text below 450px
- Landscape mode: Static positioning for header/footer

### About Page Implementation

[src/pages/AboutPage.jsx](src/pages/AboutPage.jsx):
- Fetches `/ABOUT.md` from public folder on mount (concise version of project info)
- Uses regex to strip H1 heading: `text.replace(/^#\s+.+\n/, '')`
- Renders markdown with react-markdown library
- Custom component overrides for h3 and p styling (padding, text-justify)
- Falls back to simple text on fetch error

**Note:** The full [README.md](README.md) contains comprehensive documentation and is displayed on GitHub, while [public/ABOUT.md](public/ABOUT.md) is a condensed version optimized for the About page.

## Key Constraints

- **No TypeScript** - Project uses JavaScript only
- **GitHub Pages compatible** - All paths configured for `/Password_Generator/` base
- **Web Crypto API required** - Password generation relies on `crypto.getRandomValues()`
- **Minimum 2 chars per type** - Enforced in passwordUtils regardless of total length
- **React 18+ patterns** - Uses hooks, functional components, no class components

## Common Tasks

### Adding a new component
1. Create `.jsx` file in appropriate folder under `src/components/`
2. Use functional component with hooks
3. Import and use in parent component

### Modifying password generation logic
1. Update pure functions in [src/utils/passwordUtils.js](src/utils/passwordUtils.js)
2. Adjust hook logic in [src/components/PasswordGenerator/usePasswordGenerator.js](src/components/PasswordGenerator/usePasswordGenerator.js) if state changes needed

### Changing colors
1. Update theme in [tailwind.config.js](tailwind.config.js)
2. Tailwind will automatically recompile classes

### Testing locally
```bash
npm run dev      # Development server with HMR
npm run build    # Test production build
npm run preview  # Preview built site
```

### Deploying
```bash
npm run deploy   # Builds and pushes to gh-pages branch
```

## Notes

- The old vanilla HTML/CSS/JS files are backed up as `*.old.html`
- Original JavaScript logic preserved in `resources/javascript/` (not deleted for reference)
- All password generation security features maintained from original implementation
