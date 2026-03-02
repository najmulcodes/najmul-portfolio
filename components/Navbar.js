"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#0f172a]/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-white">Najmul Hasan</h1>
        <div className="hidden md:flex gap-8 text-gray-400">
          <Link href="#about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="#skills" className="hover:text-blue-400">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
