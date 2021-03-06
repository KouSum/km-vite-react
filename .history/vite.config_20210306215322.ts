import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dist/",
  build: {
    outDir: "dist",
  },
  legacy({
    targets: ['IE 11']
  }),
  plugins: [reactRefresh(),
  vitePluginImp({
    libList: [
      {
        libName: 'antd',
        style(name) {
          return `antd/lib/${name}/style/index.css`
        }
      }]
  })]
})
