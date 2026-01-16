export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-primary dark:text-oatmeal transition-colors duration-300 min-h-screen flex flex-col">
      <main className="flex-grow pt-20 flex flex-col lg:flex-row min-h-screen relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-beige-surface/40 dark:bg-white/5 wave-mask -z-10 pointer-events-none"></div>

        {/* --- LEFT COLUMN: INFO --- */}
        <section className="w-full lg:w-1/2 flex items-center justify-center px-10 lg:px-24 py-20">
          <div className="max-w-md w-full space-y-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-oatmeal/60">Connect With Us</span>
              <h2 className="font-serif text-5xl md:text-6xl italic leading-tight">Reach Out to the <br />Craftsmen</h2>
              <p className="text-lg text-primary/70 dark:text-oatmeal/70 font-light leading-relaxed">
                Our team is dedicated to the perfect extraction. Whether you have technical questions or need assistance with your order, we are here to help.
              </p>
            </div>
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary/40 dark:text-oatmeal/40 text-2xl">support_agent</span>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Customer Care</h4>
                  <p className="text-lg font-light">Monday – Friday <br />9:00am – 5:00pm CST</p>
                  <a className="text-sm border-b border-primary/20 dark:border-oatmeal/20 pb-0.5 hover:border-primary dark:hover:border-oatmeal transition-colors" href="mailto:care@velvetbrewer.com">care@velvetbrewer.com</a>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary/40 dark:text-oatmeal/40 text-2xl">business_center</span>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Partnerships & Inquiries</h4>
                  <p className="text-lg font-light">Wholesale and press requests</p>
                  <a className="text-sm border-b border-primary/20 dark:border-oatmeal/20 pb-0.5 hover:border-primary dark:hover:border-oatmeal transition-colors" href="mailto:hello@velvetbrewer.com">hello@velvetbrewer.com</a>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary/40 dark:text-oatmeal/40 text-2xl">location_on</span>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Our Studio</h4>
                  <p className="text-lg font-light leading-snug">
                    1202 Artisan Way, Suite 400<br />
                    Northwest Arkansas, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RIGHT COLUMN: FORM --- */}
        <section className="w-full lg:w-1/2 flex items-center justify-center px-10 lg:px-24 py-20 relative">
          <div className="w-full max-w-lg bg-beige-surface/60 dark:bg-white/5 p-12 lg:p-16 organic-blob-container shadow-sm border border-white/20 dark:border-white/10">
            <form action="#" className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 dark:text-oatmeal/60 ml-4" htmlFor="name">Name</label>
                <input className="w-full bg-background-light/50 dark:bg-background-dark/50 border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-primary/20 dark:focus:ring-oatmeal/20 placeholder:text-primary/30 dark:placeholder:text-oatmeal/30 transition-all text-primary dark:text-oatmeal" id="name" name="name" placeholder="Elias Thorne" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 dark:text-oatmeal/60 ml-4" htmlFor="email">Email Address</label>
                <input className="w-full bg-background-light/50 dark:bg-background-dark/50 border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-primary/20 dark:focus:ring-oatmeal/20 placeholder:text-primary/30 dark:placeholder:text-oatmeal/30 transition-all text-primary dark:text-oatmeal" id="email" name="email" placeholder="elias@studio.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 dark:text-oatmeal/60 ml-4" htmlFor="subject">Subject</label>
                <div className="relative">
                  <select className="w-full bg-background-light/50 dark:bg-background-dark/50 border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-primary/20 dark:focus:ring-oatmeal/20 appearance-none transition-all text-primary dark:text-oatmeal cursor-pointer" id="subject" name="subject">
                    <option>Technical Support</option>
                    <option>Order Status</option>
                    <option>Wholesale Inquiry</option>
                    <option>General Message</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40 dark:text-oatmeal/40">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 dark:text-oatmeal/60 ml-4" htmlFor="message">Message</label>
                <textarea className="w-full bg-background-light/50 dark:bg-background-dark/50 border-none rounded-3xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary/20 dark:focus:ring-oatmeal/20 placeholder:text-primary/30 dark:placeholder:text-oatmeal/30 transition-all resize-none text-primary dark:text-oatmeal" id="message" name="message" placeholder="How can we elevate your morning ritual?" rows={4}></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full bg-primary dark:bg-oatmeal text-white dark:text-primary py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/90 dark:hover:bg-white/90 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-primary/10" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}