"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Drop-In",
    price: "25",
    period: "per session",
    description: "Perfect for trying us out or fitting in extra work.",
    features: [
      "Single training session",
      "Access to facility",
      "Group drill participation",
      "No commitment",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Monthly",
    price: "149",
    period: "per month",
    description: "Our most popular plan for consistent growth.",
    features: [
      "Unlimited group sessions",
      "Skill assessments",
      "Personalized training plan",
      "Priority booking",
    ],
    cta: "Start Training",
    featured: true,
  },
  {
    name: "Elite",
    price: "299",
    period: "per month",
    description: "For serious athletes ready to go all in.",
    features: [
      "Everything in Monthly",
      "2 private sessions / month",
      "Video analysis",
      "Strength & conditioning",
    ],
    cta: "Go Elite",
    featured: false,
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-sm font-bold uppercase tracking-[0.3em] text-red"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-white"
          >
            Invest in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">
              Your Game
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-light-gray max-w-xl mx-auto"
          >
            Flexible plans that fit your schedule and goals. No long-term
            contracts required.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.featured
                  ? "bg-gradient-to-b from-red/20 to-charcoal border-2 border-red/40 scale-105 shadow-2xl shadow-red/10"
                  : "bg-dark-gray/60 border border-white/[0.06] hover:border-red/20"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] bg-red text-white px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-orange mb-4">
                {tier.name}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-5xl font-black text-white">
                  ${tier.price}
                </span>
                <span className="text-sm text-light-gray">/{tier.period}</span>
              </div>
              <p className="text-sm text-light-gray mb-8">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <svg
                      className="w-5 h-5 text-red flex-shrink-0"
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
              <a
                href="#contact"
                className={`block text-center font-display text-sm font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  tier.featured
                    ? "bg-red hover:bg-red-dark text-white hover:scale-105 hover:shadow-lg hover:shadow-red/25"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-gray italic"
        >
          * Pricing shown is placeholder — contact us for current rates and
          packages.
        </motion.p>
      </div>
    </section>
  );
}
