"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "All Ages", label: "Youth to Adult" },
  { value: "Expert", label: "Coaching Staff" },
  { value: "Custom", label: "Training Plans" },
  { value: "Modern", label: "Equipment" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
              className="font-display text-sm font-bold uppercase tracking-[0.3em] text-red"
            >
              About Us
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeUp}
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-white"
            >
              Where Every
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">
                Player Grows
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeUp}
              className="mt-6 text-lg text-light-gray leading-relaxed"
            >
              Mane Training Center is a dynamic basketball facility built for
              players of all ages and skill levels. Whether you&apos;re a young
              athlete learning the fundamentals or a seasoned competitor
              perfecting your craft, our space is designed to push you forward.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
              variants={fadeUp}
              className="mt-4 text-lg text-light-gray leading-relaxed"
            >
              With age-specific training zones, personalized skill assessments,
              and experienced coaches, we create an environment where fun and
              high-level growth coexist. Every player gets a tailored path —
              because no two athletes are the same.
            </motion.p>
          </div>

          {/* Right: stat blocks */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i}
                variants={fadeUp}
                className="bg-dark-gray/60 border border-white/[0.06] rounded-2xl p-8 text-center hover:border-red/30 transition-colors duration-300"
              >
                <div className="font-display text-3xl sm:text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-red to-orange">
                  {stat.value}
                </div>
                <div className="mt-2 font-display text-sm font-semibold uppercase tracking-wider text-light-gray">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
