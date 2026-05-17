import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";

const HERO_SLIDES = [
  "/Hero.jpg",               // Mughal Platter
  "/Food pictures/2.jpg",    // Mixed Tempura
  "/Food pictures/3.jpg",    // Lamb Chops
  "/Food pictures/4.jpg",    // Naan & Butter Chicken
  "/Food pictures/6.jpg",    // Crispy Shredded Beef
  "/Food pictures/7.jpg",    // Fiery Thai Crab
  "/Food pictures/8.jpg"     // Thai Calamari
];

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Automatic slideshow transitions every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[750px] lg:h-screen flex items-center bg-teal pt-28 pb-16 lg:py-0 px-4 md:px-8 lg:px-16 overflow-hidden">
      
      {/* Decorative Grid Patterns in Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Main Grid Container — with robust top margin (lg:mt-20) to resolve navbar overlapping */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 lg:mt-20">
        
        {/* LEFT COLUMN: Minimal Brand Heading, Buttons & Bottom Nested Card */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-7 text-left">
          
          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              A Platter Fit for Royalty,<br />
              <span className="text-gold font-medium italic">Flavors Rich with History</span>
            </motion.h1>
          </div>

          {/* Subtitle (Minimal & Elegant) */}
          <motion.p
            className="font-sans text-cream/75 text-sm md:text-base leading-relaxed max-w-md tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Signature Mughlai Grand Platters, Sizzling Grills &amp; Pan-Asian Cuisine.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button 
              variant="primary" 
              href="/menu" 
              className="shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)] px-8 py-3.5 text-xs font-semibold"
            >
              Explore Royal Menu
            </Button>
            <Button 
              variant="outline" 
              href="/#reservation"
              className="border-cream/30 hover:bg-cream/10 text-cream px-8 py-3.5 text-xs font-semibold"
            >
              Book a Table
            </Button>
          </motion.div>

          {/* Bottom Nested Card (matching mockup details) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-teal-dark/80 border border-gold/15 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl"
          >
            <div className="space-y-1">
              <p className="font-serif text-gold text-sm tracking-widest uppercase">TAVA CHITTAGONG</p>
              <p className="text-cream/70 text-xs font-sans leading-relaxed">
                Arcadia Shopping Complex, South Khulshi<br />
                Mon – Sun: 12:00 PM – 11:00 PM
              </p>
            </div>
            <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-gold/20 pt-3 sm:pt-0 sm:pl-4">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5">
                <span className="text-gold text-sm font-bold font-serif">Est.</span>
              </div>
              <div>
                <p className="text-cream font-serif text-sm font-semibold">1993</p>
                <p className="text-gold text-[10px] tracking-wider uppercase font-semibold">Quality Dining</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Massive Showcase Image Container with Custom Mockup Notch Cutouts & Carousel */}
        <div className="lg:col-span-7 flex items-center justify-center relative px-2 sm:px-0">
          
          {/* Main Visual Image Box with Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] sm:aspect-[1.1] rounded-[2.5rem] overflow-hidden border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.65)] bg-teal-dark"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={slideIndex}
                src={HERO_SLIDES[slideIndex]} 
                alt="Tava Royal Mughal Platter Special" 
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.02] saturate-[1.08]" 
              />
            </AnimatePresence>
            
            {/* Soft inner vignetting to blend edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/30 to-transparent pointer-events-none z-10" />

            {/* TOP-RIGHT NOTCH CUTOUT (Mockup Accent circle) */}
            <div className="absolute -top-1 -right-1 w-20 h-20 bg-teal-dark z-20 rounded-bl-[2.5rem] border-b border-l border-gold/20 flex items-center justify-center pointer-events-auto">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-sm font-serif font-bold shadow-inner">
                ★
              </div>
            </div>

            {/* BOTTOM-LEFT NOTCH CUTOUT (Mockup 3 Stacked Circles Column) */}
            <div className="absolute -bottom-1 -left-1 w-24 h-40 bg-teal-dark z-20 rounded-tr-[2.5rem] border-t border-r border-gold/20 flex flex-col items-center justify-center gap-3.5 pointer-events-auto">
              {/* Stacked Social/Action Circles */}
              <a 
                href="https://wa.me/8801729298282" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-brown transition-all duration-300 shadow-md"
                title="WhatsApp Reservation"
              >
                <span className="text-[10px] font-bold font-sans tracking-wide">WA</span>
              </a>
              <a 
                href="https://facebook.com/TavaRestaurantChittagong" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-brown transition-all duration-300 shadow-md"
                title="Facebook Page"
              >
                <span className="text-[10px] font-bold font-sans tracking-wide">FB</span>
              </a>
              <a 
                href="#reservation" 
                className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-brown transition-all duration-300 shadow-md"
                title="Table Reservation"
              >
                <span className="text-[10px] font-bold font-sans">★</span>
              </a>
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
