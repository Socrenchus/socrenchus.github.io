import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'create-nojekyll',
      closeBundle() {
        // Create .nojekyll file to disable Jekyll processing on GitHub Pages
        const outDir = resolve(__dirname, 'dist')
        writeFileSync(resolve(outDir, '.nojekyll'), '', 'utf-8')
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
