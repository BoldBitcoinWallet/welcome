"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Community() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      href: "https://x.com/boldBTCWallet",
      icon: "/x.227b8a31.svg",
      label: "X (Twitter)",
      color: "hover:bg-black",
      gradient: "from-gray-800/50 to-black/50",
      description: "Follow us for updates",
      useEmoji: false,
    },
    {
      href: "https://discord.gg/p4ectmVtJ2",
      icon: "/discord.48c9fec2.svg",
      label: "Discord",
      color: "hover:bg-[#5865F2]",
      gradient: "from-[#5865F2]/30 to-[#5865F2]/10",
      description: "Join the conversation",
      useEmoji: false,
    },
    {
      href: "https://github.com/BoldBitcoinWallet/",
      icon: "/github.aba1dc4e.svg",
      label: "GitHub",
      color: "hover:bg-gray-800",
      gradient: "from-gray-700/50 to-gray-900/50",
      description: "Contribute to our code",
      useEmoji: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="community"
      className="relative py-16 sm:py-24 bg-gray-900 overflow-hidden"
      style={{ marginTop: "-1px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our <span className="text-accent">Community</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect, contribute, and stay updated with the Bold Bitcoin Wallet
            ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
              }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${link.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 group-hover:border-white/30 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center transition-colors duration-300 z-10 ${
                    link.label === "X (Twitter)" || link.label === "GitHub"
                      ? "bg-gray-500/70 group-hover:bg-gray-400/70"
                      : "bg-gray-700/50 group-hover:bg-gray-600/50"
                  }`}
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={link.icon}
                      alt={link.label}
                      fill
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 relative z-10">
                  {link.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 relative z-10">
                  {link.description}
                </p>

                {/* CTA Arrow */}
                <motion.div
                  className="inline-flex items-center text-accent text-sm font-medium relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Connect
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-b-2xl z-0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-400 text-sm">
            Have questions? Join our Discord community for support and
            discussions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
