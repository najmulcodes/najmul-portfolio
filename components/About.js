"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-800 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>

        <p className="mb-6 leading-8">
          I hold a Bachelor of Business Administration in Accounting & Finance.
          My professional background includes data operations and IT support.
        </p>

        <p className="leading-8">
          I transitioned into web development to build scalable systems and
          management platforms using modern full-stack technologies.
        </p>
      </motion.div>
    </section>
  );
}
