import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postcss from "postcss";


export default defineConfig({
  plugins: [react() ,
    tailwindcss()
  ],
})
