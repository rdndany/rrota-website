"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const roadmapItems = [
    {
      title: "Phase 1 - Foundation",
      description:
        "Liquidity locked, mint/freeze revoked. 1B+ $RTA tokens burned to establish scarcity and trust.",
      status: "Completed",
      icon: "check",
      side: "left",
    },
    {
      title: "Phase 2 - Launch & Audit",
      description:
        "Spin-To-Win prototype launched, FreshCoins audit passed, initial meme push, airdrops and community formation. Live tracking on Jupiter, Raydium and Dexscreener.",
      status: "Completed",
      icon: "check",
      side: "right",
    },
    {
      title: "Phase 3 - Game & Community",
      description:
        "Spin-To-Win Game fully live with referral leaderboard system. Telegram BuyBot and PriceBot integration for enhanced user experience.",
      status: "Completed",
      icon: "check",
      side: "left",
    },
    {
      title: "Phase 4 - Growth & Burns",
      description:
        "Volume-based burn events implemented, website UX overhaul completed, and global social campaigns launched for mass adoption.",
      status: "Completed",
      icon: "check",
      side: "right",
    },
    {
      title: "Phase 5 - Expansion (Q4 2025)",
      description:
        "Crypto Shooter Game release, Spin-To-Win prototype deployment, wallet plugin integration, NFT mint passes, DAO governance proposal drafted, and mobile experience optimization.",
      status: "In Progress",
      icon: "clock",
      side: "left",
    },
    {
      title: "Phase 6 - Global Scale (Q1 2026)",
      description:
        "5B final burn countdown, CEX listings (MEXC, Gate, XT), staking pools & rewards vault, multi-chain research + token bridge plan, holder dashboard release, multi-language support & global ambassadors.",
      status: "In Progress",
      icon: "clock",
      side: "right",
    },
  ];

  return (
    <section id="Roadmap" className="text-white">
      <div className="container mx-auto px-4 lg:px-0">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r pb-5 from-[#fff] via-[#fff] to-[#fff] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(168,144,255,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          RROTA Roadmap
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#1a1d23] to-[#202329] border border-[#2b3139] rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              RROTA's roadmap is built to guide the project from meme momentum
              to long-term utility. Each phase introduces powerful tools to
              empower holders: Spin-to-Win games incentivize on-chain activity
              and volume, while the Transit App brings $RTA into real-world
              payment use, enabling users to pay for transportation with crypto.
              This fusion of fun and function helps RROTA stand out in the
              Solana ecosystem.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The next stages of growth include NFT staking, GameFi experiences,
              and the rollout of DAO-based governance, where the community helps
              shape the future. From leaderboards and rewards to mobile
              integration and global campaigns, every milestone is designed to
              deliver both value and engagement.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              With strong tokenomics, aggressive burn mechanics, and
              community-led marketing, RROTA is not just a meme — it's an
              evolving decentralized utility token. Each phase is carefully
              crafted to scale adoption, enhance liquidity, and grow user
              participation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As we progress through our roadmap, RROTA remains committed to
              aligning with Solana's scalable, fast, and eco-friendly blockchain
              infrastructure. Whether you're a holder, a gamer, a referral
              sharer, or a builder, RROTA is designed to reward active
              participation, foster innovation, and expand our impact across
              borders.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="relative max-w-4xl mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] !bg-gradient-to-b !from-[#2b3139] !via-[#20befa]/30 !to-[#2b3139] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  item.side === "left"
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:text-left"
                } z-10`}
                variants={itemVariants}
              >
                {/* Timeline connector */}

                <div
                  className={`absolute top-15 -translate-y-1/2 hidden md:block w-4 h-4 rounded-full border-2 z-[-1]  ${
                    item.status === "Completed"
                      ? "!bg-[#20befa] !border-[#20befa] shadow-lg shadow-[#20befa]/30"
                      : "!bg-[#1a1d23] !border-[#20befa] shadow-lg shadow-[#20befa]/20"
                  } ${item.side === "left" ? "right-[-8px]" : "left-[-8px]"}`}
                ></div>

                {/* Roadmap item card */}
                <div className="p-3 rounded-[16px] border border-[#2b3139] transition-all duration-300 bg-[#202329] hover:shadow-lg relative z-10">
                  <div
                    className={`flex items-start gap-3 ${
                      item.side === "left" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {item.icon === "check" ? (
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
                          className="lucide lucide-circle-check-big w-5 h-5 text-[#20befa]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      ) : (
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
                          className="lucide lucide-clock w-5 h-5 text-white"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs mt-2 block opacity-80 ${
                      item.status === "Completed"
                        ? "text-[#20befa]"
                        : "text-white"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
