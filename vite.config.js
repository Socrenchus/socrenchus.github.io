import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    (() => {
      let outDir = 'dist'
      return {
        name: 'create-nojekyll',
        apply: 'build',
        configResolved(config) {
          // Store the resolved config for later use
          outDir = config.build.outDir
        },
        closeBundle() {
          // Create .nojekyll file to disable Jekyll processing on GitHub Pages
          try {
            const outputDir = resolve(__dirname, outDir)
            writeFileSync(resolve(outputDir, '.nojekyll'), '', 'utf-8')
          } catch (error) {
            console.warn('Failed to create .nojekyll file:', error.message)
          }
        }
      }
    })()
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
