"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/5208D648-C78A-4B8A-BA31-C34B909C6A52.JPG", alt: "Full hardwood basketball court with multiple hoops" },
  { src: "/images/CD617098-B6F3-457E-8E35-594EBC45243C.JPG", alt: "Member lounge with seating, lockers, and merchandise display" },
  { src: "/images/98EF1C91-56B6-4104-BAE7-D04B221CE46E.JPG", alt: "Polished court interior with adjustable hoops" },
  { src: "/images/3AAC9BCB-CAFD-419B-A13D-4FFD40CE0FE7.JPG", alt: "Front desk and lounge area at Mane Training Center" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

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
            The Facility
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-white"
          >
            Step Inside{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">
              The Gym
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
            Now open — a full hardwood court, modern equipment, and a space
            built for players to train, compete, and hang out.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.06]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
