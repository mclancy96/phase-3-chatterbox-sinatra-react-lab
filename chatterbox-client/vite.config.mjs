import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/messages': {
        target: 'http://localhost:9292',
        changeOrigin: true
      }
    }
  }
})
