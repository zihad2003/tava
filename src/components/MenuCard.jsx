// Text-only horizontal menu item card. Used on the Menu page.
// name + description left, price right — separated by border-bottom.

export default function MenuCard({ name, desc, price }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-cream-dark last:border-0">
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-base text-brown leading-snug mb-0.5">{name}</h4>
        {desc && (
          <p className="font-sans text-xs text-body/60 leading-relaxed">{desc}</p>
        )}
      </div>
      <span className="font-serif text-gold font-bold text-sm shrink-0 mt-0.5 whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}
