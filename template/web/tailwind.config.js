/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../node_modules/stwui/**/*.{svelte,js,ts,html}'
	],
	plugins: [
		require('@tailwindcss/forms'),
		require('stwui/plugin')
	],
	stwui: {
	  themes: [
		 {
			mytheme: {
				// Required
				primary: '#2563eb',
				default: '#E4E6EB',
				danger: '#dc2626',
				surface: '#ffffff',
				background: '#F0F2F5',
				border: '#E8E9EC',
				hover: '#000000'


			},
		 },
		 "dark",     // add <html data-theme="dark">
		 "light",
	  ],
	},
 }
