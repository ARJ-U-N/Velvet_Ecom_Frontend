export default function AboutPage() {
  return (
    <>
      {/* This SVG defines the shape for the Hero Mask. 
        It has height=0 so it is invisible, but the CSS uses its ID.
      */}
      <svg className="absolute" height="0" width="0">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="hero-mask">
            <path d="M0.5,0 C0.7,0 0.9,0.1 1,0.3 L1,0.7 C0.9,0.9 0.7,1 0.5,1 C0.3,1 0.1,0.9 0,0.7 L0,0.3 C0.1,0.1 0.3,0 0.5,0"></path>
            <path d="M0.1,0.2 C0.3,-0.1 0.7,-0.1 0.9,0.2 C1.1,0.4 1.1,0.8 0.9,1 C0.7,1.2 0.3,1.2 0.1,1 C-0.1,0.8 -0.1,0.4 0.1,0.2"></path>
          </clipPath>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full opacity-20 bg-cover bg-fixed"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuCWNhOf2Zjs9q45UhwJ0T6FuMQmf9JG9mvVAtMyJJ4W6dL0ByJszPhM5ZcIDBbOh0kPgIbaxmLi9wHh5HYDADCprv642dGaHyixB34so46Q6byNkgGlDusNGQilAAeK4PyV2cyUCsI3BGc7QjUWkRGY0u_MAgALumh6LfPdnVL6KQezM7aOxO7v9SlRFeYd6JSxyNMv-0BsardI5m3cjEpz385-cc2WJTvWuTVr4k7Go5RlfGnC40ldyTetmMy1dAsxnXl8EhS5Q")' }}
          ></div>
        </div>
        <div className="relative z-10 max-w-[1200px] w-full px-10 text-center">
          <div className="mx-auto w-full max-w-4xl aspect-[16/9] mb-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
              style={{ 
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaJCJ934K1k2PWUKP8ETyM_pcpoe-qLHP3KUT1Y51_kiRuJXBtxjelumVsSqc265tncj_mf4EKU2dbot6aTt_EtRXUxyCMfZs6dSIcpRhUiadFX4Ye2QahO_SR7EaTidsRpSVydvJqZm-AZF7tbhhPS1MvLvqOIyupy6CDr72JL_X4I551LB-smWZPLz1iVTyeTcMQTVg4aHqdhM9SPM_75bxzNWgtNWR1nq1kIWYA_pttPlYfV5sU3xi38FrNmojiAJcIhwLDOZQ")', 
                borderRadius: '48% 52% 43% 57% / 41% 48% 52% 59%' 
              }}
            >
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 mb-6 block">Our Origin</span>
          <h1 className="font-serif text-6xl md:text-8xl leading-tight text-primary">
            Crafted for the <span className="italic">Senses</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40">Philosophy</span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">The Philosophy <br /><span className="italic">Flow</span></h2>
            <p className="text-lg text-primary/70 leading-relaxed font-light max-w-lg">
              We believe coffee is a liquid architecture. Every curve of our brewer is designed to guide the water with intention, mimicking the natural rhythms of a morning stream. It is not just about extraction; it is about the grace of the process.
            </p>
            <div className="pt-4">
              <button className="border-b-2 border-primary/20 pb-1 text-sm font-bold uppercase tracking-widest hover:border-primary transition-all">Discover the geometry</button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div 
              className="aspect-square organic-frame bg-cover bg-center shadow-2xl overflow-hidden" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnQTNYjn_Z3XGjAsiwYH8ZuKwxQisX0vpK1mvlTwd1FDCJYcKiOpvLyJZt_9-2zterc5ErVdsiv6Uu3RqbyB8zY_qEAjvLmTSEvovtWGXjv_QKma5GQv02MJXYYbx45NBBK1a9r1vklk8VfhrvX902SlTuTe5yzO-TPbTwWDYhJkZ8Uy62ScTZY8tIE8Y9-NpHItQRx4kYF2XL_18bucB58RYsj2HraEqoEGcgSOrIftIHG_8MZw55URuzgVRwYCWhTBnFu30B2BU")' }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* Purity / Materials Section */}
      <section className="py-32 px-10 bg-beige-surface/30">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div 
            className="aspect-square organic-frame-alt bg-cover bg-center shadow-2xl overflow-hidden" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIIZPF0cj7Tt6kx_s0IxFEKmUUkmZSjfxX0P6OwBs4dRRJrFtWIsUJ1fkw41PwvfEClUwWtWw-SDcmT8XFKNKW9_ZVNl-z_EPPrYS49fGu8LX6Zd6aTnvN1VRj7UOFI6_QsidE7v2ANO7SYytw3qUH35NFY6q1_1OJQ1ia4lkZFMgeBemj0pmC3Pro7c88ged1EjTOmj4yZtFZFLQArbFiW5-EM5M1ndng9tOJFrkgzMfnWHoCVimpQPgMqBl0gh8ZRldBG0RU6RY")' }}
          >
          </div>
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40">Purity</span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">Honest <br /><span className="italic">Materials</span></h2>
            <p className="text-lg text-primary/70 leading-relaxed font-light max-w-lg">
              Tactility is at the heart of our design. We source hand-blown borosilicate glass for its purity and thermal precision, paired with anodized aluminum that gains character with every brew. No plastic, no shortcuts—only materials that respect the bean.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                <span className="w-1 h-1 bg-primary rounded-full"></span> Laboratory Grade Glass
              </li>
              <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                <span className="w-1 h-1 bg-primary rounded-full"></span> Artisan Finished Metal
              </li>
              <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                <span className="w-1 h-1 bg-primary rounded-full"></span> Sustainably Sourced
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Founder Vision Section */}
      <section className="py-40 px-10">
        <div className="max-w-[900px] mx-auto text-center space-y-12">
          <div 
            className="w-48 h-48 mx-auto founder-frame bg-cover bg-center shadow-xl mb-12" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMCBsBSdC_uqLhJYNb59Qmuv1mk0Kz3hoBONYtgSVHZLNWwZV65bmgtG0RteR4iQSiuNi5G6FmFn-_jbrKldzeTIeMx_HDKbhqAX35JAhXSzHwcWqwDgZZG3dCi_dQAvw1RQ0e7rNrvEJ6OHU0_Exv1hBZZg8Dhclkr54anCx3Wj98IQKI7yDNy_SFCCWs-UC5iAFXcB1r3FMs7MSWVqQu8Ucuh9kbchMOE8idYhxeB9_ok-YJvpu5pdBRnNQKCiqR6g1I7hZcU5I")' }}
          >
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40">The Vision</span>
            <blockquote className="font-serif text-3xl md:text-4xl italic text-primary leading-relaxed">
              "We didn't set out to build another coffee maker. We wanted to create a vessel for mindfulness—an object that bridges the gap between technical precision and human warmth."
            </blockquote>
            <div className="pt-8">
              <p className="font-bold text-sm uppercase tracking-widest">Elias Thorne</p>
              <p className="text-xs italic text-primary/50 mt-1">Founding Artisan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-10 bg-primary text-oatmeal overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full organic-frame bg-oatmeal rotate-12 -translate-y-20 translate-x-20"></div>
        </div>
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl mb-12">Join the Ritual</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <button className="bg-oatmeal text-primary px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all">
              Shop the Collection
            </button>
            <button className="bg-transparent border border-white/20 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Brewing Guides
            </button>
          </div>
        </div>
      </section>
    </>
  );
}