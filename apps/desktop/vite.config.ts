import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig({
  plugins: [solidPlugin(), solidSvg({
    /**
     * If true, will export as JSX component if `as` isn't specified.
     *
     * Otherwise will export as url, or as JSX component if '?as=component-solid'
     */
    defaultAsComponent: true,

    svgo: {
      enabled: true, // optional, by default is true
    }
  })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
