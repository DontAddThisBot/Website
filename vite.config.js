import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	jsx: ['js', 'jsx'],
	plugins: [react()],
	server: {
		port: 3000,
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		target: 'es2021',
	},
});
