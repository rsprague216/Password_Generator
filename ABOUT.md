# About This Project

A secure, customizable password generator built with modern web technologies. Generate cryptographically random passwords with full control over length and character types.

## The Journey

This project started as a **vanilla HTML/CSS/JavaScript application** - no frameworks, no build tools, just pure client-side code. It was a learning project to understand web fundamentals, DOM manipulation, and cryptographic security.

The app has since evolved into a **modern React application** using Vite and TailwindCSS, demonstrating the transition from vanilla JavaScript to component-based architecture while preserving all the original security features.

## Key Features

- **Cryptographically Secure** - Uses Web Crypto API for true randomness, not `Math.random()`
- **Fully Customizable** - Control length (8-64 chars) and character types
- **Smart Generation** - Enforces minimum 2 characters per selected type
- **Avoid Ambiguous** - Option to exclude confusing characters (I, l, 1, 0, O)
- **One-Click Copy** - Instantly copy passwords to clipboard
- **Fully Client-Side** - No server involved, passwords never leave your device
- **Responsive Design** - Works on desktop, tablet, and mobile

## Technology Stack

**Current Implementation:**
- React 18 with hooks and functional components
- Vite 6 for fast development and building
- TailwindCSS 3 for utility-first styling
- React Router 7 for navigation
- Deployed on GitHub Pages

**Original Implementation:**
- Pure HTML5, CSS3, and vanilla JavaScript
- No build process or dependencies
- Event-driven updates

## Security First

Password security is the top priority:

1. **Web Crypto API** - All randomness comes from `crypto.getRandomValues()`, the browser's cryptographically secure random number generator (CSPRNG)

2. **Character Distribution** - Enforces at least 2 characters from each selected type to prevent weak passwords

3. **Fisher-Yates Shuffle** - Eliminates positional patterns by shuffling with crypto-secure randomness

4. **No Server Needed** - Everything runs in your browser - passwords are never sent anywhere

## How It Works

1. Select your character types (uppercase, lowercase, numbers, symbols)
2. Choose your desired password length (8-64 characters)
3. Toggle "Avoid Ambiguous Characters" if desired
4. Click Generate - the app creates a secure password using Web Crypto API
5. Click Copy to add it to your clipboard

Behind the scenes, the generator:
- Creates character pools based on your selections
- Generates minimum required characters from each pool
- Fills remaining length from the combined pool
- Shuffles everything using the Fisher-Yates algorithm
- All random operations use cryptographically secure methods

## Open Source

This project is open source and available on [GitHub](https://github.com/rsprague216/Password_Generator). Feel free to explore the code, learn from it, or contribute!

For detailed documentation, architecture diagrams, and development guides, check out the [full README](https://github.com/rsprague216/Password_Generator#readme) on GitHub.

---

**Developer:** Ryan Sprague
**Tech Stack:** React • TailwindCSS • Vite • Web Crypto API
**Year:** 2025
