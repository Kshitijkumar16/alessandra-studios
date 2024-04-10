"use client";

import { serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Message = () => {
	return (
		<div className='relative flex flex-col justify-between min-h-screen py-28 mx-14'>
			<div
				className={cn(
					"flex justify-between text-[72px] text-white/90",
					serif.className
				)}
			>
				<p className='flex flex-col justify-start text-center aspect-square'>
					The vision
				</p>
				<p className='flex flex-col justify-center text-center aspect-square'>
					behind
				</p>
				<p className='flex flex-col justify-end text-center aspect-square'>
					the lens
				</p>
			</div>
			<div className='flex justify-end gap-[10dvw] mt-40 '>
				<div className='relative aspect-[1/1.4] h-[360px]'>
					<Image
						src='/assets/img1.png'
						alt='image'
						fill
						className='object-cover object-center'
					/>
				</div>
				<div className='flex flex-col justify-between '>
					<div className='flex justify-start pr-10'>
						<p className='max-w-[520px] text-white/90 text-[16px] tracking-[0.5px]'>
							My journey started as a theatre actress at the age of 18 in
							Brazil, my country of birth. I discovered my passion for
							photography around 20 years ago in 2002. Since then, I am honing
							the art of freezing moments of time in my photographs.
						</p>
					</div>
					<div className='flex justify-start '>
						<p className='text-white/90 max-w-[520px] text-[16px] tracking-[0.5px]'>
							As a travel enthusiast I visited India 3 times before 2014, making
							Documentary Photographs that depict the everyday life of common
							people. Around the same time I married an Indian and now currently
							work as a professional photographer in Nagpur.
						</p>
					</div>
					<div>
						<p className='text-white/90 max-w-[520px] text-[16px] tracking-[0.5px]'>
							I am also a visiting faculty of photography in an International
							College in Nagpur and create content on YouTube,{" "}
							<Link
								href=''
								target='_blank'
							>
								check it out!
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
