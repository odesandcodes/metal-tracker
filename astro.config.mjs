import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Revert to static (default)
  output: 'static',
  adapter: cloudflare()
});