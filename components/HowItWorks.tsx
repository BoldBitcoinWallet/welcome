'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { number: 1, text: "Install on 2 or 3 devices" },
    { number: 2, text: "Secure your backups on trusted channels" },
    { number: 3, text: "Approve with any 2 devices (2/3)" },
    { number: 4, text: "HODL with peace of mind" },
  ];

  // Generate stars on client side only to avoid hydration mismatch
  const [stars, setStars] = useState<Array<{
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2,
        duration: 3 + Math.random() * 7,
        delay: Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.3,
      }))
    );
  }, []);

  return (
    <section
      id="how-it-works"
      className="-mt-2 py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden"
    >
      {/* Starfield Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 3, star.opacity],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        {/* Short explanation for 2 or 3 devices flow */}
        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto -mt-12 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Set up Bold on 2 or 3 devices. Any 2 of them can approve a
          transaction, giving you flexibility and strong protection if one
          device is lost or unavailable.
        </motion.p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connecting Line - draws from left */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-10 left-1/2 h-0.5 z-0"
                  style={{ width: 'calc(100% + 2rem)' }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    delay: index * 2 + 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-full bg-gradient-to-r from-accent via-white to-accent" />
                </motion.div>
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                    whileInView={{ scale: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {step.number === 3 ? (
                      <>
                        <span className="text-3xl font-bold text-gray-900 group-hover:opacity-0 transition-opacity duration-300">
                          {step.number}
                        </span>
                        <svg
                          className="absolute inset-0 m-auto w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          viewBox="0 0 24 24"
                          fill="#f1c40f"
                        >
                          <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
                        </svg>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </span>
                    )}
                  </motion.div>

                  {/* Pulsing Glow Effect - triggers when line arrives */}
                  <motion.div
                    className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:bg-accent/60 transition-all duration-500"
                    initial={{ opacity: 0.3, scale: 1 }}
                    whileInView={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.08, 1] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 2 + 1.6,
                      ease: "easeOut",
                    }}
                  />

                  {/* Ring Animation - triggers when line arrives */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent/50"
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: [0, 0.7, 0], scale: [1, 1.6] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 2 + 1.6,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Step Text */}
                <motion.p
                  className="text-lg font-medium max-w-xs group-hover:text-accent transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  {step.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
