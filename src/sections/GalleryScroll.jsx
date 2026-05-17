// GalleryScroll — infinite auto-scrolling food photo strip + Facebook CTA
const PHOTOS = [
  "/Food pictures/1.jpg",
  "/Food pictures/2.jpg",
  "/Food pictures/3.jpg",
  "/Food pictures/4.jpg",
  "/Food pictures/5.jpg",
  "/Food pictures/6.jpg",
  "/Food pictures/7.jpg",
  "/Food pictures/8.jpg",
];

export default function GalleryScroll() {
  const track = [...PHOTOS, ...PHOTOS];

  return (
    <section className="bg-cream py-16 overflow-hidden">

      {/* ── Header ── */}
      <div className="text-center mb-10 px-4">
        <h2 className="font-serif font-bold text-teal uppercase tracking-widest text-3xl md:text-4xl mb-3">
          Never Miss a Snap!
        </h2>
        <p className="font-sans text-body/60 text-sm mb-6">
          follow us on
        </p>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-sans font-medium text-sm px-8 py-3 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          Facebook
        </a>
      </div>

      {/* ── Scrolling Strip ── */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex gap-4 w-max">
          {track.map((src, idx) => (
            <div
              key={idx}
              className="flex-none w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-lg"
            >
              <img
                src={src}
                alt={`Tava food ${(idx % PHOTOS.length) + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
