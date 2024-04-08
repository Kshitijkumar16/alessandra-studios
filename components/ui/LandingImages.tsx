"use client";
import { landingImages } from "@/constants";
import Image from "next/image";
import React from "react";


const LandingImages = () => {
	return (
		<div className='flex gap-5'>
			{landingImages.map((image, index) => (
				<div
					key={index}
					className='cursor-pointer aspect-[1/1.4] relative h-[240px]'
				>
					<Image
						src={image.imageUrl}
						alt={image.alt}
						fill
						priority
						className='object-cover object-center'
					/>
				</div>
			))}
		</div>
	);
};

export default LandingImages;
