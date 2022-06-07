module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			letterSpacing: {
				widest: ".3em",
			},
			height: (theme) => ({
				"screen/70": "70vh",
			}),
		},
	},
	plugins: [],
};
