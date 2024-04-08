"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function LenisSmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.2,
				easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				syncTouch: false,
				touchMultiplier: 1.5,
			}}
		>
			{children}
		</ReactLenis>
	);
}

export default LenisSmoothScroll;
