"use client";

import { useState } from "react";

export default function ProductDetail() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#131614] dark:text-white selection:bg-primary/30 min-h-screen flex flex-col transition-colors duration-300">
      
      {/* SVG Masks Definition (Hidden) */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="organic-path">
            <path d="M0.1,0.2 C0.2,0.05 0.5,-0.05 0.8,0.1 C1,0.25 0.95,0.6 0.85,0.85 C0.7,1.05 0.3,1.05 0.1,0.8 C-0.1,0.6 0,0.4 0.1,0.2"></path>
          </clipPath>
          <clipPath clipPathUnits="objectBoundingBox" id="blob-1">
            <path d="M0.16,0.18 C0.3,-0.05 0.7,-0.02 0.88,0.22 C1,0.45 0.95,0.8 0.7,0.92 C0.45,1.05 0.1,0.9 0.02,0.65 C-0.05,0.4 0.02,0.4 0.16,0.18"></path>
          </clipPath>
          <clipPath clipPathUnits="objectBoundingBox" id="blob-2">
            <path d="M0.2,0.05 C0.5,-0.1 0.9,0.1 0.95,0.4 C1,0.7 0.8,0.95 0.5,0.98 C0.2,1 0,0.8 0,0.5 C0,0.2 0.05,0.15 0.2,0.05"></path>
          </clipPath>
          <clipPath clipPathUnits="objectBoundingBox" id="blob-3">
            <path d="M0.1,0.3 C0.2,0.1 0.5,0 0.8,0.1 C1,0.3 1,0.6 0.9,0.8 C0.7,1 0.3,1 0.1,0.8 C-0.1,0.6 0,0.4 0.1,0.3"></path>
          </clipPath>
        </defs>
      </svg>

      <main className="flex-1 pt-32 pb-40 px-6 md:px-10 max-w-[1440px] mx-auto w-full">
        
        {/* Desktop Layout: Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN: STICKY HERO IMAGE --- */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 flex justify-center">
            <div className="relative w-full max-w-[600px] aspect-square">
              <div className="absolute inset-0 bg-primary/5 rounded-[40%] blur-3xl scale-90"></div>
              {/* Main Product Image */}
              <div 
                className="w-full h-full bg-oatmeal dark:bg-neutral-800 overflow-hidden shadow-2xl transition-all duration-500"
                style={{ clipPath: 'url(#organic-path)' }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-HciAJpffyL6a-ZwfOUHi4_B6zfcHrk5aajJejBp0r3Lr1IFzzNfq67gwblzScKqtXJ6xUbAKZw297nIBKfkC5XRpwoZ4bA2fnos2I_YuXMZ7qL8m1LKW5iGYUbPh7TsTH974FE6Yz9iaMdjWPB3Ur2PmTQM9uXCVKtXbWWPYMg9XQ2snbKjWNUbHlTlJ2eRpYlrbzODndWQw32ZeosugreS72hjLX4SQj6jcUeKLuv5BwZ7Od-PL-R-9JcgS91OAeCAPixYe4a8")' }}
                ></div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: DETAILS & STORY --- */}
          <div className="lg:col-span-6 space-y-20">
            
            {/* Intro Block */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary dark:text-oatmeal leading-tight">
                  The Velvet Brewer
                </h1>
                <p className="text-2xl font-medium text-neutral-500 dark:text-neutral-400 italic">
                  $245.00
                </p>
              </div>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto lg:mx-0">
                Experience the art of slow coffee. Hand-crafted with organic shapes and premium materials for the ultimate sensory ritual.
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Capacity", value: "500ml" },
                { label: "Material", value: "Walnut Glass" },
                { label: "Craft", value: "Hand-Blown" },
                { label: "Brew Time", value: "4-6 mins" }
              ].map((spec, i) => (
                <div key={i} className="bg-oatmeal/50 dark:bg-neutral-800/50 p-6 rounded-xl border border-oatmeal dark:border-neutral-700 text-center hover:bg-oatmeal dark:hover:bg-neutral-800 transition-colors">
                  <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">{spec.label}</span>
                  <span className="text-lg font-bold text-primary dark:text-oatmeal">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Lifestyle Gallery (Zig-Zag) */}
            <div className="space-y-24 pt-12">
              
              {/* Block 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div 
                  className="w-full md:w-48 h-64 bg-oatmeal dark:bg-neutral-800 flex-shrink-0"
                  style={{ clipPath: 'url(#blob-1)' }}
                >
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhB4yNk49a3Ln1MCcl1Bpfm9PPKXMEGj0EXcTacZO7ICsSasllQkw0X6Co6WuApRd5eC5ky9ww70IH561uvKX-XT64rK74A0ibrJfX6mwZI-00RDSNBcbvsBsZlCfWoPrrolZBQnfSC4y9frdBMw1sKs7F3mHRfNzWQS8IxVN5X3y4tF9YGM3WKmPVZBnlpdcRjfOIB7I21kJMWRZUnvcNR3JE0HijdGecXxEpH-D1Z23YYab3HY9VHeu32AXu7GhmWyXb1ogFAec")' }}></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-primary dark:text-oatmeal">Ritual of Precision</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">Every curve of the Velvet Brewer is designed to facilitate the optimal water flow for a balanced extraction.</p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div 
                  className="w-full md:w-48 h-64 bg-oatmeal dark:bg-neutral-800 flex-shrink-0"
                  style={{ clipPath: 'url(#blob-2)' }}
                >
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc10pKewEXAXIbvLB1qkjQUwtuC6qOD4QCH2U-jRgmJKcoQhB4LXKvTW3-nVrMap6x3WzKkJMwVTPybOnbaymmRb5Bi6hWm02_-2vqDBP_t9mS4AmIPR1vRuJaRoEHg9AzxCivN2wWANSUiKR79aVF22bpEHWPXu6Lw-UmIkFZvRgejXqSDbCjvIjE3eabLEmYrSWDbEtUC_4ROqF85x5ZJGP-2_vOe5O5En0QdggyzDFPPCOfK9xJqDmvxZ0xgLeWs3vQo0tOtwM")' }}></div>
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-2xl font-bold mb-3 text-primary dark:text-oatmeal">Organic Modernism</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">Blends seamlessly into the contemporary home, acting as a sculptural piece even when not in use.</p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div 
                  className="w-full md:w-48 h-64 bg-oatmeal dark:bg-neutral-800 flex-shrink-0"
                  style={{ clipPath: 'url(#blob-3)' }}
                >
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6LQ3Nu9DBCdbA-umN_Vg1D4s3_sk-a4bz2u_mtsBOffKjlRmEW6wIAOtq5rDn76oxaZaEqVj4UX-ZQA69_mnO-T9QZj021USn3m15ZpemYblv3n2ny-AEcUKgfrLLAjGHG5B9c_q4rLmM9uiq-odJkZuUBg0ZSy-LyEa54vnVxD7BZJp-emn3qA200qMl814Z5n09GXH1qeXiVxCeC6j9xeZ69dBDuQuqjWPATQCkuCr39w6u4TvCwKhtabUeeaDT8JD-G5e5gG8")' }}></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-primary dark:text-oatmeal">Sustainable Luxury</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">Crafted from reclaimed walnut and recycled borosilicate glass, luxury that honors the earth.</p>
                </div>
              </div>

            </div>

            {/* Final Detail Block */}
            <div className="bg-primary/5 dark:bg-white/5 rounded-3xl p-10 text-center">
              <span className="material-symbols-outlined text-4xl text-primary dark:text-oatmeal mb-4">verified</span>
              <h2 className="text-2xl font-bold mb-4 text-primary dark:text-oatmeal">Lifetime Craftsmanship</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-0 max-w-md mx-auto">Each brewer is numbered and signed by the artisan. Includes a certificate of authenticity and a maintenance kit.</p>
            </div>

          </div>
        </div>
      </main>

      {/* Floating Action Button - Add to Cart */}
      <div className="fixed bottom-8 left-0 right-0 z-40 px-6 flex justify-center">
        <button className="flex items-center gap-4 bg-primary text-white dark:bg-oatmeal dark:text-primary px-12 py-5 rounded-full shadow-2xl hover:shadow-[0_25px_60px_rgba(31,51,46,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 group">
          <span className="text-lg font-bold tracking-tight">Add to Cart</span>
          <span className="w-px h-6 bg-white/20 dark:bg-primary/20"></span>
          <span className="font-medium">$245.00</span>
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>

    </div>
  );
}