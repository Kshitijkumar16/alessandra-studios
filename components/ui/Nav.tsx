"use client";
import { motion } from "framer-motion";
import { menuSlide } from "@/lib/anim";
import { navLinks } from "@/constants";

import { cn } from "@/lib/utils";
import { sans, serif } from "@/lib/fonts-provider";

const Nav = () => {
	return (
		<motion.div
			initial='initial'
			animate='enter'
			exit='exit'
			variants={menuSlide}
			id='list-rendering-div'
			className='fixed z-[900] top-0 left-0 w-screen h-screen bg-white'
		>
			{/* Mobile Menu */}
			<div className='flex flex-col justify-start h-full md:hidden margin-x pt-[35%] pb-8'>
				{/* Mobile Nav Links */}
				<div className='flex flex-col gap-[0.6lvh]'>
					{navLinks.map((link) => (
						<div
							key={link.url}
							className={cn(serif.className)}
						>
							<p className='text-white'>{link.title}</p>
						</div>
					))}
				</div>

				{/* Mobile Footer */}
			</div>
		</motion.div>
	);
};

export default Nav;
