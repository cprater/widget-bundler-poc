import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:8080/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: [
        './src/tenants/Puppy.jsx',
        './src/tenants/Taco.jsx',
      ],
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
