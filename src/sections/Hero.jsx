import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden bg-teal">
      {/* Background image */}
      <img src="/Hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-teal/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src="/logo.jpg"
          alt="Kuisine"
          className="h-20 w-auto object-contain rounded-lg mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Asian Flavors,<br />Unforgettable Memories
        </motion.h1>
        <motion.p
          className="font-sans text-cream/80 text-sm md:text-lg mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Pan Asian · Korean · Seafood · Porto Afro — Zakir Hossain Rd, Chattogram
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button variant="primary" href="/menu">
            Explore Our Menu
          </Button>
          <Button variant="outline" href="/#reservation">
            Reserve a Table
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <div className="w-px h-10 bg-cream/40 mx-auto" />
      </motion.div>
    </section>
  );
}
