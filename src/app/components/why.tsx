"use client";
import React from "react";

const Why = () => {
  return (
    <section id="WhyRrota" className="max-w-7xl mx-auto px-4">
      <div className="mt-10 space-y-6">
        {/* Mini Promo / Hook */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1cc2fc] mb-4">
            💎 RROTA — The Wheel That Builds Portfolios
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            🚀 Be Early • Be Community • Be Real Money
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="relative inline-block">
            <span className="relative z-10">Why RROTA?</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0" />
          </span>
        </h2>
        {/* Audit & Security Section */}
        <div className="mb-12 p-8 rounded-2xl border border-[#2b3139] !bg-gradient-to-br !from-[#1cc2fc]/10 !to-[#0ea5e9]/5 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔒 Security & Trust
            </h3>
            <p className="text-white/70">
              RROTA is built with security and transparency at its core
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* FreshCoins Audit Badge */}
            <div
              className="flex flex-col items-center p-6 rounded-xl border border-green-500/30 !bg-gradient-to-br !from-green-500/10 !to-transparent hover:border-green-400 transition-all duration-300 group cursor-pointer"
              onClick={() =>
                window.open("https://freshcoins.io/audit/rrota", "_blank")
              }
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-400"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z" />
                  <path d="M3 5h18v6H3V5z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-white mb-2">
                Smart Contract Audited
              </h4>
              <p className="text-green-400 text-sm font-medium mb-2">
                FreshCoins Verified
              </p>
              <p className="text-white/70 text-sm text-center">
                Professional security audit completed by FreshCoins
              </p>
              <div className="mt-3 text-green-400 text-xs font-medium">
                Click to view report →
              </div>
            </div>

            {/* No Mint Authority */}
            <div className="flex flex-col items-center p-6 rounded-xl border border-red-500/30 !bg-gradient-to-br !from-red-500/10 !to-transparent">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-400"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-white mb-2">
                No Mint Authority
              </h4>
              <p className="text-red-400 text-sm font-medium mb-2">
                Mint Revoked
              </p>
              <p className="text-white/70 text-sm text-center">
                Token supply is fixed - no new tokens can be created
              </p>
            </div>

            {/* LP Locked Forever */}
            <div className="flex flex-col items-center p-6 rounded-xl border border-blue-500/30 !bg-gradient-to-br !from-blue-500/10 !to-transparent">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <path d="M12 15v2" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-white mb-2">
                LP Locked Forever
              </h4>
              <p className="text-blue-400 text-sm font-medium mb-2">
                Liquidity Secured
              </p>
              <p className="text-white/70 text-sm text-center">
                Liquidity pool is permanently locked for maximum security
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-purple-500 transition-all duration-300 group relative overflow-hidden">
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
          </div>
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-yellow-500 transition-all duration-300 group relative overflow-hidden">
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
          </div>
          <div className="p-8 rounded-2xl border border-[#2b3139] hover:border-emerald-500 transition-all duration-300 group relative overflow-hidden">
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
          </div>
        </div>

        {/* Utility in Action Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="relative inline-block">
              <span className="relative z-10">🎮 Utility in Action</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0" />
            </span>
          </h2>

          <p className="text-center text-white/70 mb-12 text-lg">
            Experience the real-world utility of RROTA tokens through
            interactive games and practical applications
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Spin-to-Win Wheel */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] hover:border-purple-500 transition-all duration-300">
              <div className="absolute inset-0 !bg-gradient-to-br !from-purple-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              {/* Placeholder */}
              <div className="relative h-48 !bg-gradient-to-br !from-purple-500/20 !to-purple-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white animate-spin"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">🎮 Spin-to-Win</p>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
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
                      className="text-purple-400"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">
                    🎮 Spin-to-Win Wheel
                  </h3>
                </div>
                <p className="text-purple-400 font-semibold mb-2">
                  Win $RTA every spin
                </p>
                <p className="text-white/70 text-sm">
                  Spin the wheel daily to win RROTA tokens. The more you hold,
                  the bigger your potential rewards!
                </p>
              </div>
            </div>

            {/* Crypto Shooter Game */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] hover:border-orange-500 transition-all duration-300">
              <div className="absolute inset-0 !bg-gradient-to-br !from-orange-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              {/* Placeholder */}
              <div className="relative h-48 !bg-gradient-to-br !from-orange-500/20 !to-orange-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3 3-3" />
                      <path d="m15 12 3 3-3 3" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">🚀 Crypto Shooter</p>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
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
                      className="text-orange-400"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3 3-3" />
                      <path d="m15 12 3 3-3 3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">
                    🚀 Crypto Shooter Game
                  </h3>
                </div>
                <p className="text-orange-400 font-semibold mb-2">
                  Play & Earn
                </p>
                <p className="text-white/70 text-sm">
                  Battle through levels and earn RROTA tokens for your
                  achievements. Higher scores = bigger rewards!
                </p>
              </div>
            </div>

            {/* Transit Payments */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2b3139] hover:border-green-500 transition-all duration-300">
              <div className="absolute inset-0 !bg-gradient-to-br !from-green-500/20 !to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              {/* Placeholder */}
              <div className="relative h-48 !bg-gradient-to-br !from-green-500/20 !to-green-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">🚌 Transit Payment</p>
                </div>
              </div>

              <div className="relative z-20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
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
                      className="text-green-400"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">
                    🚌 Transit Payments
                  </h3>
                </div>
                <p className="text-green-400 font-semibold mb-2">
                  Pay bus tickets with $RTA
                </p>
                <p className="text-white/70 text-sm">
                  Use RROTA tokens to pay for public transportation. Real
                  utility for everyday life!
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon CTA */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-3 px-8 py-4 !bg-gradient-to-r !from-[#1cc2fc] !to-[#0ea5e9] hover:!from-[#0ea5e9] hover:!to-[#1cc2fc] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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
              Try RROTA Games → Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
