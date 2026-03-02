"use client";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700">
      <div className="container-custom flex justify-between items-center py-4">
        <h1 className="text-lg font-semibold text-white">Najmul Hasan</h1>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
