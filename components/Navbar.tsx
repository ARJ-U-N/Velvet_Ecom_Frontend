"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for Cart Drawer
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
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          
          {/* --- LEFT SIDE: LOGO & DESKTOP NAV --- */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-primary dark:text-oatmeal text-2xl group-hover:rotate-12 transition-transform">coffee_maker</span>
              <h1 className="font-serif italic text-xl font-bold tracking-tight text-primary dark:text-oatmeal">The Velvet Brewer</h1>
            </Link>
            
            {/* Desktop Navigation (Hidden on Mobile) */}
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

          {/* --- RIGHT SIDE: ICONS & HAMBURGER --- */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="flex items-center justify-center hover:opacity-60 transition-opacity text-primary dark:text-oatmeal">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            
            {/* Shopping Bag Button (Triggers Cart Drawer) */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center justify-center hover:opacity-60 transition-opacity relative text-primary dark:text-oatmeal"
            >
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
              <span className="absolute -top-1 -right-1 text-[10px] bg-primary text-white dark:bg-white dark:text-primary rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center hover:opacity-60 transition-opacity text-primary dark:text-oatmeal"
            >
              {darkMode ? (
                <span className="material-symbols-outlined text-xl">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-xl">dark_mode</span>
              )}
            </button>

            {/* Mobile Hamburger Button (Visible only on Mobile) */}
            <button 
              className="md:hidden flex items-center justify-center hover:opacity-60 transition-opacity text-primary dark:text-oatmeal ml-2"
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
            <nav className="flex flex-col gap-6 text-center">
              <Link href="/collections" className="text-lg font-serif italic text-primary dark:text-oatmeal hover:opacity-60 transition-opacity">
                Shop The Collection
              </Link>
              <Link href="/trade" className="text-sm font-medium tracking-wide text-primary dark:text-oatmeal hover:opacity-60 transition-opacity uppercase">
                Trade Portal
              </Link>
              <Link href="/about" className="text-lg font-serif italic text-primary dark:text-oatmeal hover:opacity-60 transition-opacity">
                Our Story
              </Link>
            </nav>
            <div className="border-t border-primary/10 pt-6 flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-primary/60 dark:text-oatmeal/60">
              <Link href="#">Account</Link>
              <Link href="#">Support</Link>
            </div>
          </div>
        )}
      </header>

      {/* --- CART DRAWER COMPONENT --- */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}