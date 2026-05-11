"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Youth Development",
    age: "Ages 6-12",
    description:
      "Build a strong foundation with engaging, game-based drills that teach dribbling, passing, shooting, and teamwork in a fun, supportive setting with adjustable hoops.",
    features: [
      "Fundamental skill building",
      "Game-based learning drills",
      "Adjustable equipment",
      "Teamwork & sportsmanship",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Competitive Training",
    age: "Ages 13-18",
    description:
      "Take your game to the next level with performance-focused coaching. Refine technique, develop strategy, and train with intensity for competitive play.",
    features: [
      "Advanced skill refinement",
      "Game strategy & IQ",
      "Position-specific training",
      "Competition prep",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Adult Training",
    age: "Ages 18+",
    description:
      "Whether you're staying sharp or getting back in the game, our adult programs offer expert coaching focused on technique, conditioning, and competitive play.",
    features: [
      "Skill maintenance & growth",
      "Strength & conditioning",
      "Pickup game coordination",
      "Flexible scheduling",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Private Sessions",
    age: "All Ages",
    description:
      "One-on-one coaching tailored to your specific goals. Get personalized skill assessments, custom training plans, and focused attention to accelerate your progress.",
    features: [
      "1-on-1 coaching",
      "Personalized game plan",
      "Skill assessments",
      "Accelerated progress",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Programs() {
  return (
    <section id="programs" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-sm font-bold uppercase tracking-[0.3em] text-red"
          >
            Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-white"
          >
            Train at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">
              Your Level
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-light-gray max-w-2xl mx-auto"
          >
            Age-specific programs designed to meet you where you are and take
            you where you want to go.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-charcoal/60 border border-white/[0.06] rounded-2xl p-8 hover:border-red/30 transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-red/10 flex items-center justify-center text-red mb-6 group-hover:bg-red/20 transition-colors duration-300">
                  {program.icon}
                </div>
                <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange mb-2">
                  {program.age}
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-light-gray leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-light-gray"
                    >
                      <svg
                        className="w-4 h-4 text-red flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
