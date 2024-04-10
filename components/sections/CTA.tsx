import { serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CTA = () => {
	const after = `after:absolute after:content-[" "] after:-left-0 after:-bottom-[0.5px] after:block after:w-[100%] after:h-[0.5px] after:bg-white/90 after:duration-1000 after:transition-all after:cubic-bezier(0.19, 1, 0.22, 1) after:origin-right after:delay-300 hover:after:scale-x-0 hover:after:delay-0`;

	const before = `before:absolute before:content-[" "] before:-left-0 before:-bottom-[0.5px] before:block before:w-[100%] before:h-[0.5px] before:bg-white/90 before:duration-1000 before:transition-all before:cubic-bezier(0.19, 1, 0.22, 1) before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:delay-300`;

	return (
		<div className='relative mb-20 -top-60'>
			<div
				className={cn(
					"flex flex-col items-center gap-8 text-white/90",
					serif.className
				)}
			>
				<p className='text-[72px]'>Need a photoshoot?</p>
				<Link href='https://wa.me/+911231231234' >
					<p className={cn("text-[72px] relative", after, before)}>
						Book a free discovery session!
					</p>
				</Link>
			</div>
		</div>
	);
};

export default CTA;
