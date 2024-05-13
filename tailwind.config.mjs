/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-green": '#b9eb4a',
				"secondary-black": "#030617",
				"background-gray": "#eff3f6",
			},
		},
	},
	plugins: [],
}
