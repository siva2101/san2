"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-800 p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-green-600 hover:text-green-700 font-bold text-2xl no-underline transition-colors">
              [LOGO]
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="flex gap-8 list-none m-0 p-0 hidden lg:flex">
            <li>
              <Link href="/" className="text-white no-underline font-medium hover:text-green-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white no-underline font-medium hover:text-green-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white no-underline font-medium hover:text-green-600 transition-colors">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white no-underline font-medium hover:text-green-600 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-0 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white block transition-all"></span>
            <span className="w-6 h-0.5 bg-white block transition-all"></span>
            <span className="w-6 h-0.5 bg-white block transition-all"></span>
          </button>
        </div>

        {/* Mobile Off-Canvas Menu */}
        <div className={`fixed top-0 right-0 w-64 h-screen bg-zinc-900 pt-20 z-50 transition-transform lg:!hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="list-none m-0 p-0">
            <li className="border-b border-zinc-700">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-4 px-6 text-white no-underline hover:bg-zinc-800 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-zinc-700">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block py-4 px-6 text-white no-underline hover:bg-zinc-800 hover:text-green-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li className="border-b border-zinc-700">
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="block py-4 px-6 text-white no-underline hover:bg-zinc-800 hover:text-green-600 transition-colors"
              >
                Our Projects
              </Link>
            </li>
            <li className="border-b border-zinc-700">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-4 px-6 text-white no-underline hover:bg-zinc-800 hover:text-green-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
