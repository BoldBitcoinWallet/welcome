'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Terms() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const termsSections = [
    {
      icon: "🔐",
      title: "Privacy First",
      points: [
        "No personal data is collected or shared.",
        "All crypto actions happen locally encrypted between your devices.",
        "Public Bitcoin APIs are accessed anonymously.",
      ],
      gradient: "from-secondary/20 to-secondary/5",
      iconBg: "bg-secondary/10",
    },
    {
      icon: "⚠️",
      title: "Your Responsibility",
      points: [
        "Secure your devices against malware and threats.",
        "Keep backup shares safe and private.",
        "Understand: Lost keys cannot be recovered.",
      ],
      gradient: "from-accent/20 to-accent/5",
      iconBg: "bg-accent/10",
    },
    {
      icon: "🔒",
      title: "Self Custody Grade",
      points: [
        "Bold is public and open-source!",
        "Provided \"as is\"—no guarantees of error-free use.",
        "Developers are not liable for loss or unauthorized access.",
      ],
      gradient: "from-primary/30 to-primary/5",
      iconBg: "bg-primary/10",
    },
    {
      icon: "✅",
      title: "By Using Bold, You Agree:",
      points: [
        "To use the app lawfully and responsibly.",
        "To accept the risks of managing your Bitcoin independently.",
      ],
      gradient: "from-secondary/20 to-secondary/5",
      iconBg: "bg-secondary/10",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="terms"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Terms & <span className="text-accent">Agreements</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Your security and understanding are paramount. Please review the following important information.
          </p>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-4"
          >
            <motion.a
              href="https://github.com/BoldBitcoinWallet/Terms/blob/main/Terms%20Of%20Service.md"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-white px-6 py-3 rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Terms of Service</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>

            <motion.a
              href="https://github.com/BoldBitcoinWallet/Terms/blob/main/Privacy%20Policy.md"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 bg-primary/20 hover:bg-primary/30 text-white px-6 py-3 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Privacy Policy</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Terms Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card */}
              <div className={`relative bg-gradient-to-br ${section.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col`}>
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${section.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <span className="text-3xl">{section.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 text-center group-hover:text-accent transition-colors duration-300">
                  {section.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2.5 flex-grow">
                  {section.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                      className="relative pl-3 text-gray-300 group/item"
                    >
                      <motion.span
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 to-accent/20 rounded-full"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + idx * 0.05 }}
                        whileHover={{ scaleX: 2, backgroundColor: "rgba(241, 196, 15, 0.8)" }}
                      ></motion.span>
                      <span className="text-sm leading-relaxed block group-hover/item:text-white transition-colors duration-200">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Accent Line */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-full w-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-xl px-6 py-3">
            <span className="text-2xl">⚡</span>
            <p className="text-gray-300 text-sm">
              <span className="font-bold text-white">Important:</span> Bold is self-custody. You are in complete control.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
