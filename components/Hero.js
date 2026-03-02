"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-30 animate-pulse top-10 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px] opacity-30 animate-pulse bottom-10 right-10"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white mb-4"
      >
        Najmul Hasan
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl text-blue-400 mb-6"
      >
        Frontend Developer | Full Stack Web Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-2xl text-gray-400 mb-8"
      >
        Business graduate transitioning into full-stack development. I build
        scalable, structured and responsive web applications using modern
        JavaScript technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-6 flex-wrap justify-center"
      >
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/Shariarx6T9"
          target="_blank"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shaariar"
          target="_blank"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
