import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  plugins: [
    react(), 
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
  },
  
})
