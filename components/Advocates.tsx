"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import yaml from "js-yaml";

interface Advocate {
  name: string;
  url: string;
  description: string;
  logoUrl: string;
  fallback: string;
  tintColor: string;
}

export default function Advocates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://raw.githubusercontent.com/BoldBitcoinWallet/mempool-space-hosts/refs/heads/main/SELFCUSTODY.yaml"
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const yamlText = await response.text();
        const parsed = yaml.load(yamlText) as Advocate[];

        // Convert Unicode escape sequences to actual emojis
        const processed = parsed.map((advocate) => ({
          ...advocate,
          fallback: advocate.fallback
            .replace(/\\U0001F511/g, "🔑")
            .replace(/\\U0001F4D8/g, "📘")
            .replace(/\\U0001F393/g, "🎓")
            .replace(/\\U0001F6E1️/g, "🛡️")
            .replace(/\\U0001F4F0/g, "📰"),
          tintColor: advocate.tintColor || "",
        }));

        setAdvocates(processed);
      } catch (err) {
        console.error("Error loading advocates:", err);
        setError(err instanceof Error ? err.message : "Failed to load advocates");
        // Fallback to empty array or default advocates if needed
        setAdvocates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvocates();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="advocates"
      className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Bitcoin Ecosystem
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Self-Custody <span className="text-accent">Advocates</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Organizations in the Bitcoin ecosystem that share our commitment to self-custody and
            financial sovereignty
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-400 text-sm">Loading advocates...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-red-400 text-sm">
              Error loading advocates: {error}
            </div>
          </div>
        ) : advocates.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-400 text-sm">No advocates found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto">
            {advocates.map((advocate, index) => {
            const AdvocateLogo = () => {
              const [imageError, setImageError] = useState(false);
              const hasTint =
                advocate.tintColor && advocate.tintColor.trim() !== "";

              if (!advocate.logoUrl || imageError) {
                return (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl">{advocate.fallback}</span>
                  </div>
                );
              }

              return (
                <div className="w-full h-full flex items-center justify-center relative">
                  {hasTint ? (
                    <div
                      className="relative"
                      style={{
                        width: "120px",
                        height: "60px",
                        maxWidth: "120px",
                        maxHeight: "60px",
                        backgroundColor: advocate.tintColor,
                        maskImage: `url(${advocate.logoUrl})`,
                        WebkitMaskImage: `url(${advocate.logoUrl})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                  ) : (
                    <Image
                      src={advocate.logoUrl}
                      alt={`${advocate.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain max-w-[120px] max-h-[60px] w-auto h-auto"
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>
              );
            };

            return (
              <motion.a
                key={advocate.name}
                href={advocate.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-full"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Advocate Card */}
                <div className="relative bg-gradient-to-br from-white/5 via-white/3 to-white/[0.02] backdrop-blur-md border border-white/10 group-hover:border-accent/40 rounded-2xl p-5 sm:p-6 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:shadow-xl group-hover:shadow-accent/5">
                  {/* Logo/Icon Container - Fixed height for consistency */}
                  <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <AdvocateLogo />
                    </div>
                  </div>

                  {/* Name - Fixed height */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {advocate.name}
                  </h3>

                  {/* Description - Flexible height */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow min-h-[2.5rem]">
                    {advocate.description}
                  </p>

                  {/* Visit Link - Fixed at bottom */}
                  <div className="inline-flex items-center text-accent text-sm font-medium opacity-60 group-hover:opacity-100 transition-all duration-300 mt-auto">
                    <span>Visit</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                  </div>
                </div>
              </motion.a>
            );
          })}
          </div>
        )}
      </div>
    </section>
  );
}

