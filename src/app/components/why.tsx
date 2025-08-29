"use client";
import React from "react";
import { motion } from "framer-motion";

const Why = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="WhyRrota" className="max-w-7xl mx-auto px-4">
      <motion.div
        className="mt-10 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={titleVariants}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Why RROTA?</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={cardsContainerVariants}
        >
          <motion.div
            className="p-8 rounded-2xl border border-[#2b3139] hover:border-purple-500 transition-all duration-300 group relative overflow-hidden"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <div className="absolute inset-0 !bg-gradient-to-br !from-purple-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <div className="relative z-20">
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
                className="lucide lucide-shield-check text-green-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p className="font-bold text-xl mb-2">Secure &amp; Audited</p>
              <p className="text-[#aaa]">
                Built on Solana&apos;s secure blockchain with community-driven
                governance and transparent operations.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="p-8 rounded-2xl border border-[#2b3139] hover:border-yellow-500 transition-all duration-300 group relative overflow-hidden"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <div className="absolute inset-0 !bg-gradient-to-br !from-yellow-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <div className="relative z-20">
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
                className="lucide lucide-zap text-yellow-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              <p className="font-bold text-xl mb-2">Lightning Fast</p>
              <p className="text-[#aaa]">
                Leveraging Solana&apos;s high-speed blockchain for instant
                transactions and low fees.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="p-8 rounded-2xl border border-[#2b3139] hover:border-emerald-500 transition-all duration-300 group relative overflow-hidden"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <div className="absolute inset-0 !bg-gradient-to-br !from-emerald-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <div className="relative z-20">
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
                className="lucide lucide-leaf text-emerald-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              <p className="font-bold text-xl mb-2">Community Driven</p>
              <p className="text-[#aaa]">
                Empowering the community to shape the future of decentralized
                finance through active participation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Why;
