import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [svgr(), react()],
  resolve : {
    alias : [
      { find : '@', replacement : "/src"},
      { find : '@assets', replacement : "/src/assets"},
      { find : '@components', replacement : 'src/components'},
      { find : '@styles', replacement : '/src/styles'}
    ]
  }
})
