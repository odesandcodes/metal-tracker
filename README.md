# Metal Wealth Tracker 🪙

A robust, server-side rendered (SSR) dashboard for tracking the value of Gold and Silver holdings. 

**Live Demo:** [https://metal-tracker.pages.dev](https://metal-tracker.pages.dev)

---

## 📖 Overview
This application provides a "Stable View" of the precious metals market. Instead of chasing volatile, second-by-second ticker prices, it locks onto the **Official Daily Close** (00:00 UTC). 

This ensures that whenever you check the app during the day, the numbers are rock-solid, consistent, and match the official charts, providing a calm and accurate reference point for long-term investors.

### Key Features
* **Institutional Grade Data:** Uses **PAX Gold (PAXG)** and **Kinesis Silver (KAG)** daily closing candles to ensure weekend and holiday data availability (24/7 markets).
* **Server-Side Rendering (SSR):** Charts and prices are fetched and rendered on the server (Cloudflare Edge) before the HTML ever reaches your phone. This results in instant load times and zero API exposure to the client.
* **Wealth Calculator:** Enter your holdings (Ounces & Year Bought) to instantly see Current Value, Profit/Loss ($), and ROI (%).
* **Zero-Ambiguity UI:** Clearly labels the "Data Date" and "Next Scheduled Update" so you always know exactly how fresh the numbers are.

---

## 🏗 Architecture & Logic

### 1. The Stack
* **Framework:** [Astro](https://astro.build) (Node.js based, geared for content-heavy sites).
* **Adapter:** `@astrojs/cloudflare` (Enables Server-Side Rendering on Cloudflare Pages).
* **Hosting:** Cloudflare Pages (Global Edge Network).
* **Styling:** Native CSS (Grid/Flexbox) with no heavy frameworks like Tailwind or Bootstrap.

### 2. The Data Strategy ("The Daily Close")
We intentionally bypass the "Simple Price" (Live Ticker) endpoint in favor of the **Historical Market Chart** endpoint.

* **API:** CoinGecko Public API (V3)
* **Endpoints:**
    * `GET /coins/pax-gold/market_chart?days=30&interval=daily`
    * `GET /coins/kinesis-silver/market_chart?days=30&interval=daily`
* **Logic:**
    1.  The app fetches the last 30 days of data.
    2.  It grabs the **last completed entry** in the array (the 00:00 UTC close).
    3.  **Result:** The price displayed is the final, settled price of the previous trading day. It does not move until midnight UTC.

### 3. Folder Structure
The entire application logic lives in `src/pages/index.astro`. This is a "Single File Component" that handles everything:

* **Top (Server Fence `---`):**
    * Runs strictly on the server (Cloudflare).
    * Fetches JSON data from CoinGecko.
    * Calculates the "Next Update" time.
    * Generates the SVG Sparkline paths.
* **Middle (Template):**
    * Standard HTML/CSS.
    * Injects the server-calculated variables (prices, SVG paths) directly into the DOM.
* **Bottom (Script):**
    * Tiny client-side JavaScript.
    * Handles the "Calculate Value" button click interaction only.

---

## 🚀 How to Run Locally

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/metal-tracker.git](https://github.com/YOUR_USERNAME/metal-tracker.git)
    cd metal-tracker
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see the app.

---

## 📦 Deployment
This project is configured for **Cloudflare Pages**.

1.  **Push to GitHub:**
    ```bash
    git add .
    git commit -m "Update"
    git push
    ```
2.  **Cloudflare:**
    * Cloudflare Pages detects the push.
    * It runs `npm run build`.
    * It deploys the new SSR function to the global edge network.

---

## ⚠️ Disclaimer
**Educational Use Only.**
This tool uses digital asset proxies (PAXG/KAG) to estimate the value of physical bullion. While these assets track spot prices closely (99%+ correlation), they are not a substitute for professional financial data terminals.

**License:** MIT