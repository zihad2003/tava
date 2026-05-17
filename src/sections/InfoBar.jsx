import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useData } from "../context/DataContext";

export default function InfoBar() {
  const { site } = useData();

  const items = [
    {
      icon: MapPin,
      label: "address",
      lines: [site.address, site.country],
      href: "https://maps.google.com/?q=Kuisine+3+No+Road+Zakir+Hossain+Rd+Chattogram",
    },
    {
      icon: Clock,
      label: "hours",
      lines: site.hoursDetail.map((h) => `${h.days}: ${h.time}`),
      href: null,
    },
    {
      icon: Phone,
      label: "contact",
      lines: ["Dine-in · Kerbside Pickup", "No-contact Delivery"],
      href: null,
    },
  ];

  return (
    <section className="bg-teal py-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center md:text-left">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className={`flex flex-col md:flex-row items-center md:items-start gap-3 ${
                idx < 2 ? "md:border-r md:border-cream/20 md:pr-8" : ""
              } ${idx > 0 ? "md:pl-8" : ""}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <Icon size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-gold mb-1">
                  {item.label}
                </p>
                {item.lines.map((line) =>
                  item.href ? (
                    <a
                      key={line}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block font-sans text-sm text-cream/90 hover:text-gold transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="font-sans text-sm text-cream/90">
                      {line}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
