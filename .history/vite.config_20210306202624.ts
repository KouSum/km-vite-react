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
          if (/CompWithoutStyleFile/i.test(name)) {
            // This will not import any style file 
            return false
          }
          return `vant/es/${name}/index.css`
        }
      }]
  })]
})
