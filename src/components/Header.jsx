import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-16 bg-navy text-mint flex flex-wrap justify-between items-center px-6 z-10 max-[605px]:h-18">
      <Link to="/">
        <h1 className="text-2xl font-bold max-[360px]:text-[8.5vw]" style={{ textShadow: '3px 3px 0 #364156' }}>
          Password Generator
        </h1>
      </Link>
      <ul className="flex gap-2">
        <li className="list-none">
          <Link
            to="/about"
            className="px-4 py-3 hover:bg-silver hover:text-slate rounded transition-colors active:shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"
          >
            About the Project
          </Link>
        </li>
        <li className="list-none">
          <a
            href="https://github.com/rsprague216/Password_Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 hover:bg-silver hover:text-slate rounded transition-colors active:shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"
          >
            GitHub
          </a>
        </li>
      </ul>
    </header>
  );
}
