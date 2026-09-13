import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua "electral-power-flow" pelo nome exato do seu repositório no GitHub se for diferente
export default defineConfig({
  plugins: [react()],
  base: '/electral-power-flow/',
})