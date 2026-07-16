'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

/**
 * Verified Payments — BoldWallet × Branta partner exposure on boldbitcoinwallet.com.
 * Reciprocal link expectation: Branta lists BoldWallet on branta.pro integrations.
 */
export default function VerifiedPayments() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      id="verified-payments"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Verified Payments
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See who you&apos;re <span className="text-accent">paying</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
            BoldWallet integrates{' '}
            <a
              href="https://branta.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Branta
            </a>{' '}
            so Branta payment QRs can show a verified merchant name and logo
            before you send. Privacy-first: only Branta ZK QRs resolve — plain
            addresses are never looked up.
          </p>
        </motion.div>

        <motion.a
          href="https://branta.pro"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="group block max-w-xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/5 via-white/3 to-white/[0.02] backdrop-blur-md border border-white/10 group-hover:border-accent/40 rounded-2xl p-6 sm:p-8 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-accent/5">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex-shrink-0 w-40 h-12 relative flex items-center justify-center">
                <Image
                  src="/logo-branta-white.svg"
                  alt="Branta"
                  width={160}
                  height={48}
                  className="object-contain max-h-12 w-auto"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  Branta
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Merchant verification on send — see the counterparty before
                  you broadcast.
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium">
                  Learn more at branta.pro
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
