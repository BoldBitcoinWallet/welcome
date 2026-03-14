'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ChromeExtension() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const extensionFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Watch-Only Companion",
      description: "Track balances, addresses, and transaction activity directly from your browser. Always in sync.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
        </svg>
      ),
      title: "QR-Based Signing",
      description: "Initiate sends from your desktop, then scan & co-sign securely with your Bold mobile app.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Zero Keys Stored",
      description: "No private keys or key shares in the extension. Your secrets stay on your mobile devices.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      title: "HD Multi-Address",
      description: "Native SegWit, SegWit Compatible, and Legacy address types with full HD discovery.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="chrome-extension"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-primary via-gray-900 to-gray-900 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#4285F4]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-gray-300">New</span>
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            <span className="text-sm text-gray-400">Desktop Companion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Bold on Your <span className="text-[#4285F4]">Browser</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Extend your Bold wallet to the desktop with our Chrome extension.
            Monitor your Bitcoin from anywhere — send transactions with QR-based mobile co-signing.
          </p>
        </motion.div>

        {/* Main content: two-column layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#4285F4]/20 via-accent/10 to-transparent rounded-3xl blur-2xl"></div>

              {/* Browser chrome frame */}
              <div className="relative bg-gray-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/90 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-gray-700/60 rounded-lg px-3 py-1.5 text-xs text-gray-400 text-center truncate">
                      chrome-extension://bold-wallet
                    </div>
                  </div>
                </div>

                {/* Extension popup mockup */}
                <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                  {/* Logo + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-white rounded-lg p-1 shadow-md">
                      <Image src="/ic_launcher.png" alt="Bold" width={28} height={28} />
                    </div>
                    <span className="text-white font-bold text-lg">Bold Wallet</span>
                    <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">Paired</span>
                  </div>

                  {/* Balance card */}
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl p-5 mb-4 border border-white/5">
                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Total Balance</div>
                    <div className="text-white text-2xl font-bold font-mono">0.04821350 BTC</div>
                    <div className="text-gray-400 text-sm mt-1">~ $4,821.35</div>
                  </div>

                  {/* Address type selector */}
                  <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-xs font-semibold">Native SegWit</span>
                    </div>
                    <span className="text-gray-500 text-xs font-mono">bc1q...x7f4</span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-secondary/80 text-white text-center py-2.5 rounded-lg text-sm font-semibold">
                      Send
                    </div>
                    <div className="flex-1 bg-white/10 text-white text-center py-2.5 rounded-lg text-sm font-semibold border border-white/10">
                      Receive
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature cards + CTA */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {extensionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group bg-white/5 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-xl p-5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#4285F4]/15 rounded-lg flex items-center justify-center text-[#4285F4] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-1.5">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://chromewebstore.google.com/detail/bold-wallet/dpgigdojkmhknnoedgbkfdeilmlbdecf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-7 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(66,133,244,0.3)] transition-all duration-300 hover:scale-105"
              >
                <Image
                  src="/chrome-web-store.svg"
                  alt="Chrome Web Store"
                  width={24}
                  height={24}
                />
                <span>Add to Chrome</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <span className="text-gray-500 text-sm">Free &middot; Open Source &middot; No keys stored</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
