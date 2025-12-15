"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/">[LOGO]</Link>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Our Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button 
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Off-Canvas Menu */}
        <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsOpen(false)}>Our Projects</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
