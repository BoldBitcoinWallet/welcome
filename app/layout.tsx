import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boldbitcoinwallet.com"),
  title: "Bold Bitcoin Wallet - Seedless. Hardware-Free. Limitless.",
  description:
    "No seeds, no hardware wallets, no dependencies. Pure and Resilient Bitcoin Security, powered by advanced multi-device technology that keeps your keys safe across 2-3 devices.",
  keywords: [
    "bitcoin",
    "wallet",
    "cryptocurrency",
    "seedless",
    "threshold signatures",
    "2/3 MPC TSS",
    "MPC TSS",
    "self-custody",
  ],
  authors: [{ name: "Bold Bitcoin Wallet" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Bold Bitcoin Wallet",
    description: "Seedless. Hardware-Free. Limitless.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Bold Bitcoin Wallet preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldbtcwallet",
    creator: "@boldbtcwallet",
    images: ["/social-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
