# Tusha Petals & Gifts — WEDE5020 Portfolio of Evidence (Part 3)

**Student Name:** Amusement Herith Lubisi  
**Student Number:** ST10500573 
**Module Code:** WEDE5020 — Web Development  
**Submission Date:** 19 June 2026  
**Live Deployment URL:** https://st0ne1998.github.io/Tusha-POE3/
**GitHub Repository:** https://github.com/st0ne1998/TUSHA-F

---

## 1. Project Overview & Context
Tusha Petals & Gifts is a luxury digital storefront tailored for an upscale boutique florist operating in Mbombela (Nelspruit), South Africa. This repository represents the final, comprehensive iteration (Part 3) of the WEDE5020 Portfolio of Evidence. It transitions a static design framework into a fully interactive, optimized, client-side web application using pure Semantic HTML5, CSS3 Grid Architectures, and Vanilla JavaScript.

---

## 2. Changelog & Revision History (Part 2 → Part 3)
As required by the Part 3 feedback loops, the following structural updates and features have been integrated without deleting any pre-existing services or descriptive content:

* **Reinstatement of the Google Maps Component:** Corrected previous feature omissions by embedding a responsive location tracking map layout under the studio's physical address view inside `contact.html`.
* **Structural Layout Form Realignment:** Re-arranged presentation workflows so that interactive form selectors and live automated calculation blocks appear directly underneath catalog listings, keeping customer reviews underneath the action blocks.
* **Navigation Architecture Clean-up:** Removed administrative panel links from primary user-facing navigation header bars to preserve clean design metrics, maintaining back-end data routing logic in the source codebase.
* **Image Asset Sync:** Integrated original high-resolution local product photography files (`f1.jpeg`, `f4.jpeg`, `f5.jpeg`, `f6.jpeg`, `f7.jpeg`) directly into the dynamic layout interfaces.

---

## 3. Implemented Technical Feature Sets

### 3.1. Interactive Search & Filtering Pipelines (`shop.html` / `main.js`)
* **Live Text-String Queries:** A programmatic search engine scans input characters instantly against arrangement titles and inventory description fields.
* **Dropdown Range Isolation:** Dropdown selection arrays let users instantly filter standard catalog arrays into specific groups: `Luxury Bouquets`, `Bespoke Gift Boxes`, or `Curated Gift Hampers`.
* **Price Sequence Sorting:** Users can sort visible grid cards from lowest-to-highest or highest-to-lowest prices dynamically without reloading the page.

### 3.2. Immersive Visual Lightbox Gallery
* **Zero-Dependency Overlay:** Clicking any image across `index.html` or `shop.html` triggers a beautiful dark modal view with accessibility tags (`aria-hidden`) managed by the script engine.
* **Dynamic Captions:** Captions are pulled on-the-fly from the product image arrays to display item descriptions and currency details directly in the overlay.

### 3.3. Advanced Estimations & Form Validation Checkpoints (`contact.html`)
* **Live Valuation Cost Math:** Selecting an arrangement type and updating the number field triggers live cost calculations, showing real-time price estimation boxes before submission.
* **Volume Bound Constraints:** Form submission hooks prevent invalid inputs by verifying that ordered quantities sit strictly between 1 and 100 units.
* **Asynchronous Web3Forms Endpoint Transmission:** Orders submit quietly in the background using the native JavaScript `Fetch API` to send clean AJAX JSON payloads without disrupting the page state.

### 3.4. Search Engine Optimization & Index Compliance
* **Global Meta Structuring:** All site headers are configured with target indexing attributes (`description`, `keywords`, and responsive layout viewports).
* **Discovery Protocol Map (`sitemap.xml`):** An XML index file explicitly outlines high-priority page trees, page weights, and modification schedules for crawl engines.
* **Crawl Directives Document (`robots.txt`):** Instructs search engine bots to crawl standard store paths while safely excluding sensitive directories like `/private/` or `/admin/`.

##  References

Duckett, J. (2011). *HTML and CSS: Design and Build Websites*. John Wiley & Sons.

Frain, B. (2020). *Responsive Web Design with HTML5 and CSS* (3rd ed.). Packt Publishing.

MDN Web Docs. (2024). *CSS Custom Properties (Variables)*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

MDN Web Docs. (2024). *Responsive Images*. Mozilla. https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

MDN Web Docs. (2024). *CSS Grid Layout*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

MDN Web Docs. (2024). *CSS Flexible Box Layout*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout

W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.1*. https://www.w3.org/TR/WCAG21/

Google Fonts. (2026). *Playfair Display, Lato, Cormorant Garamond*. https://fonts.google.com

CSS-Tricks. (2023). *A Complete Guide to CSS Grid*. https://css-tricks.com/snippets/css/complete-guide-grid/

CSS-Tricks. (2023). *A Complete Guide to Flexbox*. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

## 4. File Architecture


```
TUSHA-F/
├── index.html          ← Homepage (updated Part 2)
├── shop.html           ← Shop/Collections page (new Part 2)
├── contact.html        ← Contact page (new Part 2)
├── style.css           ← External stylesheet (new Part 2)
main.js
├── f1.jpeg             ← Product image: 100 Red Roses
├── f4.jpeg             ← Product image: Red Elegance
├── f5.jpeg             ← Product image: Heart Box
├── f6.jpeg             ← Product image: Mixed Bouquet
├── f7.jpeg             ← Product image: Gift Hamper
├── f8.jpeg             ← Product image: Bespoke
├── screenshots/        ← Responsive testing screenshots (Part 2)
│   ├── desktop-1440.png
│   ├── tablet-768.png
│   └── mobile-425.png
└── README.md           ← This file
```                 # Shared secondary icon and logo graphics
