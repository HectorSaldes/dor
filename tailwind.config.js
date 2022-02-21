module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			poppins: ["Poppins"],
		},
		extend: {
			colors: {
				dorColor: {
					100: "#F3F5F9",
				},
			},
			container: {
				center: true,
			},
		}
	},
	plugins: [],
}