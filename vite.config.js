import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import ScriptSetup from 'unplugin-vue2-script-setup/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), ScriptSetup()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
