import {defineConfig, presetUno, presetWebFonts} from 'unocss';

export default defineConfig({
	// ...UnoCSS options
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				mono: 'major-mono-display',
				sans: 'sans-serif',
			},
		}),
	],
	rules: [
		['btn', {'font-family': 'mono'}],
	],
	shortcuts: {
		screen: ['font-mono', 'font-size-10', 'w-xs', 'px-1', 'py-2', 'flex', 'justify-right'].join(' '),
	},
});
