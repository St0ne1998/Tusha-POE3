/**
 * TUSHA PETALS & GIFTS — Integrated JS Dynamic Script Engine Engine
 * Handles Lightbox Gallery, Live Filters, Form Calculation & System Validation.
 */

// Global Luxury Arrangement Catalog Array Metrics Payload
const TUSHA_CATALOG = [
  { id: "p1", name: "100 Stem Red Rose Bouquet", category: "bouquets", price: 1800, img: "f1.jpeg", desc: "The ultimate declaration — 100 fresh premium crimson roses." },
  { id: "p2", name: "Red Elegance Floating Vase", category: "bouquets", price: 750, img: "f4.jpeg", desc: "Classic red roses meticulously balanced with seasonal local greenery arrangements." },
  { id: "p3", name: "Bespoke Blush Velvet Heart Box", category: "boxes", price: 850, img: "f5.jpeg", desc: "A luxurious heart-shaped gift box overflowing with premium pastel blooms." },
  { id: "p4", name: "Curated Celebration Gourmet Hamper", category: "hampers", price: 950, img: "f7.jpeg", desc: "A gorgeous combination of selection treats, cards, snacks, and beautiful blooms." }
];

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initLightboxGallery();
  initDynamicCatalog();
  initAdvancedCalculationForm();
});

/* Navigation Bar Interactive State Logic Toggle */
function initNavigation() {
  const toggleBtn = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if(toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !expanded);
      navLinks.style.display = expanded ? "none" : "flex";
    });
  }
}

/* Lightbox Immersive Modal Implementation Framework */
function initLightboxGallery() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  if(!lightbox) return;

  // Listen globally to intercepts on gallery triggered classes elements
  document.addEventListener("click", (e) => {
    if(e.target.classList.contains("gallery-img")) {
      lightbox.setAttribute("aria-hidden", "false");
      lightboxImg.src = e.target.src;
      lightboxCaption.textContent = e.target.getAttribute("data-caption") || "Tusha Petals Exclusive Arrangement";
    }
  });

  if(closeBtn) {
    closeBtn.addEventListener("click", () => lightbox.setAttribute("aria-hidden", "true"));
  }
  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox) lightbox.setAttribute("aria-hidden", "true");
  });
}

/* Dynamic Live Search String Filters Pipeline Framework Grid Implementation */
function initDynamicCatalog() {
  const container = document.getElementById("dynamic-products-grid");
  if(!container) return; // Only process on instances running shop view pages

  const searchInp = document.getElementById("searchInput");
  const catFilter = document.getElementById("categoryFilter");
  const priceSort = document.getElementById("priceSort");

  const renderGrid = (items) => {
    if(items.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 3rem 0;">No luxury arrangements found matching search queries framework.</p>`;
      return;
    }
    container.innerHTML = items.map(p => `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" class="gallery-img" data-caption="${p.name} - R${p.price}.00" />
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
        </div>
        <div class="product-footer">
          <span class="product-price">R ${p.price}.00</span>
          <a class="product-wa-btn" target="_blank" href="https://wa.me/27728357337?text=Hi%20Tusha%20Petals,%20I%20want%20to%20order%20the%20${encodeURIComponent(p.name)}">Order Range →</a>
        </div>
      </article>
    `).join("");
  };

  const processFiltersPipeline = () => {
    let dataset = [...TUSHA_CATALOG];
    const query = searchInp.value.toLowerCase().trim();
    const activeCat = catFilter.value;
    const sortVal = priceSort.value;

    // Search Query Constraint Metric Calculation
    if(query) {
      dataset = dataset.filter(item => item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query));
    }

    // Category Choice Normalisation Matching
    if(activeCat !== "all") {
      dataset = dataset.filter(item => item.category === activeCat);
    }

    // Sort Sequencing Matrix Operation Values
    if(sortVal === "low-high") {
      dataset.sort((a,b) => a.price - b.price);
    } else if(sortVal === "high-low") {
      dataset.sort((a,b) => b.price - a.price);
    }

    renderGrid(dataset);
  };

  searchInp.addEventListener("input", processFiltersPipeline);
  catFilter.addEventListener("change", processFiltersPipeline);
  priceSort.addEventListener("change", processFiltersPipeline);

  // Run initial loading
  renderGrid(TUSHA_CATALOG);
}

/* Automated Evaluation Calculations Form Logic & Input Validations */
function initAdvancedCalculationForm() {
  const form = document.getElementById("advancedOrderForm");
  if(!form) return;

  const typeSelect = document.getElementById("arrangementType");
  const qtyInput = document.getElementById("itemQuantity");
  const costSummary = document.getElementById("costCalculationResult");
  const feedbackBox = document.getElementById("validationFeedback");

  const calculateLiveValuation = () => {
    const selectedOption = typeSelect.options[typeSelect.selectedIndex];
    const qty = parseInt(qtyInput.value) || 0;
    
    if(!selectedOption || !selectedOption.getAttribute("data-price") || qty <= 0) {
      costSummary.style.display = "none";
      return;
    }

    const baseUnitCost = parseFloat(selectedOption.getAttribute("data-price"));
    const finalCalculatedSum = baseUnitCost * qty;

    costSummary.style.display = "block";
    costSummary.innerHTML = `Estimated Configuration Total: R ${finalCalculatedSum.toFixed(2)}`;
  };

  typeSelect.addEventListener("change", calculateLiveValuation);
  qtyInput.addEventListener("input", calculateLiveValuation);

  // Intercept Submission Workflow Chain for Validation Check constraints
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    feedbackBox.textContent = "";
    feedbackBox.style.color = "inherit";

    const qty = parseInt(qtyInput.value) || 0;

    // Client-side Input Volume Tracking metrics volume constraint threshold verification
    if(qty < 1 || qty > 100) {
      feedbackBox.style.color = "red";
      feedbackBox.textContent = "Validation Failure: Requested count allocation threshold bounds must sit between 1 and 100 units.";
      return;
    }

    feedbackBox.style.color = "orange";
    feedbackBox.textContent = "Transmitting data metrics package safely...";

    // Asynchronous Payload Transmission Request
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if(response.ok) {
        feedbackBox.style.color = "green";
        feedbackBox.textContent = "Success! Your configuration package has been transmitted cleanly.";
        form.reset();
        costSummary.style.display = "none";
      } else {
        throw new Error("Target service interface system returned non-ok processing state response.");
      }
    } catch(err) {
      feedbackBox.style.color = "red";
      feedbackBox.textContent = `Transmission Error: Unable to process packet payload safely. ${err.message}`;
    }
  });
}