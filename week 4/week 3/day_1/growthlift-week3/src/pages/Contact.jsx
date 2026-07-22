function Contact() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent mb-3">
        Contact Me
      </h2>
      <p className="text-slate-400 text-sm mb-8 max-w-sm">
        Feel free to connect with me across my professional profiles and platforms.
      </p>

      {/* Profile Links Container */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-200 font-medium transition-all duration-300 shadow-md shadow-black/40 text-center"
        >
          Laiba Imran | LinkedIn
        </a>

        <a 
          href="https://github.com/LaibaImran1010" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-200 font-medium transition-all duration-300 shadow-md shadow-black/40 text-center"
        >
          GitHub
        </a>

        <a 
          href="mailto:laibaimran1010@gmail.com" 
          className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-200 font-medium transition-all duration-300 shadow-md shadow-black/40 text-center"
        >
          laibaimran1010@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;