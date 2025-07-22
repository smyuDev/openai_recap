import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {                   //테스트코드
    environment: 'jsdom',
    globals: true,
    setupFiles: "./src/setupTests.js"
  }
})
