"use client";
import React from "react";
import { motion } from "framer-motion";

const Graph = () => {
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

  const graphVariants = {
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
    <section id="Graph" className="max-w-7xl mx-auto px-4">
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
            <span className="relative z-10">RROTA Graph</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h2>
        <motion.div className="h-[840px]" variants={graphVariants}>
          <iframe
            src="https://www.geckoterminal.com/solana/pools/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a?embed=1&info=0&swaps=5"
            width="100%"
            height="100%"
            style={{
              border: "none",
              borderRadius: "0.5rem",
              transition: "opacity 0.3s ease-in-out",
            }}
            sandbox="allow-scripts allow-same-origin allow-popups"
            title="RROTA Chart"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Graph;
