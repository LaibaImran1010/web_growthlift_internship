import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = () => {
      const data = [
        {
          id: 1,
          title: "GrowthLift Week 1 Assignment",
          description: "Built semantic structures, responsive layouts, and core interface styling using HTML and CSS.",
          tag: "HTML + CSS"
        },
        {
          id: 2,
          title: "GrowthLift Week 2 Assignment",
          description: "Implemented dynamic functionality, interactive UI elements, and state logic using native JavaScript.",
          tag: "JavaScript"
        },
        {
          id: 3,
          title: "GrowthLift Week 3 SPA",
          description: "Created a fully styled dark-themed Single Page Application using React Router and Tailwind CSS.",
          tag: "Vite + Tailwind"
        }
      ];
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="py-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent mb-3">
          My Projects
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          A showcase of the tasks and applications developed during my internship workflow.
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-950 border border-slate-900 hover:border-sky-500/40 transition-all duration-300 shadow-lg shadow-black/50 group"
          >
            <div>
              {/* Tag */}
              <span className="inline-block text-xs font-semibold tracking-wider text-sky-400 bg-sky-950/50 px-2.5 py-1 rounded-md border border-sky-900/50 mb-4">
                {project.tag}
              </span>
              
              {/* Card Title */}
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors duration-200 mb-2">
                {project.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Action Link Button */}
            <div className="pt-2">
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300 flex items-center gap-1 cursor-pointer transition-colors">
                View Details →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;