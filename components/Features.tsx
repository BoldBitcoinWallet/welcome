'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const features = [
    {
      icon: "📱",
      title: "Multi-Device Security",
      description:
        "Use 2 or 3 devices to secure your wallet. Any 2 devices can authorize transactions—resilient even if one device is lost or offline, giving you flexible 2-of-3 protection.",
      gradient: "from-secondary/20 to-secondary/5",
      iconBg: "bg-secondary/10",
      accentColor: "group-hover:text-secondary",
    },
    {
      icon: "🔒",
      title: "No Single Point of Control",
      description:
        "One device or backup share alone can’t move your funds. Any 2 of your devices must approve—so a stolen phone or leaked share is harmless.",
      gradient: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/10",
      accentColor: "group-hover:text-primary",
    },
    {
      icon: "🔑",
      title: "Seedless Self‑Custody",
      description:
        "No paper seeds, no hardware wallets. Back up safely using your trusted apps and stay in full control of your Bitcoin—simple, private, and resilient.",
      gradient: "from-accent/20 to-accent/5",
      iconBg: "bg-accent/10",
      accentColor: "group-hover:text-accent",
    },
    {
      icon: "🌐",
      title: "Open Source",
      description:
        "Fully open source on GitHub—review the code, verify how it works, and contribute improvements. Transparency you can trust.",
      gradient: "from-accent/20 to-accent/5",
      iconBg: "bg-accent/10",
      accentColor: "group-hover:text-accent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-primary overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-accent">Bold</span> Bitcoin Wallet?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the next generation of Bitcoin security with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group relative"
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full flex flex-col items-center text-center`}>
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <span className="text-4xl">{feature.icon}</span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                  className={`text-xl font-bold text-white mb-3 ${feature.accentColor} transition-colors duration-300`}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                  className="text-gray-300 leading-relaxed text-sm flex-grow"
                >
                  {feature.description}
                </motion.p>

                {/* Bottom Accent Line */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-full w-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Feature Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "100%", label: "Self-Custody" },
            { value: "2-3", label: "Devices Supported" },
            { value: "0", label: "Seed Phrases" },
            { value: "∞", label: "Peace of Mind" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.9 + index * 0.15,
                type: "spring",
                stiffness: 200
              }}
              className="group"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
