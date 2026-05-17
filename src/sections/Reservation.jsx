import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Reservation() {
  const waLink = "https://wa.me/?text=Hi%20Kuisine!%20I%27d%20like%20to%20reserve%20a%20table.";

  return (
    <section id="reservation" className="relative py-20 md:py-28 px-4 md:px-6 overflow-hidden bg-teal">
      {/* Hero as background */}
      <img
        src="/Hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-4">
            Make a Reservation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-snug mb-4">
            Join Us for Something<br />Memorable
          </h2>
          <p className="font-sans text-cream/80 text-base mb-10 max-w-md mx-auto">
            Reserve your table via WhatsApp for the best experience. Walk-ins welcome —
            dine-in, kerbside pickup, and no-contact delivery all available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={waLink}>
              Reserve via WhatsApp
            </Button>
            <Button variant="outline" href="https://maps.google.com/?q=Kuisine+3+No+Road+Zakir+Hossain+Rd+Chattogram">
              Get Directions
            </Button>
          </div>

          <p className="font-sans text-cream/50 text-xs mt-8">
            3 No Road, Zakir Hossain Rd, Chattogram 4000
          </p>
        </motion.div>
      </div>
    </section>
  );
}
