import type { Metadata } from "next";
import { Geist, Geist_Mono, Gluten, Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./utils/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rrota: Decentralized Community Token on Solana Blockchain | RROTA",
  description:
    "Discover Rrota, a decentralized community token on the Solana blockchain. Experience speed, security, and innovation tailored for the new generation of crypto users. Join our community and explore our tokenomics and roadmap. Rrota is live on Solana mainnet and accessible via Solana wallets.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} ${inter.variable} ${poppins.variable} antialiased `}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
