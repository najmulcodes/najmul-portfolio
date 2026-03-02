"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="/profile.jpg"
          alt="Najmul Hasan"
          width={170}
          height={170}
          className="rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </motion.div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Najmul Hasan
      </h1>

      <h2 className="text-lg md:text-xl text-blue-400 mb-6">
        Frontend Developer | Full Stack Web Developer
      </h2>

      <p className="max-w-2xl text-gray-400 leading-relaxed mb-8">
        Business graduate transitioning into full-stack development. I build
        structured, scalable and responsive web applications using modern
        JavaScript technologies.
      </p>
    </section>
  );
}
