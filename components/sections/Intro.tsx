"use client";
import { sans, serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const sl = useTransform(scrollYProgress, [0, 1], [0, 500]);

	return (
		<div className='relative h-screen'>
			{/* corner texts */}
			<div className='flex flex-col justify-between h-full px-16 py-12'>
				{/* top div */}
				<div className={cn("flex justify-between", serif.className)}>
					<p className='text-[24px] tracking-[1px] font-[500] uppercase text-white/90 block z-10'>
						Alessanddra
					</p>
					<p className='text-[24px] tracking-[1px] text-white/90 font-[500] uppercase block z-10'>
						Nirwaan
					</p>
				</div>
				{/* bottom div */}
				<div className={cn("items-end flex justify-between ")}>
					<div className={cn("z-10 flex gap-3 items-center", sans.className)}>
						<div className='z-10 h-3 bg-red-500 rounded-full animate-pulse aspect-square' />
						<p className='uppercase z-10 text-[16px] text-white/50 font-bold tracking-[0.5px]'>
							rec
						</p>
					</div>
					<p
						className={cn(
							"font-[600] text-[24px] uppercase tracking-[1px] text-white/90 block z-10",
							serif.className
						)}
					>
						Photography
					</p>
				</div>
			</div>

			{/* Center text */}
			<div className='absolute inset-0 flex items-center justify-center w-full h-full'>
				<div
					className={cn(
						"tracking-[0.5px] text-white/90 aspect-[2.5/1] z-10 flex flex-col items-center w-[50dvw] ",
						sans.className
					)}
				>
					<p className='font-semibold block uppercase text-[22px]'>
						professional since (2006)
					</p>
					<div className='flex flex-col w-full'>
						<p className='flex justify-start text-[16px] font-[500] mt-10 uppercase'>
							I'm
							<br /> [Alessanddra Nirwaan]
						</p>
						<p className='flex justify-end text-[16px] font-[500] uppercase'>
							Born with a passion for arts
							<br />
							started photography in 2002
							<br />
						</p>
						<p className='flex justify-start text-[16px] font-[500] uppercase'>
							Now with 20+ years of experience
							<br />
							I help people capture timeless <br />
							digital memories [photopgraphs]
							<br />
						</p>
						<p className='flex justify-end text-right text-[16px] font-[500] uppercase'>
							With degrees in photography
							<br />
							Portuguese & English literature
							<br />
							curr. a professional photographer
							<br />& visiting faculty of photography
							<br />
						</p>
						<p className='flex justify-start text-[16px] font-[500] uppercase'>
							Avid traveller
							<br />
							[Content creator]
							<br />
						</p>
					</div>
				</div>
			</div>

			{/* background image */}
			<div className='absolute inset-0 z-0 flex items-center justify-center w-full h-full overflow-hidden pointer-events-none'>
				<motion.div
					style={{ y: sl }}
					className='h-[110%] w-[110%] -top-24 flex justify-center items-center relative aspect-[16/9]'
				>
					<Image
						src='/assets/about.png'
						alt='girl in cherry blossom'
						fill
						priority
						className='object-cover object-center brightness-[0.30] contrast-[1.1] '
					/>
				</motion.div>
			</div>

			{/* Inner brackets */}
			<div className='absolute inset-0 top-0 left-0 pointer-events-none px-96 py-52 '>
				<div className='flex flex-col justify-between h-full'>
					<div className='flex justify-between'>
						<div className='aspect-square border-l-[1px] border-t-[1px] border-white h-8'></div>
						<div className='aspect-square border-r-[1px] border-t-[1px] border-white h-8'></div>
					</div>
					<div className='flex justify-between'>
						<div className='aspect-square border-l-[1px] border-b-[1px] border-white h-8'></div>
						<div className='aspect-square border-r-[1px] border-b-[1px] border-white h-8'></div>
					</div>
				</div>
			</div>
			{/* Center focus */}
			<div className='absolute inset-0 h-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-square'>
				<hr />
				<hr />
				<hr className='rotate-90' />
				<hr className='translate-x-[0.5px] -translate-y-[1px] rotate-90' />
			</div>
		</div>
	);
};

export default Intro;
