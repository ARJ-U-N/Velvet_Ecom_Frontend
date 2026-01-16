"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Check local storage on load
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/5 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
          
          {/* --- LEFT SIDE: LOGO --- */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-primary dark:text-oatmeal text-2xl group-hover:rotate-12 transition-transform">coffee_maker</span>
              {/* Adjusted font size for mobile vs desktop */}
              <h1 className="font-serif italic text-lg md:text-xl font-bold tracking-tight text-primary dark:text-oatmeal">The Velvet Brewer</h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/collections" className="text-sm font-medium tracking-wide text-primary dark:text-oatmeal hover:opacity-60 transition-opacity uppercase">
                Shop
              </Link>
              <Link href="/trade" className="text-sm font-medium tracking-wide text-primary dark:text-oatmeal hover:opacity-60 transition-opacity uppercase">
                Trade Portal
              </Link>
              <Link href="/about" className="text-sm font-medium tracking-wide text-primary dark:text-oatmeal hover:opacity-60 transition-opacity uppercase">
                Story
              </Link>
            </nav>
          </div>

          {/* --- RIGHT SIDE: ICONS --- */}
          <div className="flex items-center gap-2 md:gap-6">
            
            {/* Search - HIDDEN on Mobile, moved to menu */}
            <button className="hidden md:flex items-center justify-center hover:opacity-60 transition-opacity text-primary dark:text-oatmeal">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            
            {/* Cart - ALWAYS VISIBLE */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center justify-center hover:opacity-60 transition-opacity relative text-primary dark:text-oatmeal p-2"
            >
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
              <span className="absolute top-0 right-0 text-[10px] bg-primary text-white dark:bg-white dark:text-primary rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Theme Toggle - HIDDEN on Mobile, moved to menu */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center hover:opacity-60 transition-opacity text-primary dark:text-oatmeal"
            >
              {darkMode ? (
                <span className="material-symbols-outlined text-xl">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-xl">dark_mode</span>
              )}
            </button>

            {/* Hamburger - VISIBLE on Mobile */}
            <button 
              className="md:hidden flex items-center justify-center hover:opacity-60 transition-opacity text-primary dark:text-oatmeal ml-1 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/5 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 fade-in duration-200">
            
            {/* Mobile Search Bar (Added here) */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-primary/5 dark:bg-white/10 border-none rounded-full py-3 pl-10 pr-4 text-sm text-primary dark:text-oatmeal placeholder:text-primary/40 dark:placeholder:text-oatmeal/40 focus:ring-1 focus:ring-primary/20"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 dark:text-oatmeal/40 text-lg">search</span>
            </div>

            <nav className="flex flex-col gap-6 text-center">
              <Link href="/collections" className="text-lg font-serif italic text-primary dark:text-oatmeal hover:opacity-60 transition-opacity">
                Shop The Collection
              </Link>
              <Link href="/trade" className="text-lg font-serif italic text-primary dark:text-oatmeal hover:opacity-60 transition-opacity">
                Trade Portal
              </Link>
              <Link href="/about" className="text-lg font-serif italic text-primary dark:text-oatmeal hover:opacity-60 transition-opacity">
                Our Story
              </Link>
            </nav>

            {/* Footer Actions (Account + Theme Toggle) */}
            <div className="border-t border-primary/10 pt-6 flex justify-between items-center px-4">
              <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-primary/60 dark:text-oatmeal/60">
                <Link href="#">Account</Link>
                <Link href="#">Support</Link>
              </div>
              
              {/* Mobile Theme Toggle (Added here) */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-primary dark:text-oatmeal"
              >
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Theme</span>
                {darkMode ? (
                  <span className="material-symbols-outlined text-lg">light_mode</span>
                ) : (
                  <span className="material-symbols-outlined text-lg">dark_mode</span>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}