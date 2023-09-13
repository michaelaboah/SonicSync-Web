import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 4000,
  },
	plugins: [sveltekit(), Icons({compiler: "svelte"})],
  optimizeDeps: {
    exclude: ['@urql/svelte']
  }
});


