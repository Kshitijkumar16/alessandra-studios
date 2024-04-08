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
				<LenisFile>
					<Navbar />
					<div className='relative uw:-top-[57px] xl:-top-[57px] lg:-top-[53px] md:-top-[49px] sm:-top-[49px] -top-[45px]'>
						{children}
					</div>
				</LenisFile>
			</body>
		</html>
	);
}
