# Metal Wealth Tracker

A responsive, server-side rendered dashboard to track the real-time value of Gold and Silver holdings. 

**Live Demo:** [https://metal-tracker.pages.dev](https://metal-tracker.pages.dev)

### 🚀 Features
* **Live Market Data:** Real-time spot prices via open-source currency APIs.
* **30-Day Trend Charts:** Server-generated sparklines (SVG) to visualize market volatility.
* **Wealth Calculator:** Instantly calculates current portfolio value.
* **Historical Performance:** Compares current value vs. average price in year of purchase (2010–2026) to show exact Profit/Loss in dollars and percentage.
* **Zero-JS Footprint:** Charts and initial data are rendered on the server (Cloudflare) for instant load times.
* **Responsive Design:** "App-like" stacked layout on mobile, side-by-side dashboard on desktop.

### 🛠 Tech Stack
* **Framework:** Astro (SSR)
* **Hosting:** Cloudflare Pages
* **Styling:** Native CSS (Grid/Flexbox)
* **Data Sources:**
    * *Price:* jsdelivr/fawazahmed0 currency API
    * *Charts:* Yahoo Finance Public Chart Data

### ⚠️ Disclaimer
**For Educational Purposes Only.**
This application does not provide financial advice. Data is estimated and may be delayed. No user data is stored; all calculations happen locally in the browser.

### License
MIT License.