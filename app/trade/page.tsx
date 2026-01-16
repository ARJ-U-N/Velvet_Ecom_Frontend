import Link from "next/link";
export default function TradePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      
      {/* --- HERO HEADER --- */}
      <header className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-60 mb-6 text-primary dark:text-white">B2B Partnerships</p>
            <h2 className="font-display text-6xl md:text-8xl mb-8 leading-[0.9] text-primary dark:text-white">
              Scale with <br /> <span className="italic font-serif">Precision</span>
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-md mb-10 leading-relaxed text-primary dark:text-gray-300">
              Equipping the world's finest cafes, hotels, and workspaces with artisanal engineering and organic modernism.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all">
            <span className="material-icons"></span>
            Start a Conversation
          </button>
        </Link>
              <button className="border border-primary/20 dark:border-white/20 px-10 py-4 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all text-primary dark:text-white">
                Customer Care
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="blob-shape overflow-hidden aspect-[4/5] bg-gray-200 dark:bg-gray-800 shadow-2xl transform rotate-3">
              <img alt="Premium cafe environment" className="w-full h-full object-cover -rotate-3 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZpf75_3uoSIpjHLNcJNg8j_OIHzNJ_RoiMHrWisIC-GSoViLN3tYYdtOHloBknN1h74DV-hRXmk3FacU23cT1cG1XSyDs3vLclVQSV6RcJBCQnjDA3pWsE1rqpnreo8Cx317elZQWihH3GxJhrvFO1hlnwDOAUVOfsZMJaeoPKr6UJFnjgONgXKTpNPdh-WYbo8LwoRLWpAoCD1VusqMI--N8kYjE144r8OlBLXEfWhizAwyFFWNOwK0vspNeFyLIAcZ2mOvD7w" />
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 dark:bg-primary/20 blob-shape-2 blur-3xl"></div>
          </div>
        </div>
      </header>

      {/* --- TRUSTED BRANDS --- */}
      <section className="border-y border-black/5 dark:border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] mb-10 opacity-40 text-primary dark:text-white">Trusted by Global Tastemakers</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale text-primary dark:text-white">
            <span className="font-display text-2xl">Maison</span>
            <span className="font-display text-2xl">L'Atelier</span>
            <span className="font-display text-2xl">Nordic Roast</span>
            <span className="font-display text-2xl">Vessel Coffee</span>
            <span className="font-display text-2xl">The Foundry</span>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest font-medium mb-4 text-primary dark:text-gray-400">The Trade Advantage</p>
            <h3 className="font-display text-4xl md:text-5xl text-primary dark:text-white">Engineered for Commercial Performance</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-primary dark:text-white">
            {/* Card 1 */}
            <div className="p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary dark:bg-white dark:text-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <span className="material-icons">inventory_2</span>
              </div>
              <h4 className="font-display text-2xl mb-4">Volume Pricing</h4>
              <p className="opacity-70 leading-relaxed">Tiered wholesale rates designed to support your growth, from boutique cafes to global hospitality groups.</p>
            </div>
            {/* Card 2 */}
            <div className="p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary dark:bg-white dark:text-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <span className="material-icons">brush</span>
              </div>
              <h4 className="font-display text-2xl mb-4">Custom Branding</h4>
              <p className="opacity-70 leading-relaxed">Bespoke laser etching and custom finishes to align our equipment perfectly with your brand identity.</p>
            </div>
            {/* Card 3 */}
            <div className="p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary dark:bg-white dark:text-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <span className="material-icons">support_agent</span>
              </div>
              <h4 className="font-display text-2xl mb-4">Priority Support</h4>
              <p className="opacity-70 leading-relaxed">Dedicated account managers and expedited shipping to ensure your service never misses a beat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA / CONVERSATION SECTION --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto relative overflow-hidden bg-primary rounded-[3rem] p-12 md:p-24 text-white">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-white/5 blob-shape rotate-12"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display text-4xl md:text-6xl mb-8 leading-tight">Expert Guidance, <br /> <span className="italic font-serif">On Demand</span></h3>
              <p className="text-xl opacity-80 mb-10 max-w-md">Our craftsmen are ready to help you configure the perfect setup for your unique space.</p>
            <Link href="/contact">
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all">
            <span className="material-icons">3c</span>
            Start a Conversation
          </button>
        </Link>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="blob-shape overflow-hidden aspect-square border-4 border-white/10">
                  <img alt="Detail shot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbfEAUPSR2ederBSUHsz15ab6qXRyV_w43jnElrQMgcuFf7xflwfckLStGK31fcBK2_k7QP24KPej1zkHgH7wUtzlNpGUT2Gra37L4pciYjhPt4yVtFG22JNOK6MGk-WTNjGwApLc9lpZZe7bjyoikLdJgKJyPFyJDXxyF3ywY26CBFi0gJRzAtnL7SRaZyYXus_GzQuBKKHToWcj9F2TgZWrl1R8JPcoqtNUDfcc17B1ynB0BHu8PvfdLSVU9ZXzQE8YFnjRGg" />
                </div>
                <div className="blob-shape-2 overflow-hidden aspect-square border-4 border-white/10 mt-12">
                  <img alt="Detail shot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_YOBLGFKbsEFQA7EhKuo2ZubuFFmR1jpvHpB9S5R-1KeWl12JvCjCfdUD-No8m9Q4u8BZyzwFVkyM-GNA_9U29QomVW-5zo7AmC50RD_iL5hM1D1LLayN8UdIDJQpdtmsXkCIyRjM5JVxTuT7Xmz7R1STLrM6eSokYzWt86mNF7jTvqW2BF4R1fORH43QKPkwu1Q5YOa_sNcoASm6RCy1JSnQUeJ91CXVkj7wp5tCRu_BMt1v6i77PmStnl2lYkv9gdqELsRXOg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}