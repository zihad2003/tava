import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
import { NAV_LINKS } from "../constants/data";
import { useData } from "../context/DataContext";

export default function Footer() {
  const { site, menuCategories } = useData();
  const year = new Date().getFullYear();

  return (
    <footer id="footer-contact" className="bg-brown text-cream/80 pt-14 pb-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center sm:text-left">

          {/* Col 1 — Brand + socials */}
          <div className="flex flex-col items-center sm:items-start">
            <img src="/logo.jpg" alt="Kuisine" className="h-14 w-auto object-contain rounded-sm mb-3" />
            <p className="font-sans text-xs text-cream/50 uppercase tracking-widest mb-4">{site.tagline}</p>
            <p className="font-sans text-sm text-cream/60 leading-relaxed mb-6">
              Pan Asian, Korean BBQ, Seafood and Porto Afro cuisine — a world of flavors in the heart of Chattogram.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-sans text-sm text-cream/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Menu Categories */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-4">Our Menu</h4>
            <ul className="space-y-2.5">
              {menuCategories.filter((c) => c.id !== "all").map((cat) => (
                <li key={cat.id}>
                  <Link to={`/menu?tab=${cat.id}`} className="font-sans text-sm text-cream/70 hover:text-gold transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-4">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-2.5 sm:justify-start">
                <MapPin size={15} className="text-gold shrink-0 mb-1 sm:mb-0 sm:mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Kuisine+3+No+Road+Zakir+Hossain+Rd+Chattogram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors leading-snug text-center sm:text-left"
                >
                  {site.address},<br />{site.country}
                </a>
              </li>
              <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                <Phone size={15} className="text-gold shrink-0" />
                <span className="font-sans text-sm text-cream/70">Dine-in · Kerbside · Delivery</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-3">Hours</h4>
              {site.hoursDetail.map((h) => (
                <p key={h.days} className="font-sans text-sm text-cream/70 leading-relaxed text-center sm:text-left">
                  <span className="text-cream/50">{h.days}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-6 flex flex-col items-center sm:flex-row sm:justify-between gap-2 text-center sm:text-left">
          <p className="font-sans text-xs text-cream/40">© {year} {site.name} — {site.tagline}. All rights reserved.</p>
          <p className="font-sans text-xs text-cream/30">
            Built by <span className="text-gold/60 hover:text-gold transition-colors cursor-default">Right Click</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
