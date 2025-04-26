import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default (params: { mode: string }) => {
  process.env = {
    ...process.env,
    ...loadEnv(params.mode, process.cwd(), ''),
  }

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: '/',
    build: {
      target: 'esnext',
    },
  })
}
