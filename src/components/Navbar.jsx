import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants/data";

function scrollToHash(hash) {
  const el = document.getElementById(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      const targetRoute = route === "" ? "/" : route;
      if (location.pathname === targetRoute) {
        scrollToHash(hash);
      } else {
        navigate(targetRoute);
        setTimeout(() => scrollToHash(hash), 80);
      }
    } else {
      navigate(path);
    }
  };

  const handleReserve = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.open(
      "https://wa.me/8801729298282?text=Hi%20Tava!%20I%27d%20like%20to%20reserve%20a%20table.",
      "_blank"
    );
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path === "/menu") return location.pathname === "/menu";
    return false;
  };

  const linkCls = (path) =>
    `relative text-sm font-sans font-medium tracking-widest uppercase py-2 transition-all duration-300 ${
      isActive(path) ? "text-gold font-semibold" : "text-cream/80 hover:text-gold"
    }`;

  const leftLinks  = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "top-4 max-w-7xl mx-auto px-4 md:px-6" : "top-0 w-full"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-6xl rounded-full border border-gold/25 bg-teal/95 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md py-3 px-6 md:px-10"
              : "w-full border-b border-white/5 bg-teal/80 backdrop-blur-sm py-5 px-6 md:px-12"
          }`}
        >
          <div className="flex items-center justify-between relative">
            {/* LEFT links — desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {leftLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNav(e, link.path)}
                  className={linkCls(link.path)}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Logo — centered on desktop, left on mobile */}
            <Link
              to="/"
              className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center"
            >
              <img
                src="/logo.png"
                alt="Tava"
                className={`transition-all duration-500 object-contain ${
                  scrolled ? "h-8 md:h-9" : "h-11 md:h-12"
                }`}
              />
            </Link>

            {/* RIGHT links + Reserve — desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {rightLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNav(e, link.path)}
                  className={linkCls(link.path)}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </a>
              ))}
              
              {/* Premium Shimmer Reserve Button */}
              <motion.button
                onClick={handleReserve}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden ml-2 rounded-full px-6 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase bg-gradient-to-r from-gold via-gold-light to-gold text-brown hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10">Reserve</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </motion.button>
            </div>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden ml-auto text-cream hover:text-gold transition-colors z-50 p-2"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-teal/98 backdrop-blur-lg flex flex-col justify-between px-8 py-24"
          >
            {/* Decorative Gold Arch Framing */}
            <div className="absolute inset-4 border border-gold/10 pointer-events-none rounded-lg z-0" />

            {/* Logo in drawer */}
            <div className="flex justify-center z-10 mt-4">
              <img src="/logo.png" alt="Tava" className="h-14 w-auto object-contain" />
            </div>

            {/* Staggered Navigation Links */}
            <div className="flex flex-col gap-6 mt-8 z-10">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleNav(e, link.path)}
                    className={`text-2xl md:text-3xl font-serif tracking-widest uppercase block text-center ${
                      isActive(link.path) ? "text-gold font-bold" : "text-cream/90 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons & Brand Details */}
            <div className="flex flex-col gap-8 z-10 w-full max-w-sm mx-auto">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={handleReserve}
                className="w-full text-center rounded-full py-4 font-sans font-semibold text-base bg-gradient-to-r from-gold via-gold-light to-gold text-brown hover:bg-gold-dark transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
              >
                Reserve a Table
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="border-t border-gold/20 pt-6 text-center"
              >
                <p className="font-serif text-gold text-lg tracking-widest mb-1">TAVA RESTAURANT</p>
                <p className="text-cream/65 text-xs font-sans tracking-wider leading-relaxed">
                  Arcadia Shopping Complex, South Khulshi<br />
                  Chittagong · Est. 1993
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
