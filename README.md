# Metalz-Calc

Precious metals portfolio calculator with live pricing and historical profit/loss tracking.

**Live:** [metal.odesandcodes.com](https://metal.odesandcodes.com)

## Features

- 💰 **Live pricing** - Real-time gold and silver prices via CoinGecko API
- 📊 **Visual breakdown** - Animated donut chart showing portfolio allocation
- 📈 **Historical tracking** - Calculate profit/loss from purchase year (1995-2026)
- 🎯 **Simple interface** - Enter ounces and purchase year, get instant valuation
- 📱 **Responsive design** - Works seamlessly on mobile and desktop
- ⚡ **Client-side only** - All calculations happen in browser, no server processing

## How It Works

1. **Live prices** load from CoinGecko (gold via PAX Gold, silver via Kinesis Silver)
2. Enter your **ounces** for gold and/or silver
3. Optionally enter **purchase year** to see profit/loss
4. Click **Calculate Value**
5. See total worth, allocation percentages, and gains/losses

## Historical Data

Includes average annual prices from 1995-2026 for:
- Gold (per troy ounce)
- Silver (per troy ounce)

Calculates ROI based on purchase year vs current market price.

## Data Source

**Live Prices:** CoinGecko API (client-side fetch)
- Gold: PAX Gold (PAXG) as proxy for spot gold
- Silver: Kinesis Silver (KAG) as proxy for spot silver

**Historical Prices:** Embedded database of annual averages (1995-2026)

## Tech Stack

- **Astro** - Static site generation
- **Vanilla JavaScript** - No frameworks
- **CoinGecko API** - Live precious metals pricing
- **CSS3** - Animated donut chart with conic gradients


Automatic deployment via GitHub Actions to AWS/Caddy on push to `main`.

## Calculation Examples

**Example 1: Current Holdings Only**
- 10 oz gold @ $2,800/oz = $28,000
- 50 oz silver @ $32/oz = $1,600
- **Total:** $29,600 (94.6% gold, 5.4% silver)

**Example 2: With Historical Data**
- 5 oz gold bought in 2010 @ $1,224/oz
- Cost: $6,120 | Current: $14,000 | **Profit: +$7,880 (+128.8%)**

## Limitations

- Prices update on page load only (refresh for latest)
- CoinGecko free tier has rate limits (~10-30 requests/min)
- Historical data is annual averages, not exact purchase prices
- Offline mode uses fallback prices ($5,000 gold, $100 silver)

## Disclaimer

⚠️ **EDUCATIONAL USE ONLY**

This calculator is for informational and educational purposes only. It is **NOT financial advice**.

- Prices are estimates and may differ from actual spot prices
- Historical data is generalized (annual averages)
- Does not account for premiums, storage fees, taxes, or transaction costs
- Always consult a financial advisor for investment decisions

The developer assumes no liability for financial decisions made using this tool.

## Privacy

- No data is stored or transmitted to any server
- All calculations happen client-side in your browser
- No cookies, tracking, or analytics

## License

MIT

---

Data provided by CoinGecko. Historical price data compiled from public sources.