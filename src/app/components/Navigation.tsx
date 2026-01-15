"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Extract unique categories for the submenu
  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category))).sort();
  }, []);

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
  const navClasses = `p-4 md:px-8 lg:px-12 sticky top-0 z-50 bg-white transition-transform duration-300 ${isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
    }`;

  // Helper to determine active state
  const getLinkClass = (path: string, mobile = false) => {
    const isActive = pathname === path || (path !== '/' && pathname?.startsWith(path));
    const baseClass = "no-underline transition-colors";

    if (mobile) {
      return `block py-4 px-6 ${isActive ? 'text-sansGray' : 'text-sansGray hover:text-black hover:bg-white/5'}`;
    }

    return `${baseClass} font-medium ${isActive ? 'text-sansGray' : 'text-sansGray hover:text-black'}`;
  };

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 no-underline transition-opacity hover:opacity-80">
                <Image
                  src="/images/logo.png"
                  alt="Sanskriti Architects Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain md:h-10"
                  priority
                />
                <span className="text-sansRed font-sans text-lg md:text-xl tracking-tight uppercase flex gap-1.5">
                  <span className="font-bold">Sanskriti</span>
                  <span className="font-light">Architects</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="flex gap-8 list-none m-0 p-0 hidden lg:flex items-center">
              <li>
                <Link href="/" className={getLinkClass('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className={getLinkClass('/about')}>
                  About
                </Link>
              </li>
              <li className="relative group">
                <Link href="/" className={`flex items-center gap-1 ${getLinkClass('/projects')}`}>
                  Our Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {/* Flyout Submenu 
                <div className="absolute left-0 top-full pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="bg-white rounded-lg shadow-xl overflow-hidden py-2 m-0 list-none border border-gray-100">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={`/projects?category=${encodeURIComponent(category)}`}
                          className="block px-4 py-2.5 text-sm text-sansGray hover:bg-sansRed/5 hover:text-sansRed transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>*/}
              </li>
              <li>
                <Link href="/" className={getLinkClass('/contact')}>
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Hamburger Menu Button */}
            <button
              className="flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-0 lg:hidden"
              // onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-sansGray block transition-all"></span>
              <span className="w-6 h-0.5 bg-sansGray block transition-all"></span>
              <span className="w-6 h-0.5 bg-sansGray block transition-all"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      <div className={`fixed top-0 right-0 w-64 h-screen bg-sansGray pt-20 z-40 transition-transform lg:!hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="list-none m-0 p-0 h-full overflow-y-auto">
          <li className="border-b border-white/20">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={getLinkClass('/', true)}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-white/20">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={getLinkClass('/about', true)}
            >
              About
            </Link>
          </li>
          <li className="border-b border-white/20">
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className={getLinkClass('/projects', true)}
            >
              Our Projects
            </Link>
            {/* Mobile Submenu */}
            <ul className="list-none bg-black/20 m-0 p-0">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/projects?category=${encodeURIComponent(category)}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-10 text-sm text-white/80 hover:text-sansRed transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="border-b border-white/20">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={getLinkClass('/contact', true)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
