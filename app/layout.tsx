import "./globals.css";
import Navbar from "@/components/Navbar"; // <--- Importing your separate component
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Velvet Brewer - Lifestyle View Variant 3",
  description: "Artisanal coffee equipment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* New Fonts: Manrope & Noto Serif + Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-primary transition-colors duration-300">
        
        {/* --- NAVBAR COMPONENT --- */}
        {/* This replaces the long <header> code you had before */}
        <Navbar />

        {/* --- PAGE CONTENT --- */}
        <main className="pt-20">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-primary text-white/90 py-24 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
              <div className="space-y-6">
                <h2 className="font-serif italic text-2xl font-bold">The Velvet Brewer</h2>
                <p className="text-sm leading-relaxed text-white/60 font-light">
                  Elevating the domestic ritual through precision engineering and organic design.
                </p>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">camera</span>
                  </a>
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Navigation</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li><a className="hover:text-white transition-colors" href="/collections">Shop All</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Brewing Guides</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Replacement Glass</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Support</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li><a className="hover:text-white transition-colors" href="#">Shipping & Returns</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Technical Support</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
                  <li><a className="hover:text-white transition-colors" href="/contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Join the Ritual</h4>
                <div className="space-y-4">
                  <p className="text-xs text-white/60 leading-relaxed font-light italic">Sign up for early access to limited edition finishes and brewing masterclasses.</p>
                  <div className="flex border-b border-white/20 pb-2">
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-white/30 p-0" placeholder="Email Address" type="email" />
                    <button className="material-symbols-outlined text-white/40">arrow_forward</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              <p>© 2024 The Velvet Brewer. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}