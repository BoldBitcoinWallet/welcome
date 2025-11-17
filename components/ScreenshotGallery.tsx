"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ScreenshotGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalImages = 13;

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
    "/13.settings-left.png",
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <section
      ref={sectionRef}
      id="screenshot-gallery"
      className="pt-0 pb-16 sm:pb-24 bg-gradient-to-b from-[#f9f9fe] via-10% via-gray-200 via-30% via-gray-400 via-50% via-gray-600 via-70% via-gray-800 via-90% to-primary"
      style={{ marginTop: '-1px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Carousel */}
          <div className="relative overflow-visible rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-6 pt-4 pb-8 lg:flex-row lg:gap-8">
              {/* Previous Image (blurred) */}
              <div className="relative w-40 h-64 sm:w-48 sm:h-80 lg:h-96 opacity-40 blur-sm transition-all duration-500">
                <Image
                  src={images[(currentIndex - 1 + totalImages) % totalImages]}
                  alt="Previous screenshot"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Current Image with crossfade */}
              <div className="relative w-64 sm:w-80 md:w-96 h-[500px] md:h-[600px] mx-4">
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
              <div className="relative w-40 h-64 sm:w-48 sm:h-80 lg:h-96 opacity-40 blur-sm transition-all duration-500">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
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
          <div className="flex justify-center space-x-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#34495e] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
