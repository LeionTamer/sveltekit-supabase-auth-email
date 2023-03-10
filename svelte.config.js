import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		alias: {
			'@stores': path.resolve('./src/stores'),
			'@components': path.resolve('./src/components')
		},
		adapter: adapter()
	}
};

export default config;
