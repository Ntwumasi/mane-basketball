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

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red/8 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA */}
          <div>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="font-display text-sm font-bold uppercase tracking-[0.3em] text-red"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-white"
            >
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">
                Level Up?
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="mt-6 text-lg text-light-gray leading-relaxed max-w-lg"
            >
              Whether you&apos;re signing up for your first session or looking to
              lock in a training plan, we&apos;re here to help. Reach out and
              let&apos;s get you on the court.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="mt-10 space-y-6"
            >
              <a
                href="mailto:manetrainingcenter@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center text-red group-hover:bg-red/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-display uppercase tracking-wider text-gray">
                    Email
                  </div>
                  <div className="text-white group-hover:text-red transition-colors">
                    manetrainingcenter@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:4053082880"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center text-red group-hover:bg-red/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-display uppercase tracking-wider text-gray">
                    Phone
                  </div>
                  <div className="text-white group-hover:text-red transition-colors">
                    (405) 308-2880
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="bg-charcoal/60 border border-white/[0.06] rounded-2xl p-8 sm:p-10"
          >
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-dark-gray/60 border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-red/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-gray mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-dark-gray/60 border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-red/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-dark-gray/60 border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-red/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray mb-2">
                  Interested In
                </label>
                <select className="w-full bg-dark-gray/60 border border-white/[0.06] rounded-xl px-4 py-3 text-gray focus:outline-none focus:border-red/40 transition-colors cursor-pointer">
                  <option value="">Select a program</option>
                  <option value="youth">Youth Development</option>
                  <option value="competitive">Competitive Training</option>
                  <option value="adult">Adult Training</option>
                  <option value="private">Private Sessions</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-dark-gray/60 border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-red/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full font-display text-sm font-bold uppercase tracking-wider bg-red hover:bg-red-dark text-white py-4 rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-red/25"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
