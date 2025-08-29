import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4 text-white bg-black">
      <div className="container flex flex-col items-center justify-between lg:flex-row">
        <div className="flex items-center justify-center gap-2">
          <img className="w-[40px]" src="/rrota-logo2.png" alt="RROTA" />
          <p className="font-display font-bold text-4xl animate-blue-glow cursor-pointer transition-transform duration-200">
            RROTA
          </p>
        </div>
        <ul className="flex flex-col items-center justify-center gap-2 my-4 text-sm font-semibold lg:flex-row lg:my-0 lg:gap-12">
          <li>© 2025 RROTA. All Rights Reserved.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
