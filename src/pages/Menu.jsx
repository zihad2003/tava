import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useData } from "../context/DataContext";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const { menuCategories, menuItems, site } = useData();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "all";
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams(tabId === "all" ? {} : { tab: tabId });
  };

  const grouped = useMemo(() => {
    const filtered =
      activeTab === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === activeTab);

    return filtered.reduce((acc, item) => {
      if (!acc[item.sub]) acc[item.sub] = [];
      acc[item.sub].push(item);
      return acc;
    }, {});
  }, [activeTab, menuItems]);

  const subcategories = Object.keys(grouped);

  return (
    <>
      {/* Page hero */}
      <div className="relative bg-teal h-56 md:h-64 pt-20 flex items-end pb-0 overflow-hidden">
        <img src="/Hero.jpg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-8 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-2">
            {site.name} · {site.tagline}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream">Our Menu</h1>
        </div>
      </div>

      {/* Sticky tab bar */}
      <div className="sticky top-[72px] z-30 bg-white shadow-sm border-b border-cream-dark">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {menuCategories.map((cat) => (
            <button key={cat.id} onClick={() => handleTabChange(cat.id)}
              className={`whitespace-nowrap rounded-full px-6 py-2 font-sans text-sm font-medium transition-all duration-200 shrink-0 ${
                activeTab === cat.id
                  ? "bg-teal text-cream shadow-sm"
                  : "text-body/70 hover:bg-cream-dark"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            {subcategories.length === 0 ? (
              <p className="text-center font-sans text-body/50 py-20">No items found.</p>
            ) : (
              <div className="space-y-14">
                {subcategories.map((sub) => (
                  <div key={sub}>
                    <h3 className="font-serif text-2xl text-brown border-b-2 border-gold-dark pb-2 mb-6">
                      {sub}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                      {grouped[sub].map((item) => (
                        <MenuCard key={item.id} name={item.name} desc={item.desc} price={item.price} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 space-y-6 border-t border-cream-dark pt-10">
          <div>
            <h3 className="font-serif text-xl text-brown mb-1">Halal Certified</h3>
            <p className="font-sans text-sm text-body/70">
              All our meat and poultry are 100% halal. We are committed to serving food that meets the highest halal standards.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-brown mb-1">Dine-in · Kerbside Pickup · No-contact Delivery</h3>
            <p className="font-sans text-sm text-body/70">
              Enjoy Tava your way — at our table, from your car, or delivered straight to your door.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-brown mb-1">Prices shown are per serving</h3>
            <p className="font-sans text-sm text-body/70">
              Average spend ৳800–2,000 per person. Prices may vary seasonally. Visit us at {site.address}, {site.country}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
