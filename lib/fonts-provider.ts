import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
	subsets: ["latin"],
	style: ["normal"],
});

export const branch = localFont({
	src: [{ path: "../public/fonts/Branch.ttf", weight: "400", style: "normal" }],
	variable: "--font-branch",
});

export const angela = localFont({
	src: [{ path: "../public/fonts/Angela.otf", weight: "400", style: "normal" }],
	variable: "--font-branch",
});
