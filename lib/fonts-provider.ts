import { Noto_Sans_Display } from "next/font/google";
import { Noto_Serif_Display } from "next/font/google";

export const serif = Noto_Serif_Display({
	subsets: ["latin"],
	style: ["normal"],
});

export const sans = Noto_Sans_Display({
	subsets: ["latin"],
	style: ["normal"],
});
