"use client";

import { useEffect } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop (Click to close) */}
      <div 
        className="fixed inset-0 bg-primary/20 dark:bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside className="relative w-full max-w-[480px] h-full bg-oatmeal dark:bg-background-dark shadow-2xl flex flex-col border-l border-primary/5 dark:border-oatmeal/10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-8 py-8 flex items-center justify-between border-b border-primary/5 dark:border-oatmeal/5">
          <h2 className="font-serif text-3xl italic text-primary dark:text-oatmeal">
            Your Cart 
            <span className="text-sm font-display font-light not-italic ml-2 opacity-60">(2 Items)</span>
          </h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 dark:hover:bg-oatmeal/10 transition-colors text-primary dark:text-oatmeal"
          >
            <span className="material-symbols-outlined font-light">close</span>
          </button>
        </div>

        {/* Scrollable Items Area */}
        <div className="flex-1 overflow-y-auto px-8 custom-scrollbar">
          <div className="space-y-10 py-8">
            
            {/* Item 1 */}
            <div className="flex gap-6 group">
              <div className="w-24 h-24 bg-beige-surface dark:bg-white/10 blob-mask overflow-hidden flex-shrink-0">
                <img alt="The Velvet Brewer" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuCWNhOf2Zjs9q45UhwJ0T6FuMQmf9JG9mvVAtMyJJ4W6dL0ByJszPhM5ZcIDBbOh0kPgIbaxmLi9wHh5HYDADCprv642dGaHyixB34so46Q6byNkgGlDusNGQilAAeK4PyV2cyUCsI3BGc7QjUWkRGY0u_MAgALumh6LfPdnVL6KQezM7aOxO7v9SlRFeYd6JSxyNMv-0BsardI5m3cjEpz385-cc2WJTvWuTVr4k7Go5RlfGnC40ldyTetmMy1dAsxnXl8EhS5Q" />
              </div>
              <div className="flex flex-col justify-between flex-1 py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-oatmeal">The Velvet Brewer</h3>
                    <p className="text-[10px] text-primary/40 dark:text-oatmeal/40 uppercase tracking-widest mt-1">Satin Green / 800ml</p>
                  </div>
                  <p className="font-serif text-lg text-primary dark:text-oatmeal">$245.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-primary/10 dark:border-oatmeal/20 rounded-full px-3 py-1 gap-4 text-primary dark:text-oatmeal">
                    <button className="text-sm opacity-40 hover:opacity-100 transition-opacity">−</button>
                    <span className="text-xs font-bold">1</span>
                    <button className="text-sm opacity-40 hover:opacity-100 transition-opacity">+</button>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-red-800 dark:text-oatmeal/40 dark:hover:text-red-400 transition-colors">Remove</button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6 group">
              <div className="w-24 h-24 bg-beige-surface dark:bg-white/10 blob-mask overflow-hidden flex-shrink-0">
                <img alt="Replacement Carafe" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIIZPF0cj7Tt6kx_s0IxFEKmUUkmZSjfxX0P6OwBs4dRRJrFtWIsUJ1fkw41PwvfEClUwWtWw-SDcmT8XFKNKW9_ZVNl-z_EPPrYS49fGu8LX6Zd6aTnvN1VRj7UOFI6_QsidE7v2ANO7SYytw3qUH35NFY6q1_1OJQ1ia4lkZFMgeBemj0pmC3Pro7c88ged1EjTOmj4yZtFZFLQArbFiW5-EM5M1ndng9tOJFrkgzMfnWHoCVimpQPgMqBl0gh8ZRldBG0RU6RY" />
              </div>
              <div className="flex flex-col justify-between flex-1 py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-oatmeal">Replacement Carafe</h3>
                    <p className="text-[10px] text-primary/40 dark:text-oatmeal/40 uppercase tracking-widest mt-1">Hand-blown Borosilicate</p>
                  </div>
                  <p className="font-serif text-lg text-primary dark:text-oatmeal">$65.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-primary/10 dark:border-oatmeal/20 rounded-full px-3 py-1 gap-4 text-primary dark:text-oatmeal">
                    <button className="text-sm opacity-40 hover:opacity-100 transition-opacity">−</button>
                    <span className="text-xs font-bold">1</span>
                    <button className="text-sm opacity-40 hover:opacity-100 transition-opacity">+</button>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-red-800 dark:text-oatmeal/40 dark:hover:text-red-400 transition-colors">Remove</button>
                </div>
              </div>
            </div>

            {/* Upsell / Pair With */}
            <div className="pt-8 pb-4">
              <div className="bg-beige-surface/40 dark:bg-white/5 rounded-2xl p-6 border border-primary/5 dark:border-oatmeal/10">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-oatmeal/40 mb-4">Pairs well with...</p>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white dark:bg-white/10 blob-mask overflow-hidden flex-shrink-0">
                    <img alt="Coffee Filters" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQTNYjn_Z3XGjAsiwYH8ZuKwxQisX0vpK1mvlTwd1FDCJYcKiOpvLyJZt_9-2zterc5ErVdsiv6Uu3RqbyB8zY_qEAjvLmTSEvovtWGXjv_QKma5GQv02MJXYYbx45NBBK1a9r1vklk8VfhrvX902SlTuTe5yzO-TPbTwWDYhJkZ8Uy62ScTZY8tIE8Y9-NpHItQRx4kYF2XL_18bucB58RYsj2HraEqoEGcgSOrIftIHG_8MZw55URuzgVRwYCWhTBnFu30B2BU" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-tight text-primary dark:text-oatmeal">Paper Filters (100ct)</h4>
                    <p className="text-xs text-primary/60 dark:text-oatmeal/60 mt-0.5">$18.00</p>
                  </div>
                  <button className="bg-primary text-white dark:bg-oatmeal dark:text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Checkout */}
        <div className="bg-oatmeal dark:bg-background-dark p-8 space-y-6 border-t border-primary/5 dark:border-oatmeal/10">
          <div className="space-y-3 text-primary dark:text-oatmeal">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="opacity-60">Subtotal</span>
              <span>$310.00</span>
            </div>
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="opacity-60">Shipping</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Calculated at checkout</span>
            </div>
            <div className="pt-4 border-t border-primary/5 dark:border-oatmeal/10 flex justify-between items-center">
              <span className="text-lg font-serif">Total</span>
              <span className="text-xl font-serif">$310.00</span>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-primary text-white dark:bg-oatmeal dark:text-primary py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/10">
              Secure Checkout
            </button>
            <p className="text-center text-[10px] text-primary/40 dark:text-oatmeal/40 font-bold uppercase tracking-widest">
              Complimentary shipping on orders over $150
            </p>
          </div>
        </div>

      </aside>
    </div>
  );
}