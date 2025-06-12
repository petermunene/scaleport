import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/scaleport/', // 👈 Add this line
  plugins: [react()],
})
