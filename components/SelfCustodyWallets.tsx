"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import yaml from "js-yaml";

interface Wallet {
  name: string;
  url: string;
  description: string;
  logoUrl?: string;
  fallback: string;
  psbtInteroperable: boolean;
  platforms?: string[]; // e.g., ["Desktop", "Mobile", "Hardware"]
  tintColor?: string;
}

export default function SelfCustodyWallets() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://raw.githubusercontent.com/BoldBitcoinWallet/mempool-space-hosts/refs/heads/main/WALLETS.yaml"
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const yamlText = await response.text();
        const parsed = yaml.load(yamlText) as Wallet[];

        // Convert Unicode escape sequences to actual emojis and fix logo paths
        const processed = parsed.map((wallet) => {
          // Fix logo paths based on actual downloaded files
          let logoPath = wallet.logoUrl || "";
          if (wallet.name === "Coldcard" && logoPath.includes(".png")) {
            logoPath = "/logo-coldcard.svg";
          }
          if (wallet.name === "Wasabi Wallet" && logoPath.includes(".png")) {
            logoPath = "/logo-wasabi.svg";
          }
          if (wallet.name === "Blue Wallet" || wallet.name === "BlueWallet") {
            logoPath = "/logo-bluewallet.webp";
          }

          return {
            ...wallet,
            logoUrl: logoPath,
            fallback: wallet.fallback
              .replace(/\\U0001FAB6/g, "🪶")
              .replace(/\\U0001F47B/g, "👻")
              .replace(/\\U0001F499/g, "💙")
              .replace(/\\U0001F9C5/g, "🧅"),
            tintColor: wallet.tintColor || "",
            psbtInteroperable: wallet.psbtInteroperable ?? true,
            platforms: wallet.platforms || [],
          };
        });

        setWallets(processed);
      } catch (err) {
        console.error("Error loading wallets:", err);
        setError(err instanceof Error ? err.message : "Failed to load wallets");
        setWallets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="wallets"
      className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Self-Custody Ecosystem
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            PSBT-Compatible <span className="text-accent">Wallets</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Self-custody Bitcoin wallets that support PSBT for interoperable multisig workflows
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-400 text-sm">Loading wallets...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-red-400 text-sm">
              Error loading wallets: {error}
            </div>
          </div>
        ) : wallets.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-400 text-sm">No wallets found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto">
            {wallets.map((wallet, index) => {
            const WalletLogo = () => {
              const [imageError, setImageError] = useState(false);

              if (!wallet.logoUrl || imageError) {
                return (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl">{wallet.fallback}</span>
                  </div>
                );
              }

              const hasTint = wallet.tintColor && wallet.tintColor.trim() !== "";

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
                        backgroundColor: wallet.tintColor,
                        maskImage: `url(${wallet.logoUrl})`,
                        WebkitMaskImage: `url(${wallet.logoUrl})`,
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
                      src={wallet.logoUrl}
                      alt={`${wallet.name} logo`}
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
                key={wallet.name}
                href={wallet.url}
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

                {/* Wallet Card */}
                <div className="relative bg-gradient-to-br from-white/5 via-white/3 to-white/[0.02] backdrop-blur-md border border-white/10 group-hover:border-accent/40 rounded-2xl p-5 sm:p-6 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:shadow-xl group-hover:shadow-accent/5">
                  {/* Logo/Icon Container */}
                  <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <WalletLogo />
                    </div>
                  </div>

                  {/* Name and PSBT Badge */}
                  <div className="w-full mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 leading-tight min-h-[2.5rem] flex items-center justify-center">
                      {wallet.name}
                    </h3>
                    {wallet.psbtInteroperable && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/20 border border-accent/40 rounded-full mb-2">
                        <svg
                          className="w-3 h-3 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs font-medium text-accent">
                          PSBT Compatible
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Platforms */}
                  {wallet.platforms && wallet.platforms.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                      {wallet.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow min-h-[2.5rem]">
                    {wallet.description}
                  </p>

                  {/* Visit Link */}
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

