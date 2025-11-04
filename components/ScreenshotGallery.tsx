"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ScreenshotGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalImages = 11;

  const images = Array.from(
    { length: totalImages },
    (_, i) => `/img${i + 1}.webp`
  );

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
            <div className="flex items-center justify-center pt-4 pb-8">
              {/* Previous Images (blurred) */}
              <div className="hidden md:block relative w-48 h-96 opacity-40 blur-sm transition-all duration-500">
                <Image
                  src={images[(currentIndex - 1 + totalImages) % totalImages]}
                  alt="Previous screenshot"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Current Image */}
              <div className="relative w-64 sm:w-80 md:w-96 h-[500px] md:h-[600px] mx-4 transition-all duration-500 animate-fade-in">
                <Image
                  src={images[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Next Images (blurred) */}
              <div className="hidden md:block relative w-48 h-96 opacity-40 blur-sm transition-all duration-500">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
