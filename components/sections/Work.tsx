"use client";
import { sans, serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PictureProps {
	imgUrl: string;
	alt: string;
	shootType: string;
	navTo: string;
}

const Picture = ({ imgUrl, alt, shootType, navTo }: PictureProps) => {
	return (
		<Link href={navTo}>
			<div className='flex flex-col items-center px-4 pt-4 pb-2 transition-all duration-300 ease-out rounded-sm group grayscale hover:grayscale-0 bg-white/95 hover:-translate-y-4'>
				{/* Picture 1 */}
				<div className='relative aspect-[1/1.4] h-[400px] '>
					<Image
						src={imgUrl}
						alt={alt}
						fill
						className='object-cover object-center rounded-sm'
					/>
				</div>
				<div
					className={cn(
						"mt-2 w-full relative overflow-hidden h-5",
						sans.className
					)}
				>
					<p
						className={cn(
							"absolute left-1/2 whitespace-nowrap -translate-x-1/2 top-0 group-hover:-top-6 text-[18px] h-4 flex justify-center items-center text-black font-[600] tracking-[0.25px]",
							"transition-all duration-300 ease-out"
						)}
					>
						{shootType}
					</p>
					<p
						className={cn(
							"text-[18px] absolute left-1/2 -translate-x-1/2 text-black font-[600] h-4 flex justify-center items-center tracking-[0.25px] group-hover:top-0 top-6",
							"transition-all duration-300 ease-out"
						)}
					>
						Check it out!
					</p>
				</div>
			</div>
		</Link>
	);
};

const Work = () => {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const sm = useTransform(scrollYProgress, [0, 1], [0, -700]);
	const md = useTransform(scrollYProgress, [0, 1], [0, -900]);
	const lg = useTransform(scrollYProgress, [0, 1], [0, -1250]);
	const xl = useTransform(scrollYProgress, [0, 1], [0, -1500]);

	return (
		<div className='relative pt-60'>
			<div className={cn("flex justify-center", serif.className)}>
				<p className='text-[72px] text-white/90'>Multiple Disciplines</p>
			</div>
			{/*  */}
			<div className='mt-60'>
				<div className='flex justify-around'>
					<motion.div
						style={{ y: lg }}
						className='relative top-[500px]'
					>
						<Picture
							navTo='/1'
							imgUrl='/assets/img3.png'
							alt='image'
							shootType='Professional Photoshoot'
						/>
					</motion.div>
					<motion.div
						style={{ y: md }}
						className='relative top-[550px]'
					>
						<Picture
							navTo='/2'
							imgUrl='/assets/img11.png'
							alt='image'
							shootType='Standard Photoshoot'
						/>
					</motion.div>
					<motion.div
						style={{ y: sm }}
						className='relative top-[500px]'
					>
						<Picture
							navTo='/3'
							imgUrl='/assets/img9.png'
							alt='image'
							shootType='Corporate Photoshoot'
						/>
					</motion.div>
				</div>
			</div>
			<div className='flex justify-around mt-40'>
				<motion.div
					style={{ y: xl }}
					className='relative top-[600px]'
				>
					<Picture
						navTo='/4'
						imgUrl='/assets/img5.png'
						alt='image'
						shootType='Couple Photoshoot'
					/>
				</motion.div>
				<motion.div
					style={{ y: lg }}
					className='relative top-[800px]'
				>
					<Picture
						navTo='/5'
						imgUrl='/assets/img10.png'
						alt='image'
						shootType='Maternity Photoshoot'
					/>
				</motion.div>
			</div>
			<div className='flex justify-center mt-40'>
				<motion.div
					style={{ y: xl }}
					className='relative top-[400px]'
				>
					<Picture
						navTo='/6'
						imgUrl='/assets/img11.png'
						alt='image'
						shootType='Children Photoshoot'
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Work;
