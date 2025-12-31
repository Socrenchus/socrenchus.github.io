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
      apply: 'build',
      closeBundle() {
        // Create .nojekyll file to disable Jekyll processing on GitHub Pages
        try {
          const outDir = resolve(__dirname, 'dist')
          writeFileSync(resolve(outDir, '.nojekyll'), '', 'utf-8')
        } catch (error) {
          console.warn('Failed to create .nojekyll file:', error.message)
        }
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
