import { contactLinks } from "@/constants";
import { sans, serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
	const before = `before:absolute before:content-[" "] before:-left-0 before:-bottom-[0.5px] before:block before:w-[100%] before:h-[0.5px] before:bg-white/90 before:duration-1000 before:transition-all before:cubic-bezier(0.19, 1, 0.22, 1) before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:delay-300`;

	return (
		<div className='relative flex flex-col justify-between h-screen pt-16 bg-black pb-14'>
			<div className={cn("flex justify-between mx-14", serif.className)}>
				<p className='tracking-[1px] text-right text-[72px] leading-[72px] block text-white/90'>
					Alessanddra
					<br />
					<span className='relative top-1'>&copy;</span> Nirrwaan
				</p>
				<div className={cn("", sans.className)}>
					<p
						className={cn(
							"text-[15px] block text-white/90 tracking-[0.5px] max-w-[320px] text-right"
						)}
					>
						lets do everything to capture your story in timeless photographs you
						will cherish forever. look forward to your call
					</p>
					<Link
						href='https://www.thechicbrandsco.in'
						target='_blank'
						className='flex justify-end gap-1 mt-40'
					>
						<p className={cn("block text-[16px] relative font-bold uppercase text-white/90", before)}>
							by the chic brands co
						</p>
						<ArrowUpRight className='text-white/90' />
					</Link>
					<p className='flex justify-end text-white/90 mt-4 text-[14px] tracking-[0.5px]'>
						all rights reserved
					</p>
				</div>
			</div>

			<div className='flex justify-between mx-14'>
				<div className={cn("opacity-50", sans.className)}>
					<p className='text-white/90 tracking-[0.5px]'>Design inspired by -</p>
					<Link
						href='https://www.emotion-agency.com/en/'
						target='_blank'
						className='flex gap-1 mt-2'
					>
						<p className={cn("block text-[16px] relative font-bold uppercase text-white/90", before)}>
							emotion
						</p>
						<ArrowUpRight className='text-white/90' />
					</Link>
				</div>

				{/* Contact links */}
				<div className='flex gap-[16dvw] w-[60%]'>
					{contactLinks.map((title, index) => (
						<div
							key={index}
							className='flex flex-col justify-between w-full'
						>
							<div className={cn("", serif.className)}>
								<p className='text-white/90 font-semibold text-[24px]'>
									{title.title}
								</p>
							</div>
							<div className={cn("mt-10 flex flex-col gap-1", sans.className)}>
								{title.links.map((link, index) => (
									<Link
										key={index}
										href={link.href}
										target='_blank'
										className={cn(
											"flex relative text-white/90 text-[16px] tracking-[1px]",
											before
										)}
									>
										{link.text}
									</Link>
								))}
							</div>
						</div>
					))}
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

export default Contact;
