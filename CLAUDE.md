# Tava Restaurant Customization Guide & Checklist

Welcome to the **Tava Restaurant** website project! We have successfully transitioned the design system to a **premium Royal Teal-Navy, Luxury Gold, and Off-White** palette that reflects the authentic vibe of Tava. We have also loaded the verified contact, address, established year, and open hours information directly from your Facebook Page, along with signature menu items.

---

## 📋 Restaurant Setup Status Dashboard

| Item | Facebook Source Value | Status | Target File / Code |
| :--- | :--- | :--- | :--- |
| **Restaurant Name** | Tava | **Done ✅** | `index.html`, `Navbar.jsx`, `Footer.jsx`, `About.jsx`, etc. |
| **Established Year** | Est. 1993 | **Done ✅** | `SITE.est` in `data.js` |
| **Address** | Arcadia Shopping Complex, 4th Floor #4, Zakir Hossain Road, South Khulshi | **Done ✅** | `SITE.address` & `SITE.country` in `data.js` |
| **Phone Number** | 01729-298282 | **Done ✅** | `SITE.phone` in `data.js` |
| **Email Address** | tava.restaurant@yahoo.com | **Done ✅** | `SITE.email` in `data.js` |
| **WhatsApp Direct** | 8801729298282 | **Done ✅** | `waLink` in `Reservation.jsx` and `Navbar.jsx` |
| **Opening Hours** | Mon – Sun: 12:00 PM – 11:00 PM | **Done ✅** | `SITE.hoursDetail` in `data.js` |
| **Social Links** | FB: TavaRestaurantChittagong | **Done ✅** | `SITE.facebook` & `SITE.instagram` in `data.js` |
| **Visual Vibe** | Royal Teal-Navy & Gold (from menu cards) | **Done ✅** | `@theme` in `index.css` & `Footer.jsx` |
| **Menu Categories** | Starters, Soups, Seafood Specialties, Thai & Chinese, Sizzlers & Kebabs, Mughlai Grand Platters | **Done ✅** | `MENU_CATEGORIES` in `data.js` |
| **Signature Dishes** | Thai Calamari, Mixed Tempura, Soft Shell Crab, Fiery Tom Yum, Fiery Thai Crab, Steamed Garlic Fish, Cajun Red Snapper, Crispy Shredded Beef, Naan & Butter Chicken, Basil Chicken, Beijing Prawn, Lamb Chops, Sizzling Beef, Tandoori Chicken, Nawabi Platter (Serves 4), Mughal-E-Azam Platter (Serves 4) | **Done ✅** | `MENU_ITEMS` in `data.js` |

---

## 🚀 What to Do Next (Action Checklist for You)

Here are the easy steps to replace the temporary assets with your actual custom files:

### 1. 🖼️ Replace the Images
Copy your desired files into the following paths in your project:
*   **Logo**: Save your brand logo as `logo.png` inside the `[public/](file:///d:/Tava/public/)` directory (transparent background works best).
*   **Hero Banner**: Save your main hero background photo (the beautiful picture that goes behind the main title) as `Hero.jpg` inside the `[public/](file:///d:/Tava/public/)` directory.
*   **Restaurant Interior**: Save a photo of Tava's interior space as `restaurant-interior.jpg` inside the `[public/](file:///d:/Tava/public/)` directory.
*   **Food Showcase Gallery**: Inside `[public/Food pictures/](file:///d:/Tava/public/Food%20pictures/)`, replace the default images `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, and `8.jpg` with Tava's signature dish pictures!

### 2. 🍽️ Complete the Menu Items
Currently, the menu features your signature items (Thai Calamari, Mixed Tempura, Lamb Chops, Naan & Butter Chicken, Nawabi Platter, Mughal-E-Azam Platter, Fiery Thai Crab, and Crispy Shredded Beef) loaded directly from your menu cards!
*   If you have a digital menu card or text file with more items, **just send it to me here**, and I will format and drop all items in for you in a matter of seconds!

---

## 🛠️ Developer Commands

When running the project locally or testing changes:

*   **Install dependencies**: `npm install`
*   **Start Local Dev Server**: `npm run dev`
*   **Verify Production Build**: `npm run build`