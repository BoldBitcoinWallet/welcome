'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BoldBitcoinWallet',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/RAxbb68sKn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BoldBitcoinWallet',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', url: 'https://github.com/BoldBitcoinWallet/Terms/blob/main/Privacy%20Policy.md' },
    { name: 'Terms of Service', url: 'https://github.com/BoldBitcoinWallet/Terms/blob/main/Terms%20Of%20Service.md' },
    { name: 'Documentation', url: 'https://github.com/BoldBitcoinWallet' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Bold Wallet
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your keys, your Bitcoin. <br />
              Self-custody made simple.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm inline-block"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-white/10 hover:border-accent/50 transition-all duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p className="text-center md:text-left">
            &copy; {currentYear} Bold Bitcoin Wallet. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs">Built with</span>
            <motion.span
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              ❤️
            </motion.span>
            <span className="text-xs">for Bitcoin</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

