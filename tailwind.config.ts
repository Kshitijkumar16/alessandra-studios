import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		screens: {
			uw: "1761px",
			xxl: "1536px",
			xl: "1442px",
			xlg: "1290px",
			lg: "1026px",
			xmd: "954px",
			md: "770px",
			sm: "641px",
		},
		extend: {
			colors: {},
		},
	},
	variants: {
		extend: {
			animation: ["responsive", "hover"],
		},
	},
	plugins: [
		function ({
			addUtilities,
		}: {
			addUtilities: (utilities: Record<string, Record<string, string>>) => void;
		}) {
			const newUtilities = {
				".paused": {
					animationPlayState: "paused",
				},
				".running": {
					animationPlayState: "running",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
export default config;
