/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	darkMode: 'class',
	daisyui: {
		themes: ['light', 'synthwave'],
	},
	theme: {
		extend: {
			fontFamily: {
				popi: ['var(--font-popi)'],
			},
			fontWeight: {
				'popi-light': ['var(--font-weight-light)'],
				'popi-regular': ['var(--font-weight-regular)'],
				'popi-bold': ['var(--font-weight-bold)'],
			},
			height: {
				38: '9rem',
				40: '11rem',
			},
		},
	},
	plugins: [require('daisyui')],
}
