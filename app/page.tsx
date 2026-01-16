export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-10 lg:px-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-[1440px] mx-auto">
          <div className="order-2 lg:order-1 z-10 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">Limited Release No. 03</span>
              <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] text-primary">
                The Ritual of <br /><span className="italic">Precision</span>
              </h1>
              <p className="text-lg max-w-md text-primary/80 leading-relaxed font-light">
                Experience the intersection of artisanal craftsmanship and thermal stability. A morning coffee ritual reimagined through organic modernism.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20">
                Pre-order Now
              </button>
              <button className="bg-transparent border border-primary/20 text-primary px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-beige-surface transition-all">
                Explore Design
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square">
            {/* Organic Blob Image Mask - FIXED CLASS NAME */}
            <div
              className="absolute inset-0 rounded-blob bg-cover bg-center overflow-hidden shadow-2xl"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuCWNhOf2Zjs9q45UhwJ0T6FuMQmf9JG9mvVAtMyJJ4W6dL0ByJszPhM5ZcIDBbOh0kPgIbaxmLi9wHh5HYDADCprv642dGaHyixB34so46Q6byNkgGlDusNGQilAAeK4PyV2cyUCsI3BGc7QjUWkRGY0u_MAgALumh6LfPdnVL6KQezM7aOxO7v9SlRFeYd6JSxyNMv-0BsardI5m3cjEpz385-cc2WJTvWuTVr4k7Go5RlfGnC40ldyTetmMy1dAsxnXl8EhS5Q")' }}
            >
            </div>
            {/* Secondary Accent Shape - FIXED CLASS NAME */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-blob-alt bg-primary/10 -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-32 px-10 bg-beige-surface/30">
        <div className="max-w-[960px] mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl italic text-primary">Softly Structured</h2>
          <p className="text-xl leading-relaxed text-primary/70 font-light">
            Every curve of The Velvet Brewer is informed by the flow of water. We’ve combined industrial-grade thermal engineering with a form factor that feels at home in a curated space.
          </p>
        </div>
      </section>

      {/* Technical Edit Grid */}
      <section className="py-32 px-10 lg:px-40">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-primary/10 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40">Specifications</span>
              <h3 className="font-serif text-4xl mt-2">The Technical Edit</h3>
            </div>
            <p className="text-sm font-medium text-primary/60 max-w-xs text-right hidden md:block">
              Precision engineering meets artisanal glass-blowing for the ultimate extraction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 border border-primary/10 rounded-xl overflow-hidden">
            {/* Column 1 */}
            <div className="bg-background-light p-10 space-y-6 flex flex-col justify-between hover:bg-beige-surface transition-colors">
              <span className="material-symbols-outlined text-3xl font-light">thermostat</span>
              <div className="space-y-3">
                <h4 className="text-lg font-bold tracking-tight">Thermal Control</h4>
                <p className="text-sm leading-relaxed text-primary/70">Maintain 94°C precision throughout the entire extraction process for consistent flavor profiles and reduced bitterness.</p>
              </div>
            </div>
            {/* Column 2 */}
            <div className="bg-background-light p-10 space-y-6 flex flex-col justify-between hover:bg-beige-surface transition-colors">
              <span className="material-symbols-outlined text-3xl font-light">architecture</span>
              <div className="space-y-3">
                <h4 className="text-lg font-bold tracking-tight">Geometric Flow</h4>
                <p className="text-sm leading-relaxed text-primary/70">Optimized 60-degree conical basket design engineered for ideal flow rate and managed turbulence during saturation.</p>
              </div>
            </div>
            {/* Column 3 */}
            <div className="bg-background-light p-10 space-y-6 flex flex-col justify-between hover:bg-beige-surface transition-colors">
              <span className="material-symbols-outlined text-3xl font-light">precision_manufacturing</span>
              <div className="space-y-3">
                <h4 className="text-lg font-bold tracking-tight">Technical Materials</h4>
                <p className="text-sm leading-relaxed text-primary/70">Hand-finished green-anodized aluminum paired with laboratory-grade hand-blown borosilicate glass carafes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Image Grid */}
      <section className="py-20 px-10 lg:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="lg:col-span-2 aspect-video rounded-blob bg-cover bg-center shadow-xl hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaJCJ934K1k2PWUKP8ETyM_pcpoe-qLHP3KUT1Y51_kiRuJXBtxjelumVsSqc265tncj_mf4EKU2dbot6aTt_EtRXUxyCMfZs6dSIcpRhUiadFX4Ye2QahO_SR7EaTidsRpSVydvJqZm-AZF7tbhhPS1MvLvqOIyupy6CDr72JL_X4I551LB-smWZPLz1iVTyeTcMQTVg4aHqdhM9SPM_75bxzNWgtNWR1nq1kIWYA_pttPlYfV5sU3xi38FrNmojiAJcIhwLDOZQ")' }}
          >
          </div>
          <div
            className="aspect-[4/5] rounded-blob-alt bg-cover bg-center shadow-xl translate-y-12"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnQTNYjn_Z3XGjAsiwYH8ZuKwxQisX0vpK1mvlTwd1FDCJYcKiOpvLyJZt_9-2zterc5ErVdsiv6Uu3RqbyB8zY_qEAjvLmTSEvovtWGXjv_QKma5GQv02MJXYYbx45NBBK1a9r1vklk8VfhrvX902SlTuTe5yzO-TPbTwWDYhJkZ8Uy62ScTZY8tIE8Y9-NpHItQRx4kYF2XL_18bucB58RYsj2HraEqoEGcgSOrIftIHG_8MZw55URuzgVRwYCWhTBnFu30B2BU")' }}
          >
          </div>
          <div
            className="aspect-[4/5] rounded-blob bg-cover bg-center shadow-xl -translate-y-8"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMCBsBSdC_uqLhJYNb59Qmuv1mk0Kz3hoBONYtgSVHZLNWwZV65bmgtG0RteR4iQSiuNi5G6FmFn-_jbrKldzeTIeMx_HDKbhqAX35JAhXSzHwcWqwDgZZG3dCi_dQAvw1RQ0e7rNrvEJ6OHU0_Exv1hBZZg8Dhclkr54anCx3Wj98IQKI7yDNy_SFCCWs-UC5iAFXcB1r3FMs7MSWVqQu8Ucuh9kbchMOE8idYhxeB9_ok-YJvpu5pdBRnNQKCiqR6g1I7hZcU5I")' }}
          >
          </div>
        </div>
      </section>

      {/* Product Details Overlay Section */}
      <section className="relative py-40 px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl italic">Designed for <br />Sensory Focus</h2>
              <p className="text-lg text-primary/70 leading-relaxed font-light">
                Beyond the numbers, the Velvet Brewer is a tactile object. The satin-finish aluminum feels cool to the touch, while the weighted glass provides a satisfying heft during the pour.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">Hand-Blown Borosilicate</span>
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">Green-Anodized Finish</span>
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">Lifetime Component Guarantee</span>
              </li>
            </ul>
          </div>
          <div className="bg-beige-surface/50 rounded-xl p-12 border border-primary/5 shadow-inner">
            <div
              className="aspect-square bg-cover bg-center rounded-lg shadow-2xl mb-8"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIIZPF0cj7Tt6kx_s0IxFEKmUUkmZSjfxX0P6OwBs4dRRJrFtWIsUJ1fkw41PwvfEClUwWtWw-SDcmT8XFKNKW9_ZVNl-z_EPPrYS49fGu8LX6Zd6aTnvN1VRj7UOFI6_QsidE7v2ANO7SYytw3qUH35NFY6q1_1OJQ1ia4lkZFMgeBemj0pmC3Pro7c88ged1EjTOmj4yZtFZFLQArbFiW5-EM5M1ndng9tOJFrkgzMfnWHoCVimpQPgMqBl0gh8ZRldBG0RU6RY")' }}
            >
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-serif">$245.00</p>
                <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Ships in 4-6 weeks</p>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}