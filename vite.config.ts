import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/life-planner/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Life Planner',
        short_name: 'Life Planner',
        description: 'AI-assisted life planning application for financial and estate planning',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/life-planner/',
        start_url: '/life-planner/',
        icons: [
          {
            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%232563eb"/><text x="50" y="50" font-size="48" text-anchor="middle" dominant-baseline="central" fill="white" font-family="Arial,sans-serif">LP</text></svg>',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
      }
    })
  ],
})
