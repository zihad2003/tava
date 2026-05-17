// ─── Site Info ───────────────────────────────────────────────────────────────
export const SITE = {
  name: "Kuisine",
  tagline: "Asian Flavors Restaurant",
  est: "2018",
  address: "3 No Road, Zakir Hossain Rd",
  country: "Chattogram 4000, Bangladesh",
  phone: "—",
  email: "—",
  hours: "Open until 11:30 PM",
  hoursDetail: [
    { days: "Sat – Thu", time: "12:00 PM – 11:30 PM" },
    { days: "Friday",    time: "2:00 PM – 11:30 PM" },
  ],
  rating: 4.3,
  reviewCount: 239,
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",    path: "/" },
  { label: "Menu",    path: "/menu" },
  { label: "About",   path: "/#about" },
  { label: "Contact", path: "/#footer-contact" },
];

// ─── Highlights ──────────────────────────────────────────────────────────────
export const HIGHLIGHTS = [
  "Pan Asian",
  "Korean BBQ",
  "Seafood",
  "Porto Afro",
  "Dine-in",
  "Kerbside Pickup",
  "No-contact Delivery",
  "Halal Food",
];

// ─── Menu Categories ─────────────────────────────────────────────────────────
export const MENU_CATEGORIES = [
  { id: "all",      label: "All" },
  { id: "starters", label: "Starters" },
  { id: "soup",     label: "Soups" },
  { id: "seafood",  label: "Seafood" },
  { id: "asian",    label: "Pan Asian" },
  { id: "korean",   label: "Korean" },
];

// ─── Menu Items ──────────────────────────────────────────────────────────────
export const MENU_ITEMS = [
  // ── Starters ──
  { id: 1,  category: "starters", sub: "Starter Kuisine",       name: "Fetisco Platter",          price: "৳650",  desc: "Shredded meat served with crispy baguette slices and dipping sauce" },
  { id: 2,  category: "starters", sub: "Starter Kuisine",       name: "Tempkey Tempura Platter",  price: "৳580",  desc: "Golden crispy tempura platter with sweet chilli dipping sauce" },
  { id: 3,  category: "starters", sub: "Starter Kuisine",       name: "Soft Shell Crab",          price: "৳850",  desc: "Lightly battered whole soft shell crab, fried to perfection" },

  // ── Soup ──
  { id: 4,  category: "soup",     sub: "Soup Kuisine",          name: "Cream of Mushroom or Chicken", price: "৳300", desc: "Rich and velvety cream soup served with toasted bread" },
  { id: 5,  category: "soup",     sub: "Soup Kuisine",          name: "Shrimp Chowder",           price: "৳390",  desc: "Hearty creamy chowder loaded with fresh shrimp" },
  { id: 6,  category: "soup",     sub: "Soup Kuisine",          name: "Spicy Mac (Seafood) Soup", price: "৳380",  desc: "Boldly spiced seafood broth with mixed shellfish and vegetables" },
  { id: 7,  category: "soup",     sub: "Soup Kuisine",          name: "Mixed Clear Soup",         price: "৳300",  desc: "Light and clean broth with vegetables and your choice of protein" },

  // ── Seafood: Gastronomy Platters ──
  { id: 8,  category: "seafood",  sub: "Gastronomy Platters",   name: "Fisherman Platter",        price: "৳2,000", desc: "A grand selection of grilled and fried seafood served with rice and sides" },
  { id: 9,  category: "seafood",  sub: "Gastronomy Platters",   name: "Trios Course",             price: "৳2,000", desc: "Three-course seafood dining experience with chef-curated accompaniments" },

  // ── Seafood: Chef of the Day — Fishmate Combo ──
  { id: 10, category: "seafood",  sub: "Chef of the Day — Fishmate Combo", name: "Best Catch No. 1", price: "৳1,200", desc: "Chef's daily selection of fresh fish with crispy onion rings, fries and coleslaw" },
  { id: 11, category: "seafood",  sub: "Chef of the Day — Fishmate Combo", name: "Best Catch No. 2", price: "৳1,400", desc: "Premium fish combo with grilled fillet, salad and seasoned rice" },

  // ── Seafood: Steamed Fish ──
  { id: 12, category: "seafood",  sub: "Steamed Fish",          name: "Garlic Pepper",            price: "৳750",  desc: "Whole fish steamed with garlic, pepper, spring onion and aromatic sauce" },
  { id: 13, category: "seafood",  sub: "Steamed Fish",          name: "Cajun Barbecue",           price: "৳780",  desc: "Fish fillet steamed with Cajun spice rub and smoky barbecue glaze" },

  // ── Seafood: Grilled Fish ──
  { id: 14, category: "seafood",  sub: "Grilled Fish",          name: "Salsa",                    price: "৳750",  desc: "Grilled fish topped with fresh tomato salsa, lime and coriander" },

  // ── Pan Asian: Best of Pan Asian Cuisine ──
  { id: 15, category: "asian",    sub: "Best of Pan Asian Cuisine", name: "Bento Box",            price: "৳790",  desc: "Curated bento with rice, protein, vegetables, pickles and sides" },
  { id: 16, category: "asian",    sub: "Best of Pan Asian Cuisine", name: "Beef Bulgogi",         price: "৳490",  desc: "Savoury Korean-style marinated beef stir-fried with vegetables and rice" },
  { id: 17, category: "asian",    sub: "Best of Pan Asian Cuisine", name: "Miso Thai Steak",      price: "৳650",  desc: "Grilled beef steak glazed with miso and Thai-spiced marinade" },

  // ── Pan Asian: Porto Afro Kuisine ──
  { id: 18, category: "asian",    sub: "Porto Afro Kuisine — Single", name: "Beef Espadula",      price: "৳1,044", desc: "Slow-cooked shoulder beef with Afro-Portuguese spices, served with rice and salad" },
  { id: 19, category: "asian",    sub: "Porto Afro Kuisine — Single", name: "1/4 Chicken",        price: "৳590",   desc: "Quarter chicken marinated in porto spices, grilled and served with fries" },
  { id: 20, category: "asian",    sub: "Porto Afro Kuisine — Single", name: "Chicken Espadula",   price: "৳950",   desc: "Chicken shoulder cooked porto Afro style with aromatic sauce and sides" },

  // ── Korean: Beef ──
  { id: 21, category: "korean",   sub: "Korean Beef",           name: "Bulgogi — Sliced Tenderloin Beef", price: "৳650", desc: "Thinly sliced marinated tenderloin grilled with sesame and spring onion" },
  { id: 22, category: "korean",   sub: "Korean Beef",           name: "Jaeyun (In-dried Veal)",           price: "৳700", desc: "Traditional dried veal seasoned with Korean spices and grilled to order" },
  { id: 23, category: "korean",   sub: "Korean Beef",           name: "Kalbi — Luscious Short Ribs",      price: "৳750", desc: "Juicy marinated short rib cubes grilled over high heat, Korean BBQ style" },
  { id: 24, category: "korean",   sub: "Korean Beef",           name: "Min Cut Meat",                     price: "৳550", desc: "Finely cut mixed beef with Korean marinade, perfect with steamed rice" },

  // ── Korean: Chicken ──
  { id: 25, category: "korean",   sub: "Korean Chicken",        name: "Dak Galbi (BBQ Chicken)",          price: "৳550", desc: "Spicy stir-fried chicken thigh with gochujang sauce and vegetables" },
  { id: 26, category: "korean",   sub: "Korean Chicken",        name: "Andchimi (Marinated Chicken Breast)", price: "৳500", desc: "Tender marinated chicken breast with mild Korean seasoning" },
  { id: 27, category: "korean",   sub: "Korean Chicken",        name: "Dak Gui (Grilled Chicken)",        price: "৳550", desc: "Whole grilled chicken marinated in soy, garlic and Korean spice blend" },
];

// ─── Happenings / Events ──────────────────────────────────────────────────────
export const HAPPENINGS = [
  {
    id: 1,
    title: "Sushi & Rolls Night",
    date: "Every Thursday",
    time: "6:00 PM – 10:00 PM",
    desc: "Freshly rolled sushi and maki crafted by our Asian kitchen team. Enjoy exclusive sushi platters at special Thursday prices with any main course.",
    tag: "Food Special",
  },
  {
    id: 2,
    title: "Weekend Family Platter",
    date: "Fri – Sat",
    time: "12:00 PM – 6:00 PM",
    desc: "Our famous family platters at a special weekend price — choose from Fisherman's Feast, Korean BBQ, or Porto Afro Family Sets. Perfect for groups of 4.",
    tag: "Family Deal",
  },
  {
    id: 3,
    title: "Korean BBQ Night",
    date: "Every Saturday",
    time: "7:00 PM – 11:00 PM",
    desc: "Experience authentic Korean tableside BBQ with Bulgogi, Kalbi ribs and Dak Galbi. Live grill stations and unlimited banchan — book your seat early.",
    tag: "Live Grill",
  },
];

// ─── Menu Preview (category cards for Home page) ─────────────────────────────
export const MENU_PREVIEW = [
  {
    id: "starters",
    label: "Starters",
    color: "bg-gold",
    textColor: "text-brown",
    items: ["Fetisco Platter", "Tempura Platter", "Soft Shell Crab", "Soups"],
  },
  {
    id: "seafood",
    label: "Seafood",
    color: "bg-teal",
    textColor: "text-cream",
    items: ["Fisherman Platter", "Fishmate Combo", "Garlic Pepper Fish", "Grilled Salsa"],
  },
  {
    id: "asian",
    label: "Pan Asian",
    color: "bg-brown",
    textColor: "text-cream",
    items: ["Bento Box", "Beef Bulgogi", "Porto Afro Chicken", "Miso Thai Steak"],
  },
  {
    id: "korean",
    label: "Korean",
    color: "bg-cream-dark",
    textColor: "text-brown",
    items: ["Dak Galbi BBQ", "Bulgogi Beef", "Kalbi Short Ribs", "Grilled Chicken"],
  },
];
