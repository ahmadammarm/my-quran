"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = [
    { title: "Al-Quran", url: "/" },
    { title: "Al-Hadits", url: "/al-hadits" },
    { title: "Doa Harian", url: "/doa-harian" },
    { title: "Asmaul Husna", url: "/asmaul-husna" }
  ];

  const isActiveLink = (url: string) => {

    if (pathname === url) return true;

    if (url === "/" && pathname.startsWith("/surah/")) return true;

    return false;
  };

  const handleToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-500 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white drop-shadow-sm">
              Mouslemify
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {NavLinks.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`px-5 py-2 text-base font-medium rounded-full transition-all duration-300 ${
                  isActiveLink(item.url)
                    ? "bg-white text-green-600 shadow-md"
                    : "text-white hover:bg-green-400 hover:shadow-md"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              onClick={handleToggle}
              className="text-white hover:bg-green-400 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-green-200">
          <ul className="space-y-2 p-4">
            {NavLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className={`block text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActiveLink(item.url)
                      ? "bg-green-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
