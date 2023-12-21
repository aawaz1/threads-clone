import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port : 3000,
    // get rid of the cors error-
    proxy : {
      "/api" : {
        target : "https://threads-clone-api-beta.vercel.app/",
        changeOrigin : true,
        secure : false,
      }
    },
  }
})
