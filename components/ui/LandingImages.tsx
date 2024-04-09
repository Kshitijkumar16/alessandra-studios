"use client";
import gsap from "gsap";
import { landingImages } from "@/constants";
import { useEffect, useRef } from "react";
import Card from "./Card";

const LandingImages = () => {
	const p1 = useRef<HTMLDivElement>(null);
	const p2 = useRef<HTMLDivElement>(null);

	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		requestAnimationFrame(animation);
	}, []);

	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0;
		}
		gsap.set(p1.current, { xPercent: xPercent });
		gsap.set(p2.current, { xPercent: xPercent });
		xPercent += 0.025 * direction;
		requestAnimationFrame(animation);
	};

	//
	return (
		<div className='flex'>
			<div
				ref={p1}
				className='flex gap-5 pl-5'
			>
				{landingImages.map((photo, index) => (
					<Card
						image={photo}
						key={index}
					/>
				))}
			</div>
			<div
				ref={p2}
				className='flex gap-5 pl-5'
			>
				{landingImages.map((photo, index) => (
					<Card
						image={photo}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default LandingImages;
