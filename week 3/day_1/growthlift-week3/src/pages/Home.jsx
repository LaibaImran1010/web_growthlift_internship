import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="py-12 flex flex-col items-center text-center">
      {/* Small Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-900/40 text-xs font-semibold text-sky-400 mb-6 tracking-wide">
        <span>Web Development Portfolio</span>
      </div>

      {/* Main Big Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent max-w-2xl leading-tight mb-4">
        Hi, I'm Laiba Imran
      </h1>

      {/* Subtitle description */}
      <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
        Welcome to my internship workflow platform. I build clean, modern, and highly responsive web applications using the latest frontend development stacks.
      </p>

      {/* Direct Call to Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          to="/projects" 
          className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-sky-500/20 text-sm"
        >
          View My Projects
        </Link>
        <Link 
          to="/contact" 
          className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium transition-all duration-300 text-sm"
        >
          Let's Connect
        </Link>
      </div>
    </div>
  );
}

export default Home;