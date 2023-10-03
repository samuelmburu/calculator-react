// eslint-disable-next-line n/file-extension-in-import
import UnoCSS from 'unocss/vite';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// eslint-disable-next-line new-cap
		UnoCSS(),
	],
});
