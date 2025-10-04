"use client";
import React, { useState, useEffect } from "react";

const Graph = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Set a timeout to hide loading after 10 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setHasError(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <section id="Graph" className="w-full px-4 py-8">
      <div className="lg:max-w-7xl lg:mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          <span className="relative inline-block">
            <span className="relative z-10">RROTA Graph</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#1cc2fc] -z-0" />
          </span>
        </h2>
        <div className="w-full bg-[#1a1d23] border border-[#2b3139] rounded-xl p-4 sm:p-6 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1d23] rounded-xl z-10">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-[#1cc2fc] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-[#1cc2fc] text-sm">Loading Chart...</p>
              </div>
            </div>
          )}
          {hasError && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1d23] rounded-xl z-10">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-[#1cc2fc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#1cc2fc]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-[#1cc2fc] text-sm mb-2">
                  Chart temporarily unavailable
                </p>
                <p className="text-gray-400 text-xs">
                  Please try refreshing the page
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-3 px-4 py-2 bg-[#1cc2fc] text-white rounded-lg text-xs hover:bg-[#1cc2fc]/80 transition-colors"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          )}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative">
            <iframe
              src="https://dexscreener.com/solana/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a?embed=1&theme=dark&trades=0&info=0"
              width="100%"
              height="100%"
              className="w-full h-full border-0 rounded-lg shadow-lg"
              style={{
                minHeight: "350px",
                maxHeight: "750px",
              }}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
              title="RROTA Chart"
              loading="lazy"
              onLoad={() => {
                setIsLoading(false);
                setHasError(false);
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
