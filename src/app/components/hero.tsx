"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../../public/rrota-logo2.png";
import Image from "next/image";
import { getTokenData } from "../lib/token-data";
import Link from "next/link";

interface TokenData {
  price: number;
  liquidity: number;
  marketCap: number;
  lastUpdated: number;
  priceChange24h: number;
}

const Hero = () => {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const tokenAddress = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setLoading(true);
        const data = await getTokenData(tokenAddress);
        setTokenData(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch token data");
        console.error("Error fetching token data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
    // Refresh data every 5 minutes (cache will handle the 1-hour duration)
    const interval = setInterval(fetchTokenData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [tokenAddress]);

  const formatPrice = (price: number) => {
    if (price < 0.000001) {
      return `$${price.toExponential(2)}`;
    }
    return `$${price.toFixed(9)}`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1000000) {
      return `$${(marketCap / 1000000).toFixed(2)}M`;
    } else if (marketCap >= 1000) {
      return `$${(marketCap / 1000).toFixed(2)}K`;
    }
    return `$${marketCap.toFixed(2)}`;
  };

  const formatPriceChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full !bg-transparent flex justify-center">
      <motion.section
        id="Hero"
        className="relative w-full text-white py-[10px] mt-[50px] lg:mt-[100px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="
            container mx-auto px-4
            flex items-start
            overflow-hidden box-border
            max-[1100px]
          "
        >
          <div
            className="
              grid grid-cols-1
              min-[1100px]:grid-cols-[3fr_2fr]
              gap-8 lg:gap-14
              p-5 
              items-center
              !bg-[#202329]/50
              backdrop-blur-[10px]
              rounded-lg
            "
          >
            <div className="flex flex-col gap-3 min-w-0 h-full">
              <div className="flex flex-col gap-3 my-auto">
                <motion.div
                  className="font-display text-[48px] md:text-[54px] font-bold text-[#1bbffb] leading-tight"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  RROTA - Empowering the Future of Crypto
                </motion.div>
                <motion.h1
                  className="font-display text-[22px] md:text-[28px] font-bold text-white/90 leading-tight"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  RROTA is a fast, secure, and community-driven token built on
                  the Solana blockchain. Designed for speed, scalability, and
                  transparency, RROTA empowers its community to shape the future
                  of decentralized finance.
                </motion.h1>

                <motion.p
                  className="hidden lg:block font-inter text-[13px] text-white/70 leading-[26px]"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  As a community-first token, RROTA focuses on innovation,
                  security, and collaboration to create real value for its
                  holders. By leveraging Solana’s cutting-edge technology, we
                  deliver lightning-fast transactions, low fees, and a
                  sustainable ecosystem.
                </motion.p>

                {/* Token Address Section */}
                <motion.div
                  className="mt-8 mb-6"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-3 p-4 !bg-[#202329]/50 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#9945FF]"
                        >
                          <path
                            d="M5.02734 15.1875C5.10938 15.1055 5.22656 15.0586 5.34375 15.0586H21.6562C21.8203 15.0586 21.9023 15.2656 21.7773 15.3906L18.9727 18.1953C18.8906 18.2773 18.7734 18.3242 18.6562 18.3242H2.34375C2.17969 18.3242 2.09766 18.1172 2.22266 17.9922L5.02734 15.1875Z"
                            fill="currentColor"
                          />
                          <path
                            d="M5.02734 5.80469C5.10938 5.72266 5.22656 5.67578 5.34375 5.67578H21.6562C21.8203 5.67578 21.9023 5.88281 21.7773 6.00781L18.9727 8.8125C18.8906 8.89453 18.7734 8.94141 18.6562 8.94141H2.34375C2.17969 8.94141 2.09766 8.73438 2.22266 8.60938L5.02734 5.80469Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.9727 10.5C18.8906 10.4179 18.7734 10.3711 18.6562 10.3711H2.34375C2.17969 10.3711 2.09766 10.5781 2.22266 10.7031L5.02734 13.5078C5.10938 13.5898 5.22656 13.6367 5.34375 13.6367H21.6562C21.8203 13.6367 21.9023 13.4297 21.7773 13.3047L18.9727 10.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/70 text-sm mb-1">
                          Token Address
                        </p>
                        <p className="text-white font-mono text-sm break-all">
                          {tokenAddress}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 px-4 py-2 !bg-[#1cc2fc]/20 !hover:bg-[#1cc2fc]/30 border border-[#1cc2fc]/30 rounded-lg transition-all duration-300 text-[#1cc2fc] hover:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                      >
                        {copied ? (
                          <>
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
                              className="text-green-400"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span className="text-green-400 text-sm font-medium">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <>
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
                              <rect
                                width="14"
                                height="14"
                                x="8"
                                y="8"
                                rx="2"
                                ry="2"
                              />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                            <span className="text-sm font-medium">Copy</span>
                          </>
                        )}
                      </motion.button>
                      <motion.button
                        onClick={() =>
                          window.open(
                            "https://solscan.io/token/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a",
                            "_blank"
                          )
                        }
                        className="flex items-center gap-2 px-4 py-2 !bg-[#9945FF]/20 !hover:bg-[#9945FF]/30 border border-[#9945FF]/30 rounded-lg transition-all duration-300 text-[#9945FF] hover:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
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
                        <span className="text-sm font-medium">Solscan</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4 justify-start"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.button
                    className="flex items-center gap-3 hover:!bg-[#202329] text-white px-6 py-4 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <span className="font-poppins font-medium">Jupiter</span>
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-3 hover:!bg-[#202329] text-white px-6 py-4 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                  >
                    <span className="font-poppins font-medium">
                      DexScreener
                    </span>
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-3 hover:!bg-[#202329] text-white px-6 py-4 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <span className="font-poppins font-medium">BirdEye</span>
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-3 hover:!bg-[#202329] text-white px-6 py-4 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                  >
                    <span className="font-poppins font-medium">
                      GeckoTerminal
                    </span>
                  </motion.button>
                </motion.div>

                <motion.div
                  className="mt-6 flex items-center gap-3 flex-wrap"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.a
                    href="https://x.com/rrotacoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition text-white"
                    aria-label="Twitter (X)"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M3.04371 3.57629L9.99338 12.8687L3 20.4237H4.57397L10.6968 13.8092L15.6437 20.4237H21L13.6593 10.6087L20.169 3.57629H18.5951L12.9562 9.6682L8.39998 3.57629H3.04371ZM5.35834 4.73568H7.81903L18.685 19.2642H16.2243L5.35852 4.73568H5.35834Z"></path>
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://t.me/rrotaOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                    aria-label="Telegram"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                  >
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
                      className="lucide lucide-send w-5 h-5 text-white"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://discord.com/channels/1368206433933459466/1368206433933459469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:block p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                    aria-label="Discord"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Right side - Interactive element */}
            <motion.div
              className="flex items-center md:justify-end justify-center min-h-[400px]"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <div className="relative">
                {/* Main floating card */}
                <motion.div
                  className="!bg-gradient-to-br !from-[#353558] !via-[#16213e] !to-[#035ece] backdrop-blur-sm border border-[#1cc2fc]/30 rounded-2xl p-10 shadow-2xl min-w-[320px] w-full max-w-[380px]"
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    y: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Token symbol */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-[#1cc2fc] to-[#0ea5e9] rounded-full mx-auto mb-4 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Image
                        src={logo}
                        alt="logo"
                        width={64}
                        height={64}
                        className="relative z-10"
                      />
                    </motion.div>
                    <h3 className="text-white font-poppins font-bold text-xl mb-2">
                      RROTA Token
                    </h3>
                    <p className="text-white/70 text-sm">Built on Solana</p>
                  </div>

                  {/* Price display */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Price $RTA</span>
                      <motion.span
                        className="text-[#1cc2fc] font-bold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {loading ? (
                          <span className="text-white/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-400">Error</span>
                        ) : (
                          formatPrice(tokenData?.price || 0)
                        )}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">24h Change</span>
                      <motion.span
                        className={`font-bold ${
                          (tokenData?.priceChange24h || 0) >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      >
                        {loading ? (
                          <span className="text-white/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-400">Error</span>
                        ) : (
                          formatPriceChange(tokenData?.priceChange24h || 0)
                        )}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Market Cap</span>
                      <motion.span
                        className="text-white font-bold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1,
                        }}
                      >
                        {loading ? (
                          <span className="text-white/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-400">Error</span>
                        ) : (
                          formatMarketCap(tokenData?.marketCap || 0)
                        )}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">
                        Mint Revoked
                      </span>
                      <motion.span
                        className="text-green-400 font-bold flex items-center gap-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.5,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Yes
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">
                        Freeze Revoked
                      </span>
                      <motion.span
                        className="text-green-400 font-bold flex items-center gap-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 2,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Yes
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-white/70 text-sm">
                        Audited by FreshCoins
                      </span>
                      <motion.span
                        className="text-green-400 font-bold flex items-center gap-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.5,
                        }}
                      >
                        <Link
                          href="https://freshcoins.io/audit/rrota"
                          target="_blank"
                        >
                          View Report
                        </Link>
                      </motion.span>
                    </div>
                  </div>

                  {/* 5 Star Rating */}
                  <div className="mt-6 flex justify-center items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        className="text-yellow-400 text-2xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: star * 0.2,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 15,
                          transition: { duration: 0.2 },
                        }}
                      >
                        ⭐
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-3 h-3 bg-[#1cc2fc] rounded-full shadow-lg"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 5, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#0ea5e9] rounded-full shadow-lg"
                  animate={{
                    y: [0, 25, 0],
                    x: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.7, 1.3, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -left-6 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                  animate={{
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [0.6, 1.4, 0.6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute top-1/4 -right-8 w-2 h-2 bg-[#1cc2fc]/60 rounded-full shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, -5, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
