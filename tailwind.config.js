module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: false,
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