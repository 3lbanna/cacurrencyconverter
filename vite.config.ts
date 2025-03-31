import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Enable environment variables
  base: "/cacurrencyconverter/", // Needed for GitHub Pages
  envPrefix: 'VITE_',
})
