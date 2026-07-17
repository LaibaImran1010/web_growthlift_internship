import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-black text-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-5xl w-full mx-auto p-4 md:p-8">
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-2xl shadow-blue-950/20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer className="text-center p-6 text-xs text-slate-600 border-t border-slate-900/60 tracking-wider">
        © 2026 GROWTHLIFT DIGITAL WORKFLOW • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

export default App;