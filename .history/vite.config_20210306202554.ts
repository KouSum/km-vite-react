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
          if (/popconfirm/.test(name)) {
            // support multiple style file path to import
            return [
              'ant-design-vue/es/button/style/index.css',
              'ant-design-vue/es/popover/style/index.css'
            ]
          }
          return `ant-design-vue/es/${name}/style/index.css`
        }
        }
      }]
  })]
})
