"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img className="w-12 h-12" src="/rrota-logo2.png" alt="RROTA" />
            <h2 className="font-display font-bold text-4xl text-[#1cc2fc]">
              RROTA
            </h2>
          </motion.div>

          <motion.blockquote
            className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            RROTA = REAL MONEY. Built by the community, for the community.
          </motion.blockquote>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1cc2fc] hover:bg-[#0ea5e9] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border-2 border-[#1cc2fc] hover:border-[#0ea5e9]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Buy on Jupiter
          </motion.a>

          <motion.a
            href="https://t.me/rrotaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0088cc] hover:bg-[#006699] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border-2 border-[#0088cc] hover:border-[#006699]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Join Telegram
          </motion.a>

          <motion.a
            href="https://x.com/rrotacoin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#333333] hover:bg-[#1a1a1a] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border-2 border-[#666666] hover:border-[#999999]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M3.04371 3.57629L9.99338 12.8687L3 20.4237H4.57397L10.6968 13.8092L15.6437 20.4237H21L13.6593 10.6087L20.169 3.57629H18.5951L12.9562 9.6682L8.39998 3.57629H3.04371ZM5.35834 4.73568H7.81903L18.685 19.2642H16.2243L5.35852 4.73568H5.35834Z"></path>
            </svg>
            Follow Twitter
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-lg md:text-xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            ✔️ LP Locked ✔️ Audited ✔️ No Dev Wallets 👥 100% Community
          </motion.div>
        </motion.div>

        {/* Motivational Hook */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#1cc2fc] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            💎 RROTA — The Wheel That Builds Portfolios
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            🚀 Be Early • Be Community • Be Real Money
          </motion.p>
        </motion.div>

        {/* Small Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="text-[#aaa] hover:text-[#1cc2fc] transition-colors duration-300 text-sm"
          >
            Whitepaper
          </a>
          <a
            href="https://freshcoins.io/audit/rrota"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa] hover:text-[#1cc2fc] transition-colors duration-300 text-sm"
          >
            Audit
          </a>
          <a
            href="https://t.me/rrotaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa] hover:text-[#1cc2fc] transition-colors duration-300 text-sm"
          >
            Contact
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-[#666] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025 RROTA. All Rights Reserved. Built on Solana.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
