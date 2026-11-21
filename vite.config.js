
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Zewde_Bekele_Biru_Portfolio--2-/',
  plugins: [react()],
  server: { port: 5173, open: true },
})
