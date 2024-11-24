"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ToggleMode } from "./ToggleMode";

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
    <nav className="bg-primary shadow-sm fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-black">
              MyQuran
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {NavLinks.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={`px-4 py-2 text-lg ${
                  pathname === item.url
                    ? "text-green-800 bg-gray-100 rounded-[10%]"
                    : "text-black"
                }`}
              >
                {item.title}
              </a>
            ))}
            <ToggleMode />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              onClick={handleToggle}
              className="text-black hover:text-white focus:outline-none"
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
            </Button>
            <ToggleMode />
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-green-900 shadow-md">
          <ul className="space-y-4 p-4">
            {NavLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  className={`block text-lg font-semibold px-4 py-2 ${
                    pathname === item.url
                      ? "dark:text-green-900 text-green-950 bg-green-300 px-4 py-2"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
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
