import { motion } from "framer-motion";
import { useData } from "../context/DataContext";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Happenings() {
  const { happenings } = useData();

  return (
    <section id="happenings" className="py-16 md:py-24 px-4 md:px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Events & Specials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown">
            What's On at Kuisine
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {happenings.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-sm border border-cream-dark p-7 flex flex-col"
            >
              <span className="self-start bg-gold/15 text-gold-dark rounded-full text-xs font-sans font-semibold px-3 py-1 mb-4">
                {event.tag}
              </span>
              <p className="font-sans text-xs font-semibold text-teal uppercase tracking-wide mb-2">
                {event.date} · {event.time}
              </p>
              <h3 className="font-serif text-2xl text-brown mb-3 leading-snug">
                {event.title}
              </h3>
              <p className="font-sans text-sm text-body/70 leading-relaxed flex-1">
                {event.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
