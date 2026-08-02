# Pettagama.lk - Sri Lanka Arts, Crafts, Jewellery & Gift e-Commerce Demo

Visually complete, customer-ready, high-converting FRONTEND-ONLY e-commerce demo website for **Pettagama.lk** — a premier Sri Lankan store located at 241 Galle Road, Kalutara.

---

## 🎨 Business Details

- **Business Name**: Pettagama.lk
- **Business Type**: Arts & Crafts Store, Gift Shop and Online Store
- **Address**: 241 Galle Road, Kalutara, Sri Lanka
- **Phone**: +94 76 330 2572
- **WhatsApp**: +94 77 514 2572
- **Email**: onlinepettagama@gmail.com
- **Opening Hours**: 8:30 AM – 7:30 PM (Daily)
- **Tagline**: *"Everything You Need for Your Creativity"*

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State & Storage**: React Context + `localStorage` for Cart & Wishlist
- **Media**: Next/Image with remote un-splash domain optimization

---

## 🛍️ Key Features & Pages

1. **`/` (Homepage)**: 18 distinct sections including Hero Slider, Trust Benefits, Circular Category Showcase, Flash Deals with real-time countdown timer, Best Sellers, New Arrivals, Featured Crafts, Combo Bundles, Popular Gifts, DIY Craft Tutorials, Testimonials, Instagram Feed, VIP Newsletter, and Kalutara Store Map.
2. **`/shop`**: Complete product grid with live search, category selector, price range slider, star rating filter, availability toggle, sort dropdown (Price low-high, high-low, rating, newest), view switcher (Grid/List), mobile filter drawer, and pagination.
3. **`/category/[slug]`**: Dedicated category collection page with hero header and filtered product listings.
4. **`/product/[slug]`**: Detailed product page featuring thumbnail gallery + hover zoom, stock counter, SKU, variant selectors, quantity controls, Add to Cart, Buy Now, Direct WhatsApp Order button (`+94 77 514 2572`), Wishlist button, tabs for Description, Specs, Delivery & Reviews, and Frequently Bought Together combo box.
5. **`/cart`**: Interactive cart manager with item quantity adjustments, remove, clear cart, promo coupon (`PETTAGAMA10`), islandwide courier shipping calculation (free over Rs. 5,000), and checkout CTA.
6. **`/wishlist`**: Wishlist saved products page with "Move to Cart" and remove options.
7. **`/checkout`**: One-page Sri Lankan checkout form with Province/District selectors, Delivery method choices (Standard Courier / Store Pickup Kalutara), Payment method cards (COD, Visa/Mastercard, Direct Bank Transfer), and a confirmation modal with fake order ID (`#PET-89421`).
8. **`/track-order`**: Order tracking tool with phone & Order ID lookup and interactive 6-stage timeline tracker.
9. **`/about`**: Story of Pettagama.lk in Kalutara, vision, mission, and core pillars.
10. **`/contact`**: Interactive contact form with toast notification, phone, email, opening hours, WhatsApp link, and Google Map.
11. **`/blog` & `/blog/[slug]`**: DIY craft guides & step-by-step tutorials (Resin art, Pipe cleaner flowers, Jewellery making).
12. **`/login`**: Visual demo account sign-in & register form with notice badge.

---

## 💻 Local Development Setup

Run the following commands in your terminal:

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To test the production build:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel

1. Push your repository to GitHub.
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Click **Deploy**. No environment variables or database configuration needed!

### Deploy to Netlify

1. Connect your GitHub repository to [Netlify](https://app.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy site.

---

## 🏷️ Credits Label

Includes discreet footer credit:
`"Concept Website Demo by Harsh Apex Digital Solutions"`
