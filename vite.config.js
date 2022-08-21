import { fileURLToPath, URL } from 'node:url'
import { createRouter, createWebHistory } from 'vue-router'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import path from 'path'
import Components from "unplugin-vue-components/vite"
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';


// https://vitejs.dev/config/
export default defineConfig({
  base: 'jewelryWebsite',
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.js",
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),
  
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})