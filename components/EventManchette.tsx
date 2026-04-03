"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventManchette() {
  const announcementEnd = Date.UTC(2026, 4, 25, 23, 59, 59, 999); // May is month index 4
  if (Date.now() > announcementEnd) return null;

  return (
    <section className="sticky top-20 z-40">
      <div className="container relative z-10 mx-auto px-3 py-2 sm:px-6 lg:px-8">
        <motion.a
          href="https://bitcoinireland.eu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Bitcoin Ireland event site"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="mx-auto flex w-fit max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/35 bg-gray-800/95 px-3 py-2 text-xs text-white shadow-sm transition-colors hover:border-accent/70 hover:bg-gray-700/95 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <div className="relative h-8 w-12 shrink-0 overflow-hidden rounded-full border border-white/25 sm:h-9 sm:w-14">
            <Image
              src="/bitcoinireland.webp"
              alt="Bitcoin Ireland"
              fill
              className="object-cover object-left"
              sizes="56px"
            />
          </div>
          <span className="min-w-0 flex flex-col">
            <span className="truncate text-white/95">
              <span className="font-semibold text-accent">
                Bitcoin Ireland 2026
              </span>{" "}
              • May 22-25 • Dublin
            </span>
            <span className="text-[10px] sm:text-xs text-accent/95 font-medium mt-1">
              Join us, get 10% off with code{" "}
              <span className="inline-flex items-center rounded-sm border border-accent/60 bg-accent/20 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-accent">
                BOLDBTC
              </span>
            </span>
          </span>
        </motion.a>
      </div>
    </section>
  );
}
