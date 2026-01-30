import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 1. Force Server-Side Rendering (updates on every visit)
  output: 'server',
  
  // 2. Use the Cloudflare Adapter
  adapter: cloudflare()
});