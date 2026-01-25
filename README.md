# Metal Wealth Tracker

A responsive, server-side rendered dashboard to track the value of Gold and Silver holdings.

**Live Demo:** [https://metal-tracker.pages.dev](https://metal-tracker.pages.dev)

### 🚀 Features
* **24/7 Market Data:** Uses **CoinGecko Public API** to track digital metal assets:
    * **Gold:** PAX Gold (PAXG) - A digital token backed by physical gold.
    * **Silver:** Kinesis Silver (KAG) - A digital token backed by physical silver.
    * *Why?* Unlike traditional spot markets which close on weekends, these assets trade 24/7, providing accurate price discovery on Sunday evenings and holidays.
* **30-Day Trend Charts:** Server-generated sparklines (SVG) rendered instantly on load.
* **Wealth Calculator:** Instantly calculates current portfolio value based on ounces held.
* **Profit/Loss Analysis:**
    * Enter your "Year Purchased" (2010–2026).
    * Displays exact **Dollar Gain/Loss** and **Percentage Return** based on historical average prices.
* **Zero-JS Footprint:** Charts and data are fetched server-side (Cloudflare) for instant load times and no client-side API limits.

### 🛠 Tech Stack
* **Framework:** Astro (SSR)
* **Hosting:** Cloudflare Pages
* **Data Sources:** CoinGecko API
* **Styling:** Native CSS (Grid/Flexbox)

### ⚠️ Disclaimer
**For Educational Purposes Only.**
This application does not provide financial advice. Prices are based on digital asset equivalents (PAXG/KAG) which closely track spot prices but may have slight variance. No user data is stored; all calculations happen locally in the browser.

### License
MIT License.