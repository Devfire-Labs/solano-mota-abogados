const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
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
	plugins: [],
};

module.exports = config;
