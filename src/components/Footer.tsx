"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black-pure border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Mane Training Center"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <span className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Mane
              </span>
              <span className="block font-display text-[9px] font-semibold uppercase tracking-[0.25em] text-red">
                Training Center
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {["About", "Programs", "Pricing", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-display text-sm font-semibold uppercase tracking-wider text-gray hover:text-white transition-colors cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-gray">
            <a
              href="mailto:manetrainingcenter@gmail.com"
              className="hover:text-red transition-colors cursor-pointer"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href="tel:4053082880"
              className="hover:text-red transition-colors cursor-pointer"
              aria-label="Phone"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} Mane Training Center. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
