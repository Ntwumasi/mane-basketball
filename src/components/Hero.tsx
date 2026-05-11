"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient + texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-pure via-charcoal to-red-dark/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red/10 via-transparent to-transparent" />

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-red/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-orange/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/logo.jpg"
            alt="Mane Training Center"
            width={180}
            height={180}
            className="mx-auto mb-8 rounded-2xl shadow-2xl shadow-red/20"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight"
        >
          <span className="text-white">Unleash</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red via-orange to-orange-light">
            Your Game
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl mx-auto font-body text-lg sm:text-xl text-light-gray leading-relaxed"
        >
          Elite basketball training for every age and skill level. From
          fundamentals to advanced technique — build confidence, sharpen
          skills, and dominate the court.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="font-display text-lg font-bold uppercase tracking-wider bg-red hover:bg-red-dark text-white px-10 py-4 rounded-xl transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-red/25"
          >
            Start Training
          </a>
          <a
            href="#programs"
            className="font-display text-lg font-bold uppercase tracking-wider border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-xl transition-all duration-200 cursor-pointer hover:bg-white/5"
          >
            View Programs
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
