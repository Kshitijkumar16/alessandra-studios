import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title:
		"The Chic Brands Co. | Branding & Design agency for Hospitality and Consumer brands",
	description:
		"We help brands create their unique brand identity in this digital world, build trust and increase conversions.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={cn("m-auto max-w-[1760px] bg-dull-white")}></body>
		</html>
	);
}
