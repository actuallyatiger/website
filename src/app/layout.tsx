import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

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
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-xl font-bold flex gap-4 items-center flex-grow">
              <Image src={icon} height={128} width={128} alt="Logo" className="h-[2em] w-auto object-contain" />
              Tiger Taylor
            </div>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
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
