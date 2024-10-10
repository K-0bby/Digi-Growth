"use client"

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link"

export const Navbar: React.FC = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-[#1f1f1f] py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 lg:px-5 font-primary">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          DigiGrowth
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/" className="hover:text-blue-500 transition-colors duration-300 font-medium">
            Company
          </Link>
          <Link href="/home" className="hover:text-blue-500 transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors duration-300 font-medium">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors duration-300 font-medium">
            Contact
          </Link>
        </div>

        {/* Get Started Button (Visible on desktop only) */}
        <Link
          href="/get-started"
          className="hidden md:inline-block border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1f1f1f] text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/get-started"
                className="border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};


