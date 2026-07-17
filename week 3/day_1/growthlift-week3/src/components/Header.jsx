import { NavLink } from "react-router-dom";

function Header() {
  const linkStyles = ({ isActive }) => 
    isActive 
      ? "active-nav-link text-sky-400 font-semibold tracking-wide transition-all duration-300" 
      : "text-slate-400 hover:text-slate-200 transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_#0284c7]" />
        <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
          GrowthLift
        </span>
      </div>
      
      <nav className="flex gap-6 text-sm font-medium tracking-wide">
        <NavLink to="/" className={linkStyles}>Home</NavLink>
        <NavLink to="/about" className={linkStyles}>About</NavLink>
        <NavLink to="/projects" className={linkStyles}>Projects</NavLink>
        <NavLink to="/contact" className={linkStyles}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;