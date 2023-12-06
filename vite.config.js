import { defineConfig } from 'vite'

import uni from '@dcloudio/vite-plugin-uni'

import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: "/h5/",
  plugins: [
    uni(),
    UnoCSS(),
  ],
  server: {
    // proxy: {
    //   '/api': 'http://localhost:3001/',
    //   '/storage': 'http://localhost:3001/'
    // }
  }
})
