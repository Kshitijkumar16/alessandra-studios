import { serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CTA = () => {
	return (
		<div className='relative mb-20 -top-60'>
			<div
				className={cn(
					"flex flex-col items-center gap-8 text-white/90",
					serif.className
				)}
			>
				<p className='text-[72px]'>Need a photoshoot?</p>
				<Link href='https://wa.me/+911231231234'>
					<p className='text-[72px] underline decoration-[1px] decoration-white/90 underline-offset-[10px]'>
						Book a free discovery session!
					</p>
				</Link>
			</div>
		</div>
	);
};

export default CTA;
