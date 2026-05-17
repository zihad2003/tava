// Reusable pill-shaped button. Variants: "primary" (gold fill) | "outline" (gold border).
// Pass `href` to render as <a>, otherwise renders as <button>.

export default function Button({ variant = "primary", children, onClick, href, className = "", type = "button" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 font-sans font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const styles = {
    primary:
      "bg-gold text-brown hover:bg-gold-dark shadow-sm hover:shadow-md active:scale-95",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-brown active:scale-95",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
