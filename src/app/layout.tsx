import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "../components/Navigation";
import icon from "./icon.svg";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiger Taylor",
  description: "Portfolio of Tiger Taylor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} min-h-screen bg-gray-50 flex flex-col`}>
        <header className="bg-white shadow-md py-4 px-6">
          <Navigation logoSrc={icon} />
        </header>

        {children}

        <footer className="border-t border-gray-200 py-6 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Tiger Taylor</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
