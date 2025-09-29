"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HowTo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="HowTo" className="max-w-7xl mx-auto px-4">
      <motion.div
        ref={ref}
        className="mt-10 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            <span className="relative z-10">How to Buy (Simplified Guide)</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#20befa] -z-0"></span>
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-lg text-[#aaa] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          👉 Purpose: Make buying easy, no confusion.
        </motion.p>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="p-8 rounded-2xl border border-[#2b3139] hover:border-blue-500 transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 !bg-gradient-to-br !from-blue-500/10 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wallet text-blue-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg>
            <p className="font-bold text-xl mb-2">
              1 - Download Phantom Wallet
            </p>
            <p className="text-[#aaa] mb-4">
              Get the official Phantom wallet for Solana. It's the most trusted
              and user-friendly option.
            </p>
            <a
              href="https://phantom.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Download Phantom
            </a>
          </motion.div>
          <motion.div
            className="p-8 rounded-2xl border border-[#2b3139] hover:border-cyan-500 transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 !bg-gradient-to-br !from-cyan-500/10 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-upload text-cyan-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" x2="12" y1="3" y2="15"></line>
            </svg>
            <p className="font-bold text-xl mb-2">2 - Get SOL</p>
            <p className="text-[#aaa]">
              Buy SOL on Binance, Coinbase, or any major exchange. Send it to
              your Phantom wallet. You need SOL to pay fees and buy RROTA.
            </p>
          </motion.div>
          <motion.div
            className="p-8 rounded-2xl border border-[#2b3139] hover:border-yellow-500 transition-all duration-300 group relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 !bg-gradient-to-br !from-yellow-500/10 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart text-yellow-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <p className="font-bold text-xl mb-2">
              3 - Swap SOL → $RTA on Jupiter
            </p>
            <p className="text-[#aaa] mb-6">
              Connect your wallet to Jupiter and swap SOL for RROTA tokens.
              Jupiter finds the best rates automatically.
            </p>
            <a
              href="https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center justify-center gap-4 py-2 px-4 bg-gradient-to-r from-[#1cc2fc] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#1cc2fc] text-white font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(28,194,252,0.4)] active:scale-95 relative z-10 border-2 border-[#1cc2fc]/30 hover:border-[#1cc2fc]/60 animate-pulse"
            >
              Buy $RTA on Jupiter 🚀
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowTo;
