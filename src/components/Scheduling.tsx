"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Scheduling() {
  return (
    <section id="schedule" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red/8 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="font-display text-sm font-bold uppercase tracking-[0.3em] text-red"
          >
            Book a Session
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-white"
          >
            Schedule{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">
              Your Training
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="mt-4 text-lg text-light-gray max-w-2xl mx-auto"
          >
            Pick a time that works for you and lock in your next session. Book
            online in seconds.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-gray/60 border border-white/[0.06] rounded-2xl overflow-hidden">
            <iframe
              src="https://manetrainingcenter.as.me/"
              title="Schedule Appointment"
              width="100%"
              height="800"
              className="border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
