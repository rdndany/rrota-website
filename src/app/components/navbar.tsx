"use client";
import Link from "next/link";
import React, { useState } from "react";

import logo from "../../../public/rrota-logo2.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.offsetTop;
        // Use larger offset for mobile to account for navbar height
        const isMobile = window.innerWidth < 1024; // lg breakpoint
        const offsetPosition = elementPosition - (isMobile ? 100 : 60);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0c0f14]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:py-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-3 group"
          >
            <motion.div
              animate={{
                rotate: [0, 360, 360, -360, -360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.4, 0.7, 0.8, 1],
              }}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc] to-[#0ea5e9] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                className="relative z-10"
              />
            </motion.div>
            <motion.span
              className="font-display font-bold text-4xl cursor-pointer relative flex items-center -mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Blue sweep effect that moves across the text */}
              <motion.span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, white 0%, white 30%, #1cc2fc 50%, white 70%, white 100%)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              >
                RROTA
              </motion.span>
            </motion.span>
          </button>
        </motion.div>
        <motion.nav
          className="hidden lg:flex gap-8 text-white font-poppins font-medium text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection("AboutUs")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">About RROTA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection("Roadmap")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">Roadmap</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection("Tokenomics")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">Tokenomics</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => window.open("/", "_blank")}
              className="relative px-3 py-2 rounded-lg hover:text-[#1cc2fc] transition-all duration-300 group"
            >
              <span className="relative z-10">Whitepaper</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cc2fc]/20 to-[#0ea5e9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </motion.nav>

        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="!bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] !text-white font-poppins font-bold text-base px-8 py-3 rounded-xl shadow-lg hover:shadow-[#1cc2fc]/30 transition-all duration-300 !border-0 min-w-[140px]"
              size="lg"
              as={Link}
              href="https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a"
              target="_blank"
              radius="lg"
              variant="solid"
              style={{
                background: "linear-gradient(to right, #1cc2fc, #0ea5e9)",
                color: "white",
              }}
            >
              BUY RROTA
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 1 },
                }}
                className="w-5 h-0.5 bg-white rounded-full mb-1"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-5 h-0.5 bg-white rounded-full mb-1"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -1 },
                }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 bg-[#0c0f14]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-50 lg:hidden"
          >
            <div className="p-6 space-y-4">
              {/* Mobile Navigation Links */}
              <motion.button
                onClick={() => scrollToSection("top")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Home
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("Tokenomics")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Tokenomics
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("Roadmap")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Roadmap
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("AboutUs")}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 text-white font-poppins font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Us
              </motion.button>

              {/* Mobile CTA Button */}
              <motion.div
                className="pt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="w-full !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] !text-white font-poppins font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-[#1cc2fc]/30 transition-all duration-300 !border-0"
                  size="lg"
                  as={Link}
                  href="https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a"
                  target="_blank"
                  radius="lg"
                  variant="solid"
                  style={{
                    background: "linear-gradient(to right, #1cc2fc, #0ea5e9)",
                    color: "white",
                  }}
                >
                  BUY RROTA
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
