"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { sans } from "@/lib/fonts-provider";
import Link from "next/link";

interface CardProps {
	image: {
		id: string;
		imageUrl: string;
		alt: string;
		year: string;
		location: string;
		shootType: string;
	};
}

const Card = ({ image }: CardProps) => {
	const [showOverlay, setShowOverlay] = useState(false);

	const MotionLink = motion(Link);

	return (
		<motion.div
			onMouseEnter={() => {
				setShowOverlay(true);
			}}
			onMouseLeave={() => {
				setShowOverlay(false);
			}}
			className='relative aspect-[1/1.4] min-h-[264px]'
		>
			<AnimatePresence>
				{showOverlay && (
					<MotionLink
						href={`/${image.id}`}
						initial={{ opacity: "0%" }}
						animate={{
							opacity: "100%",
							transition: { duration: 0.3, ease: "easeOut" },
						}}
						exit={{
							opacity: "0%",
							transition: { duration: 0.3, ease: "easeOut" },
						}}
						className='absolute inset-0 z-10 flex justify-center items-center'
					>
						<div
							className={cn(
								"absolute h-full w-full bg-black/50 flex flex-col justify-end items-center z-10 py-4 px-4",
								sans.className
							)}
						>
							<motion.div
								initial={{ y: 10 }}
								animate={{ y: 0 }}
								exit={{ y: 10 }}
								className='flex flex-col justify-center items-center'
							>
								<p className='text-white z-10 text-[14px] font-semibold text-center'>
									{image.shootType}
								</p>
								<p className='text-white z-10 text-[14px] font-semibold'>{`${image.year} ${image.location}`}</p>
							</motion.div>
							{/*  */}
							<motion.div
								initial={{ y: 10 }}
								animate={{ y: 0 }}
								exit={{ y: 10 }}
								className='flex rounded-full z-10 px-3 py-1 justify-center items-center bg-white/90 gap-2 mt-4'
							>
								<div className='aspect-square h-2 rounded-full bg-black/80 z-10' />
								<p className='text-[14px] text-black block font-semibold'>
									<span>See project</span>
								</p>
							</motion.div>
						</div>
					</MotionLink>
				)}
			</AnimatePresence>
			<Image
				src={image.imageUrl}
				alt={image.alt}
				fill
				priority
				className='object-cover object-center'
			/>
		</motion.div>
	);
};

export default Card;
