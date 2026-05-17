import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MENU_PREVIEW } from "../constants/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MenuPreview() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Explore Our Menu
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown">
            A Journey Across Asia
          </h2>
        </div>

        {/* Category cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {MENU_PREVIEW.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-cream-dark group"
            >
              {/* Colored top band */}
              <div className={`${cat.color} h-2`} />

              <div className="p-6">
                {/* Category label */}
                <h3 className="font-serif text-2xl text-brown mb-4">{cat.label}</h3>

                {/* Sample items */}
                <ul className="space-y-1 mb-6">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-body/70 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Explore link */}
                <Link
                  to={`/menu?tab=${cat.id}`}
                  className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-gold hover:text-gold-dark transition-colors group-hover:gap-2"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full menu CTA */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-teal hover:text-teal-dark border-b-2 border-gold pb-0.5 transition-colors"
          >
            View Full Menu <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
