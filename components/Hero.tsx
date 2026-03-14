"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 17;

  const images = [
    "/1.lock-left.png",
    "/2.landing-left.png",
    "/3.setup-left.png",
    "/4.pairing-left.png",
    "/5.keygen-left.png",
    "/6.home-left.png",
    "/7.currencies-left.png",
    "/8.receive-left.png",
    "/9.send-left.png",
    "/10.sending-left.png",
    "/11.keysign-left.png",
    "/12.txdetails-left.png",
    "/13.psbt-import.png",
    "/14.psbt-modal-left.png",
    "/15.psbt-view-left.png",
    "/16.psbt-signed-left.png",
    "/17.settings-left.png",
  ];

  const storeButtons = [
    {
      href: "https://play.google.com/store/apps/details?id=com.boldwallet",
      icon: "/playstore.svg",
      label: "Android",
      useEmoji: false,
    },
    {
      href: "https://apps.apple.com/us/app/bold-bitcoin-wallet/id6748949478",
      icon: "/appstore.svg",
      label: "iOS & Mac",
      useEmoji: false,
    },
    {
      href: "https://f-droid.org/packages/com.boldwallet",
      icon: "/fdroid.ico",
      label: "F-Droid",
      useEmoji: false,
    },
    {
      href: "https://zapstore.dev/apps/naddr1qvzqqqr7pvpzq7xwd748yfjrsu5yuerm56fcn9tntmyv04w95etn0e23xrczvvraqq8xxmmd9e3x7mrywaskcmr9ws90nrd9",
      icon: "",
      label: "Zapstore",
      useEmoji: true,
      emoji: "⚡",
    },
    {
      href: "https://chromewebstore.google.com/detail/bold-wallet/dpgigdojkmhknnoedgbkfdeilmlbdecf",
      icon: "/chrome-web-store.svg",
      label: "Chrome",
      useEmoji: false,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 sm:-mt-12">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout: text left, carousel right on large screens */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold mb-6 animate-slide-up leading-tight">
                Seedless, <br /> Hardware-Free, <br />
                <span className="text-accent">Limitless</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                No seeds, no hardware wallets, no dependencies. Pure, resilient
                Bitcoin security, powered by advanced multi-device MPC and Nostr-backed connectivity that keeps your keys safe and co-signers coordinated across 2–3 devices, even across borders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {storeButtons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 cursor-pointer w-38"
                  >
                    {button.useEmoji ? (
                      <span className="text-xl">{button.emoji}</span>
                    ) : (
                      <div className="relative w-6 h-6">
                        <Image
                          src={button.icon}
                          alt={button.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="font-medium">{button.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Carousel */}
            <div className="flex-1 w-full lg:max-w-lg xl:max-w-xl relative">
              {/* Gradient background for carousel */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fe] via-10% via-gray-200 via-30% via-gray-400 via-50% via-gray-600 via-70% via-gray-800 via-90% to-primary rounded-2xl -z-10"></div>
              <div className="relative overflow-visible rounded-2xl p-4">
                <div className="flex items-center justify-center gap-4">
                  {/* Previous Image (blurred) */}
                  <div className="hidden lg:block relative w-32 xl:w-40 h-64 xl:h-80 opacity-40 blur-sm transition-all duration-500">
                    <Image
                      src={images[(currentIndex - 1 + totalImages) % totalImages]}
                      alt="Previous screenshot"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Current Image with crossfade */}
                  <div className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-sm h-[500px] md:h-[600px] lg:h-[500px] xl:h-[600px]">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={currentIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.01 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <Image
                          src={images[currentIndex]}
                          alt={`Screenshot ${currentIndex + 1}`}
                          fill
                          className="object-contain drop-shadow-2xl"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Next Image (blurred) */}
                  <div className="hidden lg:block relative w-32 xl:w-40 h-64 xl:h-80 opacity-40 blur-sm transition-all duration-500">
                    <Image
                      src={images[(currentIndex + 1) % totalImages]}
                      alt="Next screenshot"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
                aria-label="Previous"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
                aria-label="Next"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cool Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {/* Glassy gradient wave separator */}
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="separatorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="50%" stopColor="rgba(200, 200, 200, 0.2)" />
                <stop offset="100%" stopColor="rgba(150, 150, 150, 0.15)" />
              </linearGradient>
            </defs>
            <path
              d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 35C840 40 960 50 1080 55C1200 60 1320 60 1380 60L1440 60L1440 120L1380 120C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120L0 120Z"
              fill="url(#separatorGradient)"
            />
            <path
              d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 55C840 60 960 70 1080 75C1200 80 1320 80 1380 80L1440 80L1440 120L1380 120C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120L0 120Z"
              fill="url(#separatorGradient)"
              fillOpacity="0.4"
            />
          </svg>
          {/* Subtle transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary"></div>
        </div>
      </div>
    </section>
  );
}
