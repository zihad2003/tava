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
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

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
      "https://wa.me/?text=Hi%20Kuisine!%20I%27d%20like%20to%20reserve%20a%20table.",
      "_blank"
    );
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path === "/menu") return location.pathname === "/menu";
    return false;
  };

  const linkCls = (path) =>
    `text-sm font-sans font-medium tracking-widest uppercase transition-colors duration-200 ${
      isActive(path) ? "text-gold border-b border-gold pb-0.5" : "text-cream/80 hover:text-gold"
    }`;

  const leftLinks  = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-teal shadow-lg" : "bg-teal/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between relative">

          {/* LEFT links — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {leftLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={(e) => handleNav(e, link.path)} className={linkCls(link.path)}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo — centered on desktop, left on mobile */}
          <Link
            to="/"
            className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <img src="/logo.jpg" alt="Kuisine" className="h-10 w-auto object-contain rounded-sm" />
          </Link>

          {/* RIGHT links + Reserve — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={(e) => handleNav(e, link.path)} className={linkCls(link.path)}>
                {link.label}
              </a>
            ))}
            <button
              onClick={handleReserve}
              className="ml-2 rounded-full px-6 py-2 text-xs font-sans font-semibold tracking-wide bg-gold text-brown hover:bg-gold-dark transition-all duration-300 cursor-pointer"
            >
              Reserve
            </button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden ml-auto text-cream hover:text-gold transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-teal shadow-xl px-6 py-8 flex flex-col gap-5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNav(e, link.path)}
                className="text-sm font-sans font-medium tracking-widest uppercase text-cream/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleReserve}
              className="self-start mt-2 rounded-full px-8 py-3 font-sans font-semibold text-sm bg-gold text-brown hover:bg-gold-dark transition-all duration-300 cursor-pointer"
            >
              Reserve a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
