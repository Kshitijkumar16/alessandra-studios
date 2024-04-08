// Global imports
import type { Metadata } from "next";

// Local imports
import "./globals.css";
import LenisFile from "@/providers/smoothScroll-provider";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
	title: "Alessandra Studios | Photography Services",
	description: "World class photoshoots near you",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='bg-white '>
				<LenisFile>{children}</LenisFile>
			</body>
		</html>
	);
}
