"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#chrome-extension", label: "Extension" },
    { href: "#community", label: "Community" },
    { href: "#terms", label: "Terms" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110 bg-white rounded shadow-sm">
              <Image
                src="/ic_launcher.png"
                alt="Bold Logo"
                width={32}
                height={32}
                style={{margin: 4}}
              />
            </div>
            <span className="text-xl font-bold text-gray-100 hidden sm:block">
              Bold Bitcoin Wallet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href} className="cursor-pointer">
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-accent font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li className="cursor-pointer">
              <a
                href="https://docs.boldbitcoinwallet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              >
                <Image src="/documentation.png" alt="Docs" width={24} height={24} />
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href} className="cursor-pointer">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-accent rounded-lg transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="cursor-pointer">
              <a
                href="https://docs.boldbitcoinwallet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-accent rounded-lg transition-colors duration-300 cursor-pointer"
              >
                <Image
                  src="/documentation.png"
                  alt="Docs"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
