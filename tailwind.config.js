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
				"screen/80": "80vh",
				"screen/90": "90vh",
				"screen/100": "100vh",
			}),
			scale: {
				102: "102%",
			},
			colors: {
				mintGreen: "#4dfed1",
			},
		},
	},
	plugins: [],
};
