import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://martinye931219.github.io',
  base: '/kanyangjia',
  output: 'static',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
