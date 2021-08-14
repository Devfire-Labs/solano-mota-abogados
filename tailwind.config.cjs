module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				gilland: ['Gilland', 'serif'],
				galey: ['Galey', 'serif'],
				blueberry: ['Blueberry Sans', 'sans-serif'],
			},
			colors: {
				primary: '#262626',
				secondary: '#345659',
				tertiary: '#395941',
				quaternary: '#F2E4D8',
				quinary: '#BFA678',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
