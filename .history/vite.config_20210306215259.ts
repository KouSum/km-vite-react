import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dist/",
  build: {
    outDir: "dist",
  },
  legacy({
    targets: ['chrome 53']
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
