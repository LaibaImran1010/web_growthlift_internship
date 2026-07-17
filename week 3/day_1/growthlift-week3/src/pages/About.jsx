import React from 'react';

function About() {
  const skills = [
    "HTML5 & CSS3", 
    "JavaScript (ES6+)", 
    "React.js", 
    "Vite", 
    "Tailwind CSS", 
    "Git & GitHub"
  ];

  return (
    <div className="py-4 max-w-3xl mx-auto">
      {/* Header Profile Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent mb-3">
          About Me
        </h2>
        <p className="text-lg font-medium text-sky-400 mb-4">
          Frontend Developer & Student at Superior University
        </p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          I am a passionate developer focused on building fast, responsive, and visually clean web interfaces. I enjoy transforming ideas into structured, high-performance code using modern frontend ecosystems.
        </p>
      </div>

      {/* Core Skills Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-950 pb-2">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="text-xs font-medium text-slate-300 bg-slate-950 border border-slate-900 px-3 py-1.5 rounded-lg shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Professional Track Section */}
      <div>
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-950 pb-2">
          Experience Track
        </h3>
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 shadow-md">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
            <h4 className="text-base font-bold text-slate-200">
              Web Development Intern
            </h4>
            <span className="text-xs font-semibold text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/30 w-fit">
              GrowthLift Digital
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Actively participating in practical training workflow modules covering clean web structure, user interaction design, responsive styling, and modular Single Page Applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;