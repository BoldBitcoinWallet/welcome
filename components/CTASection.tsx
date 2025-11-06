'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const features = [
    { icon: "🔒", text: "No physical keys" },
    { icon: "📱", text: "Device independent" },
    { icon: "🌍", text: "Travel freely" },
    { icon: "🕶️", text: "Stay incognito" },
  ];

  return (
    <>
      {/* Cool Animated Separator */}
      <div className="relative bg-gray-900 overflow-hidden" style={{ height: '2px', marginTop: '-1px' }}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/60 via-secondary/60 via-accent/60 to-transparent h-full"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent h-full blur-sm"></div>
      </div>
      
      <section 
        ref={sectionRef}
        className="relative py-16 sm:py-24 bg-gray-900 text-white overflow-hidden"
      >
        {/* Animated Cloud Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Clouds - Layer 1 (Back) - Deep background - Centered */}
        <motion.div
          className="absolute top-[30%] left-0 w-80 h-40 bg-white/18 rounded-full blur-3xl"
          animate={{ 
            x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 2000],
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            x: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[45%] left-0 w-64 h-32 bg-white/16 rounded-full blur-3xl"
          animate={{ 
            x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 2000],
            y: [0, 8, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            x: { duration: 50, repeat: Infinity, ease: "linear", delay: 5 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 5 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 5 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[60%] left-0 w-72 h-36 bg-white/18 rounded-full blur-3xl"
          animate={{ 
            x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 2000],
            y: [0, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            x: { duration: 45, repeat: Infinity, ease: "linear", delay: 10 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 10 },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 10 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[52%] left-0 w-56 h-28 bg-white/15 rounded-full blur-3xl"
          animate={{ 
            x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 2000],
            y: [0, 10, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            x: { duration: 55, repeat: Infinity, ease: "linear", delay: 12 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 12 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 12 }
          }}
        ></motion.div>

        {/* Clouds - Layer 2 (Mid) - Medium depth - Centered */}
        <motion.div
          className="absolute top-[35%] left-0 w-96 h-48 bg-white/22 rounded-full blur-2xl"
          animate={{ 
            x: [-150, typeof window !== 'undefined' ? window.innerWidth + 150 : 2000],
            y: [0, -12, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            x: { duration: 35, repeat: Infinity, ease: "linear", delay: 2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[50%] left-0 w-80 h-40 bg-white/20 rounded-full blur-2xl"
          animate={{ 
            x: [-150, typeof window !== 'undefined' ? window.innerWidth + 150 : 2000],
            y: [0, 9, 0],
            scale: [1, 0.92, 1]
          }}
          transition={{ 
            x: { duration: 38, repeat: Infinity, ease: "linear", delay: 8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 8 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 8 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[65%] left-0 w-64 h-32 bg-white/22 rounded-full blur-2xl"
          animate={{ 
            x: [-150, typeof window !== 'undefined' ? window.innerWidth + 150 : 2000],
            y: [0, -9, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            x: { duration: 42, repeat: Infinity, ease: "linear", delay: 15 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 15 },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 15 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[58%] left-0 w-72 h-36 bg-white/19 rounded-full blur-2xl"
          animate={{ 
            x: [-150, typeof window !== 'undefined' ? window.innerWidth + 150 : 2000],
            y: [0, 11, 0],
            scale: [1, 1.06, 1]
          }}
          transition={{ 
            x: { duration: 48, repeat: Infinity, ease: "linear", delay: 18 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 18 },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 18 }
          }}
        ></motion.div>

        {/* Clouds - Layer 3 (Front) - Most visible - Centered */}
        <motion.div
          className="absolute top-[40%] left-0 w-96 h-44 bg-white/25 rounded-full blur-xl"
          animate={{ 
            x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 2000],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            x: { duration: 30, repeat: Infinity, ease: "linear", delay: 3 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[55%] left-0 w-80 h-38 bg-white/23 rounded-full blur-xl"
          animate={{ 
            x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 2000],
            y: [0, 12, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            x: { duration: 32, repeat: Infinity, ease: "linear", delay: 10 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 10 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 10 }
          }}
        ></motion.div>
        <motion.div
          className="absolute top-[62%] left-0 w-60 h-30 bg-white/25 rounded-full blur-xl"
          animate={{ 
            x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 2000],
            y: [0, -11, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{ 
            x: { duration: 36, repeat: Infinity, ease: "linear", delay: 20 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 20 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 20 }
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title with Animated Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="text-6xl mb-6 inline-block"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✈️
            </motion.div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Travel the World with <span className="text-accent">Peace of Mind</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Freedom without compromise. Security without borders.
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-transparent rounded-3xl blur-2xl"></div>

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
              <p className="text-lg sm:text-xl leading-relaxed mb-8">
                <span className="font-bold text-accent text-2xl">Picture this:</span>
                <br /><br />
                You&apos;re traveling abroad, free from worries about holding your papers, hardware wallets, losing your keys, theft, surveillance, or seizure. 
                <br /><br />
                With <span className="font-bold text-white">Bold</span>, your keys are not tied to any device or paper. Set it up once, back up your keyshares, remove the app and go incognito. Restore your keyshares anytime, stay low, control your Bitcoin.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: 0.2 + index * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.08, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-accent/50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="text-sm font-medium text-gray-200">{feature.text}</div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Animated Dots */}
              <div className="flex justify-center space-x-3">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-300 text-sm">
              Join thousands of travelers securing their Bitcoin with Bold
            </p>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
