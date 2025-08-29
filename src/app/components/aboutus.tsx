"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RrotaImage2 from "../../../public/rrota-image-2.jpg";
import Image from "next/image";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="AboutUs" className="w-full px-4 mb-20">
      <div className="max-w-[1300px] mx-auto">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r pb-5 from-[#fff] via-[#fff] to-[#fff] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(168,144,255,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.div
          ref={ref}
          className="w-full bg-[#1c1f24] border border-[#2b3139] rounded-[24px] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-full">
              <Image
                alt="RROTA Team"
                src={RrotaImage2}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <div className="text-[#aaa] text-sm mt-1 leading-relaxed space-y-6 p-4 md:p-6 flex flex-col justify-center">
              <p>
                At <span className="text-[#20befa]">RROTA</span>, we are
                redefining what it means to be part of a decentralized community
                on the Solana blockchain. Our mission is to deliver a fast,
                secure, and innovative token ecosystem that empowers the next
                generation of crypto enthusiasts.
              </p>
              <p>
                Built on Solana's high-performance infrastructure,{" "}
                <span className="text-[#20befa]">RROTA</span> is designed to
                provide speed, scalability, and low transaction costs without
                compromising security. We believe in creating a transparent and
                community-driven project that prioritizes real utility, user
                engagement, and long-term growth.
              </p>
              <p>
                Our vision is simple yet powerful: to build a thriving
                decentralized ecosystem where users have a voice and value is
                shared fairly. With clear tokenomics, an actionable roadmap, and
                an active community, we aim to make{" "}
                <span className="text-[#20befa]">RROTA</span> a cornerstone of
                the Solana DeFi space.
              </p>

              <div className="space-y-4">
                <h3 className="text-[#20befa] font-semibold text-base">
                  Why RROTA?
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>Lightning-fast transactions powered by Solana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>
                      Community-first approach with transparent governance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>
                      Sustainable growth through innovation and utility
                      expansion
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#20befa] font-semibold text-base">
                  Looking Ahead
                </h3>
                <p>
                  The future of <span className="text-[#20befa]">RROTA</span> is
                  bright. We are committed to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>
                      Expanding token utility across diverse platforms and
                      services
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>
                      Enhancing community engagement through initiatives,
                      rewards, and governance participation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#20befa] mt-1">•</span>
                    <span>
                      Driving innovation in the DeFi ecosystem with new features
                      and integrations
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-[#20befa] font-medium">
                Join us as we shape the future of decentralized finance on
                Solana. Together, we'll push the boundaries of what's possible.
              </p>
              <div className="flex gap-5 pt-2 flex-wrap">
                <a
                  href="https://x.com/rrotacoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition text-white"
                  aria-label="Twitter (X)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M3.04371 3.57629L9.99338 12.8687L3 20.4237H4.57397L10.6968 13.8092L15.6437 20.4237H21L13.6593 10.6087L20.169 3.57629H18.5951L12.9562 9.6682L8.39998 3.57629H3.04371ZM5.35834 4.73568H7.81903L18.685 19.2642H16.2243L5.35852 4.73568H5.35834Z"></path>
                  </svg>
                </a>

                <a
                  href="https://t.me/rrotaOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                  aria-label="Telegram"
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
                </a>

                <a
                  href="https://discord.com/channels/1368206433933459466/1368206433933459469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                  aria-label="Discord"
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
                </a>

                <a
                  href="mailto:info@rrota.xyz"
                  className="p-3 rounded-full bg-[#202329] hover:opacity-80 transition"
                  aria-label="Email"
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
                    className="lucide lucide-mail w-5 h-5 text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
