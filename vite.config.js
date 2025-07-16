// import { resolve } from "path";

// export default {
//   root: "./src",
//   build: {
//     outDir: "../dist",
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, "./src/index.html"),
//         thanks: resolve(__dirname, "./src/thanks.html"),
//       },
//     },
//   },
// };


import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        thanks: resolve(root,  'thanks', 'index.html'),
      }
    }
  }
})
