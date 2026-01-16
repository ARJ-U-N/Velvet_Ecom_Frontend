import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90 py-24 px-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-serif italic text-2xl font-bold">The Velvet Brewer</h2>
            <p className="text-sm leading-relaxed text-white/60 font-light">
              Elevating the domestic ritual through precision engineering and organic design.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">camera_alt</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link className="hover:text-white transition-colors" href="/collections">Shop All</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/trade">Trade Portal</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/about">Our Story</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Sustainability</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link className="hover:text-white transition-colors" href="#">Shipping & Returns</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Technical Support</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Warranty</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <p>© 2024 The Velvet Brewer. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}