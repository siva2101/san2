"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Initialize lastScrollY to avoid incorrect direction detection on initial scroll
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Check direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      // Close mobile menu if resized to desktop view
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Compute the class logic
  // sticky: keeps it in flow but pinned
  // top-0: pinned to top
  // transition-transform: smooth animation
  // translate logic: moves it out of view or keeps it in view
  const navClasses = `bg-sansGray p-4 sticky top-0 z-50 transition-transform duration-300 ${isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
    }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-sansRed hover:text-sansRed font-bold text-2xl no-underline transition-colors">
                [LOGO]
              </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="flex gap-8 list-none m-0 p-0 hidden lg:flex">
              <li>
                <Link href="/" className="text-white no-underline font-medium hover:text-sansRed transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white no-underline font-medium hover:text-sansRed transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white no-underline font-medium hover:text-sansRed transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white no-underline font-medium hover:text-sansRed transition-colors">
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
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      <div className={`fixed top-0 right-0 w-64 h-screen bg-sansGray pt-20 z-40 transition-transform lg:!hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="list-none m-0 p-0">
          <li className="border-b border-white/20">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-4 px-6 text-white no-underline hover:bg-white/5 hover:text-sansRed transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-white/20">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block py-4 px-6 text-white no-underline hover:bg-white/5 hover:text-sansRed transition-colors"
            >
              About
            </Link>
          </li>
          <li className="border-b border-white/20">
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="block py-4 px-6 text-white no-underline hover:bg-white/5 hover:text-sansRed transition-colors"
            >
              Our Projects
            </Link>
          </li>
          <li className="border-b border-white/20">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-4 px-6 text-white no-underline hover:bg-white/5 hover:text-sansRed transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
