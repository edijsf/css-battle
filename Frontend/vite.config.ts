import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mkcert(), react()],
  server: { https: true }
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import mkcert from "vite-plugin-mkcert"

// export default defineConfig({
//   base: "/",
//   plugins: [mkcert(), react()],
//   preview: {
//     port: 8080,
//     strictPort: true,
//   },
//   server: {
//     port: 8080,
//     strictPort: true,
//     host: true,
//     origin: "http://0.0.0.0:8080",
//   },
// });
