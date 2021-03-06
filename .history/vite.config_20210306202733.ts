import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),
  vitePluginImp({
    libList: [
      {
        libName: 'vant',
        style(name) {
          return `ant-design-vue/es/${name}/style/index.css`
        }
      }]
  })]
})
