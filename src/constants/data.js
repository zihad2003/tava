// ─── Site Info ───────────────────────────────────────────────────────────────
export const SITE = {
  name: "Tava",
  tagline: "Authentic Multi-Cuisine Restaurant",
  est: "1993",
  address: "Arcadia Shopping Complex, 4th Floor #4, Zakir Hossain Road, South Khulshi",
  country: "Chittagong, Bangladesh",
  phone: "01729-298282",
  email: "tava.restaurant@yahoo.com",
  hours: "Open until 11:00 PM",
  hoursDetail: [
    { days: "Mon – Sun", time: "12:00 PM – 11:00 PM" },
  ],
  rating: "84%",
  reviewCount: "2,095",
  facebook: "https://www.facebook.com/TavaRestaurantChittagong",
  instagram: "https://www.instagram.com/tavarestaurantchittagong",
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
  "Multi-Cuisine",
  "Thai & Chinese",
  "Fiery Seafood",
  "Sizzlers & Grill",
  "Tandoori & Kebabs",
  "Dine-in Only",
  "Family Friendly",
  "Est. 1993",
];

// ─── Menu Categories ─────────────────────────────────────────────────────────
export const MENU_CATEGORIES = [
  { id: "all",      label: "All" },
  { id: "starters", label: "Starters" },
  { id: "soup",     label: "Soups" },
  { id: "seafood",  label: "Seafood Specialties" },
  { id: "asian",    label: "Thai & Chinese" },
  { id: "korean",   label: "Sizzlers & Kebabs" },
  { id: "platters", label: "Mughlai Grand Platters" },
];

// ─── Menu Items ──────────────────────────────────────────────────────────────
export const MENU_ITEMS = [
  // ── Starters ──
  { id: 1,  category: "starters", sub: "Appetizers",             name: "Thai Calamari",            price: "৳580",  desc: "Tender calamari coated in a crisp golden crust, finished with zesty Thai spices that awaken your appetite" },
  { id: 2,  category: "starters", sub: "Appetizers",             name: "Mixed Tempura",            price: "৳620",  desc: "Lightly battered seafood and fresh vegetables, fried to a perfect, airy crisp" },
  { id: 3,  category: "starters", sub: "Appetizers",             name: "Soft Shell Crab",          price: "৳850",  desc: "Lightly battered whole soft shell crab, fried to golden perfection with garlic-pepper seasoning" },

  // ── Soup ──
  { id: 4,  category: "soup",     sub: "Chef's Special Soups",   name: "Fiery Tom Yum Soup",       price: "৳380",  desc: "Spicy and sour Thai broth loaded with shrimp, lemongrass, galangal, and kaffir lime leaves" },
  { id: 5,  category: "soup",     sub: "Chef's Special Soups",   name: "Cream of Mushroom or Chicken", price: "৳300", desc: "Rich and velvety cream soup served with toasted hot garlic bread" },
  { id: 6,  category: "soup",     sub: "Chef's Special Soups",   name: "Mixed Clear Soup",         price: "৳300",  desc: "Light and clean vegetable broth with succulent chicken and shrimp" },

  // ── Seafood Specialties ──
  { id: 7,  category: "seafood",  sub: "Seafood Specialties",    name: "Fiery Thai Crab",          price: "৳1,200", desc: "A perfect mix of heat, crunch, and ocean freshness, cooked in aromatic red chilli and herbs" },
  { id: 8,  category: "seafood",  sub: "Seafood Specialties",    name: "Garlic Pepper Steamed Fish", price: "৳750",  desc: "Whole fish steamed with fresh garlic, black pepper, spring onion, and soy reduction" },
  { id: 9,  category: "seafood",  sub: "Seafood Specialties",    name: "Cajun Grilled Red Snapper", price: "৳980",  desc: "Premium red snapper fillet rubbed with robust Cajun spices and grilled over open flame" },

  // ── Thai & Chinese ──
  { id: 10, category: "asian",    sub: "Chinese & Thai Wok Specialties", name: "Crispy Shredded Beef", price: "৳650",  desc: "Crisp texture rich with flavors, wok-fried with bell peppers, chillies, and green onions" },
  { id: 11, category: "asian",    sub: "Chinese & Thai Wok Specialties", name: "Naan & Butter Chicken", price: "৳650",  desc: "Tender tandoori chicken simmered in a smooth, buttery tomato cream gravy, served with hot garlic naan" },
  { id: 12, category: "asian",    sub: "Chinese & Thai Wok Specialties", name: "Thai Spicy Basil Chicken", price: "৳520",  desc: "Minced chicken stir-fried with hot holy basil leaves, fresh red chillies, and garlic" },
  { id: 13, category: "asian",    sub: "Chinese & Thai Wok Specialties", name: "Beijing Sweet & Sour Prawn", price: "৳750",  desc: "Wok-tossed prawns in a tangy sweet and sour sauce with pineapple and bell peppers" },

  // ── Sizzlers & Kebabs ──
  { id: 14, category: "korean",   sub: "Sizzlers & Kebabs",      name: "Lamb Chops",               price: "৳1,400", desc: "Premium lamb chops, marinated in house spices and grilled to succulent perfection, served sizzling" },
  { id: 15, category: "korean",   sub: "Sizzlers & Kebabs",      name: "Tava Special Sizzling Beef", price: "৳850",  desc: "Tender sliced beef steak served sizzling with onions, bell peppers, and rich black pepper sauce" },
  { id: 16, category: "korean",   sub: "Sizzlers & Kebabs",      name: "Tandoori Murgh (Half)",    price: "৳550",  desc: "Classic chicken marinated in spiced yogurt, grilled in a traditional clay oven" },

  // ── Mughlai Grand Platters ──
  { id: 17, category: "platters", sub: "Royal Mughlai Platters (Serves 4)", name: "Nawabi Platter", price: "৳5,000", desc: "Assortment of mutton biryani, chicken tikka, mutton seekh kebab, butter chicken, hot garlic naan, refreshing lassi, and gulab jamun" },
  { id: 18, category: "platters", sub: "Royal Mughlai Platters (Serves 4)", name: "Mughal-E-Azam Platter", price: "৳5,000", desc: "Aromatic saffron rice, whole roasted chicken, mutton seekh kebabs, butter chicken, garlic naan, cold drinks, and premium Shahi gulab jamun" },
];

// ─── Happenings / Events ──────────────────────────────────────────────────────
export const HAPPENINGS = [
  {
    id: 1,
    title: "Grand Mughlai Buffet",
    date: "Every Friday",
    time: "1:00 PM – 4:00 PM",
    desc: "Savor a grand Mughlai feast featuring our signature Nawabi Biryani, Tandoori chicken, kebabs, butter chicken, and endless hot naans. Buffet includes dessert and lassi.",
    tag: "Grand Buffet",
  },
  {
    id: 2,
    title: "Sizzling BBQ Night",
    date: "Every Saturday",
    time: "6:30 PM – 10:30 PM",
    desc: "Experience live grilling of premium Lamb Chops, Sizzling Beef, and Tandoori Kebabs. Enjoy special prices on all sizzlers with complimentary fresh naans.",
    tag: "Live Grill",
  },
  {
    id: 3,
    title: "Midweek Family Platter Deal",
    date: "Wed – Thu",
    time: "12:00 PM – 10:00 PM",
    desc: "Bring the family and relish our royal Nawabi or Mughal-E-Azam Platters (serves 4) with a special midweek discount. Includes complimentary desserts for everyone.",
    tag: "Family Offer",
  },
];

// ─── Menu Preview (category cards for Home page) ─────────────────────────────
export const MENU_PREVIEW = [
  {
    id: "starters",
    label: "Starters",
    color: "bg-gold",
    textColor: "text-brown",
    items: ["Thai Calamari", "Mixed Tempura", "Soft Shell Crab", "Soups"],
  },
  {
    id: "seafood",
    label: "Seafood Specialties",
    color: "bg-teal",
    textColor: "text-cream",
    items: ["Fiery Thai Crab", "Steamed Garlic Fish", "Cajun Red Snapper", "Sizzling Prawns"],
  },
  {
    id: "asian",
    label: "Thai & Chinese",
    color: "bg-brown",
    textColor: "text-cream",
    items: ["Crispy Shredded Beef", "Butter Chicken", "Spicy Basil Chicken", "Beijing Wok Prawns"],
  },
  {
    id: "platters",
    label: "Royal Platters",
    color: "bg-cream-dark",
    textColor: "text-brown",
    items: ["Nawabi Platter (Serves 4)", "Mughal-E-Azam Platter", "Sizzling Lamb Chops", "Sizzling Beef"],
  },
];
