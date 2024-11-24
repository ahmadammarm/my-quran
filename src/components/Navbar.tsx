
// @ts-nocheck
"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Surah", url: "/surah" },
  ];

  const handleToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-500">
              MyWebsite
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            {NavLinks.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={`text-lg ${
                  pathname === item.url
                    ? "text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={handleToggle}
              className="text-gray-500 hover:text-blue-500 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 p-4">
            {NavLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  className={`block text-lg ${
                    pathname === item.url
                      ? "text-blue-500"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                  onClick={() => setIsMobileOpen(false)} // Close menu on click
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
