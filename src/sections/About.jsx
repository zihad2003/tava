import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SITE, HIGHLIGHTS } from "../constants/data";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT — single photo, hidden on mobile */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/restaurant-interior.jpg"
            alt="Kuisine restaurant"
            className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* RIGHT — text content, centered on mobile */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            About Us
          </p>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown leading-snug mb-5">
            A World of Flavors,<br />One Destination
          </h2>

          {/* First paragraph — hidden on mobile */}
          <p className="hidden md:block font-sans text-body/80 text-base leading-relaxed mb-4">
            Nestled on Zakir Hossain Road in the heart of Chattogram, Kuisine was born from
            a passion for authentic Asian cuisine. From the smoky char of Korean BBQ to the
            delicate art of Pan Asian dishes and the bold spices of Porto Afro cuisine —
            we bring the best of the continent to your table.
          </p>

          <p className="font-sans text-body/80 text-base leading-relaxed mb-8">
            Whether you're gathering over a Fisherman's Platter, sharing a Bento Box, or
            indulging in a Sushi Night — Kuisine is where every visit becomes a journey
            across Asia.
          </p>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="font-sans text-xs text-teal border border-teal/30 rounded-full px-4 py-1.5 font-medium"
                style={{ backgroundColor: 'rgba(13, 94, 94, 0.08)' }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <div className="flex">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} size={16} className="text-gold fill-gold" />
              ))}
              <Star size={16} className="text-gold fill-gold/40" />
            </div>
            <span className="font-sans text-sm text-body/70">
              {SITE.rating} · {SITE.reviewCount} reviews on Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
