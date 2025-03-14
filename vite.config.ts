import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reimagined-palm-tree/",  // Used for GitHub pages deployment
  server: {
    host: '127.0.0.1',  // Container defaults to IPv6 when specifying "localhost", so manually use IPv4 address instead
    watch: {
      usePolling: true,
      interval: 2000,
      binaryInterval: 5000,
    },
  },
});
