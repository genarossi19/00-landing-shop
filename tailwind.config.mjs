/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-green": '#A1D03C',
				"secondary-black": "#030617",
				"background-gray": "#eff3f6",
			},
		},
	},
	plugins: [],
}
