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
    <nav className="bg-primary shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              Mouslemify
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {NavLinks.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`px-4 py-2 text-lg ${
                  isActiveLink(item.url)
                    ? "text-green-800 bg-gray-100 rounded-[10%]"
                    : "text-black"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              onClick={handleToggle}
              className="text-black hover:text-white focus:outline-none"
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
        <div className="md:hidden bg-gray-100 dark:bg-green-900 shadow-md">
          <ul className="space-y-4 p-4">
            {NavLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className={`block text-lg font-semibold px-4 py-2 ${
                    isActiveLink(item.url)
                      ? "dark:text-green-900 text-green-950 bg-green-300 px-4 py-2"
                      : "text-black dark:text-white"
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
