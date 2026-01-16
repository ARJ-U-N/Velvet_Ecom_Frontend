import Link from "next/link";

export default function CollectionsPage() {
  return (
    // FIXED: Added dark:bg-background-dark and dark:text-oatmeal
    <div className="bg-oatmeal dark:bg-background-dark min-h-screen text-primary dark:text-oatmeal transition-colors duration-300">
      <main className="pt-32 pb-24 px-10 max-w-[1440px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-primary/10 dark:border-oatmeal/10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 dark:text-oatmeal/40 italic">Curated Equipment</span>
            <h2 className="font-serif text-5xl md:text-6xl italic">The Collection</h2>
          </div>
          <p className="text-sm font-light text-primary/60 dark:text-oatmeal/60 max-w-sm leading-relaxed">
            A precise selection of brewing vessels and accessories designed for the meticulous home barista.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-10 shrink-0">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 dark:text-oatmeal/40 mb-6 pb-2 border-b border-primary/5 dark:border-oatmeal/5">Categories</h3>
              <ul className="space-y-4">
                <li><a className="text-sm font-medium hover:italic transition-all flex items-center justify-between group" href="#">Brewers <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity italic">08</span></a></li>
                <li><a className="text-sm font-medium hover:italic transition-all flex items-center justify-between group" href="#">Accessories <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity italic">12</span></a></li>
                <li><a className="text-sm font-medium hover:italic transition-all flex items-center justify-between group" href="#">Filters <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity italic">04</span></a></li>
                <li><a className="text-sm font-medium hover:italic transition-all flex items-center justify-between group" href="#">Kettles <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity italic">03</span></a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 dark:text-oatmeal/40 mb-6 pb-2 border-b border-primary/5 dark:border-oatmeal/5">Sort By</h3>
              <ul className="space-y-4">
                <li><a className="text-sm font-medium flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-oatmeal"></span> Newest Arrivals</a></li>
                <li><a className="text-sm font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">Price: Low to High</a></li>
                <li><a className="text-sm font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">Price: High to Low</a></li>
              </ul>
            </div>
            <div className="pt-10">
              {/* FIXED: Dark mode for the guide box */}
              <div className="bg-primary/5 dark:bg-oatmeal/5 p-8 rounded-2xl">
                <p className="font-serif italic text-lg mb-4">The Ritual Guide</p>
                <p className="text-xs leading-relaxed text-primary/70 dark:text-oatmeal/70 mb-6">Learn the precise geometry of the perfect extraction.</p>
                <a className="text-[10px] font-bold uppercase tracking-widest border-b border-primary/20 dark:border-oatmeal/20 pb-1" href="#">Read More</a>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              
              {/* Product 1 - NOW LINKED */}
              <Link href="/product/velvet-brewer" className="group cursor-pointer block">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  {/* FIXED: Dark mode background for image blob */}
                  <div className="w-full h-full bg-beige-surface dark:bg-white/10 blob-1 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    <img alt="The Velvet Brewer" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuCWNhOf2Zjs9q45UhwJ0T6FuMQmf9JG9mvVAtMyJJ4W6dL0ByJszPhM5ZcIDBbOh0kPgIbaxmLi9wHh5HYDADCprv642dGaHyixB34so46Q6byNkgGlDusNGQilAAeK4PyV2cyUCsI3BGc7QjUWkRGY0u_MAgALumh6LfPdnVL6KQezM7aOxO7v9SlRFeYd6JSxyNMv-0BsardI5m3cjEpz385-cc2WJTvWuTVr4k7Go5RlfGnC40ldyTetmMy1dAsxnXl8EhS5Q" />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl italic group-hover:underline decoration-primary/30 underline-offset-4 decoration-1 transition-all">The Velvet Brewer</h4>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-primary/40 dark:text-oatmeal/40 uppercase">Anodized Green</p>
                  </div>
                  <span className="text-sm font-medium">$245.00</span>
                </div>
                <button className="w-full py-4 border border-primary/10 dark:border-oatmeal/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-all duration-300">
                  Add to Cart
                </button>
              </Link>

              {/* Product 2 - LINKED */}
              <Link href="/product/glass-carafe" className="group cursor-pointer block">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="w-full h-full bg-beige-surface dark:bg-white/10 blob-2 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    <img alt="Glass Carafe" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaJCJ934K1k2PWUKP8ETyM_pcpoe-qLHP3KUT1Y51_kiRuJXBtxjelumVsSqc265tncj_mf4EKU2dbot6aTt_EtRXUxyCMfZs6dSIcpRhUiadFX4Ye2QahO_SR7EaTidsRpSVydvJqZm-AZF7tbhhPS1MvLvqOIyupy6CDr72JL_X4I551LB-smWZPLz1iVTyeTcMQTVg4aHqdhM9SPM_75bxzNWgtNWR1nq1kIWYA_pttPlYfV5sU3xi38FrNmojiAJcIhwLDOZQ" />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl italic group-hover:underline decoration-primary/30 underline-offset-4 decoration-1 transition-all">Glass Vessel No. 1</h4>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-primary/40 dark:text-oatmeal/40 uppercase">Hand-blown</p>
                  </div>
                  <span className="text-sm font-medium">$85.00</span>
                </div>
                <button className="w-full py-4 border border-primary/10 dark:border-oatmeal/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-all duration-300">
                  Add to Cart
                </button>
              </Link>

              {/* Product 3 - LINKED */}
              <Link href="/product/ceramic-cups" className="group cursor-pointer block">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="w-full h-full bg-beige-surface dark:bg-white/10 blob-3 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    <img alt="Ceramic Cups" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQTNYjn_Z3XGjAsiwYH8ZuKwxQisX0vpK1mvlTwd1FDCJYcKiOpvLyJZt_9-2zterc5ErVdsiv6Uu3RqbyB8zY_qEAjvLmTSEvovtWGXjv_QKma5GQv02MJXYYbx45NBBK1a9r1vklk8VfhrvX902SlTuTe5yzO-TPbTwWDYhJkZ8Uy62ScTZY8tIE8Y9-NpHItQRx4kYF2XL_18bucB58RYsj2HraEqoEGcgSOrIftIHG_8MZw55URuzgVRwYCWhTBnFu30B2BU" />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl italic group-hover:underline decoration-primary/30 underline-offset-4 decoration-1 transition-all">Sensory Cups (Set)</h4>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-primary/40 dark:text-oatmeal/40 uppercase">Matte White</p>
                  </div>
                  <span className="text-sm font-medium">$55.00</span>
                </div>
                <button className="w-full py-4 border border-primary/10 dark:border-oatmeal/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-all duration-300">
                  Add to Cart
                </button>
              </Link>

              {/* Product 4 - LINKED */}
              <Link href="/product/precision-kettle" className="group cursor-pointer block">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="w-full h-full bg-beige-surface dark:bg-white/10 blob-3 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    <img alt="Precision Kettle" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCBsBSdC_uqLhJYNb59Qmuv1mk0Kz3hoBONYtgSVHZLNWwZV65bmgtG0RteR4iQSiuNi5G6FmFn-_jbrKldzeTIeMx_HDKbhqAX35JAhXSzHwcWqwDgZZG3dCi_dQAvw1RQ0e7rNrvEJ6OHU0_Exv1hBZZg8Dhclkr54anCx3Wj98IQKI7yDNy_SFCCWs-UC5iAFXcB1r3FMs7MSWVqQu8Ucuh9kbchMOE8idYhxeB9_ok-YJvpu5pdBRnNQKCiqR6g1I7hZcU5I" />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl italic group-hover:underline decoration-primary/30 underline-offset-4 decoration-1 transition-all">Flow Kettle</h4>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-primary/40 dark:text-oatmeal/40 uppercase">Electric</p>
                  </div>
                  <span className="text-sm font-medium">$195.00</span>
                </div>
                <button className="w-full py-4 border border-primary/10 dark:border-oatmeal/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-all duration-300">
                  Add to Cart
                </button>
              </Link>

              {/* Product 5 - LINKED */}
              <Link href="/product/precision-scale" className="group cursor-pointer block">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="w-full h-full bg-beige-surface dark:bg-white/10 blob-1 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    <img alt="Scale" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIIZPF0cj7Tt6kx_s0IxFEKmUUkmZSjfxX0P6OwBs4dRRJrFtWIsUJ1fkw41PwvfEClUwWtWw-SDcmT8XFKNKW9_ZVNl-z_EPPrYS49fGu8LX6Zd6aTnvN1VRj7UOFI6_QsidE7v2ANO7SYytw3qUH35NFY6q1_1OJQ1ia4lkZFMgeBemj0pmC3Pro7c88ged1EjTOmj4yZtFZFLQArbFiW5-EM5M1ndng9tOJFrkgzMfnWHoCVimpQPgMqBl0gh8ZRldBG0RU6RY" />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl italic group-hover:underline decoration-primary/30 underline-offset-4 decoration-1 transition-all">Precision Scale</h4>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-primary/40 dark:text-oatmeal/40 uppercase">0.1g Accuracy</p>
                  </div>
                  <span className="text-sm font-medium">$120.00</span>
                </div>
                <button className="w-full py-4 border border-primary/10 dark:border-oatmeal/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-all duration-300">
                  Add to Cart
                </button>
              </Link>

              {/* Product 6 - Coming Soon (Disabled Link) */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="w-full h-full bg-beige-surface dark:bg-white/10 blob-2 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center p-12 text-center">
                      <span className="font-serif italic text-primary/30 dark:text-oatmeal/30 text-lg">More objects arriving soon</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl italic opacity-30 text-primary dark:text-oatmeal">Limited Edition Scoop</h4>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-primary/20 dark:text-oatmeal/20 uppercase italic">Coming Fall 2024</p>
                  </div>
                  <span className="text-sm font-medium opacity-30">—</span>
                </div>
                <button className="w-full py-4 border border-primary/5 dark:border-oatmeal/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary/20 dark:text-oatmeal/20 cursor-not-allowed" disabled>
                  Notify Me
                </button>
              </div>

            </div>

            {/* Pagination */}
            <div className="mt-24 pt-8 border-t border-primary/10 dark:border-oatmeal/10 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 dark:text-oatmeal/40">Showing 1–5 of 24 Results</span>
              <div className="flex gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/10 dark:border-oatmeal/20 hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">west</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white dark:bg-oatmeal dark:text-primary">
                  <span className="text-[10px] font-bold">1</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/10 dark:border-oatmeal/20 hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-colors">
                  <span className="text-[10px] font-bold">2</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/10 dark:border-oatmeal/20 hover:bg-primary hover:text-white dark:hover:bg-oatmeal dark:hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}