import { sans, serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CardProps {
	active: boolean;
	title: string;
	subtitle: string;
	points: string[];
}

const Card = ({ active, title, subtitle, points }: CardProps) => {
	return (
		<div
			className={cn(
				"w-full px-10 py-14 rounded-xl",
				active ? "bg-white/90" : "border-white/50 border-[2px]"
			)}
		>
			<p
				className={cn(
					" text-[24px] tracking-[0.5px] font-[500]",
					active ? "text-black" : "text-white/90"
				)}
			>
				{title}
			</p>
			<p
				className={cn(
					" tracking-[0.25px] w-[85%] mt-3 text-[14px]",
					active ? "text-black/60 font-[550]" : "text-white/60 font-[500]"
				)}
			>
				{subtitle}
			</p>

			<Link
				href='https://wa.me/+911231231234'
				target='_blank'
				className={cn(
					"mt-16 rounded-full flex justify-center items-center",
					active
						? "hover:bg-black hover:text-white/90 border-black border-[2px] transition-all duration-300 ease-out"
						: "border-[2px] transition-all duration-300 ease-out hover:bg-white hover:text-black text-white/90 border-white/50"
				)}
			>
				<p className='tracking-[0.5px] py-3'>Get in touch</p>
			</Link>

			<div
				className={cn("h-[1px] my-10", active ? "bg-black/20" : "bg-white/20")}
			/>

			<p
				className={cn(
					"text-[18px] font-[500]",
					active ? "text-black" : "text-white/90"
				)}
			>
				What you learn -
			</p>

			<ul
				className={cn(
					"list-disc list-inside flex flex-col gap-2 mt-8",
					active ? "text-black/75 font-[550]" : "text-white/75 font-[500]"
				)}
			>
				{points.map((point) => (
					<li>{point}</li>
				))}
			</ul>
		</div>
	);
};

const PhCourses = () => {
	return (
		<div className='mx-14 py-60'>
			<div
				className={cn(
					"flex flex-col justify-center items-center",
					serif.className
				)}
			>
				<p className='text-[72px] block text-white/90 text-center leading-[84px]'>
					Nurturing your <br />
					creative ambitions?
				</p>
				<p
					className={cn(
						"block text-[16px] text-white/90 text-center mt-10 leading-[26px] tracking-[0.5px]",
						sans.className
					)}
				>
					We provide comprehensive courses on photography and related subjects
					to hone your skills and unlock your artistic vision.
				</p>
			</div>

			<div className='flex justify-center mt-28'>
				<div className={cn("flex w-[80%] gap-6", sans.className)}>
					<Card
						title='Beginner Photography Course'
						subtitle='Learn all the basics rights from the beginning and kick start your photography career'
						active={false}
						points={[
							"Photography: definition, concept and history",
							"Cameras and its types",
							"Getting started with digital camera ",
							"Which camera and lenses you must use",
							"White Balance and colour temperature",
							"Flash - concept and practical exposure",
							"Lighting - principles and equipments",
						]}
					/>
					<Card
						title='Advanced Photography Course'
						subtitle='For the poeple who know about photography and want to now have a mastery over their skill'
						active={true}
						points={[
							"Natural Light Portrait",
							"Studio Light Portrait",
							"Pre-Wedding Photography",
							"Tips on Make-up Hair & Clothing",
							"Shoot with Professional Model & Make-up Artist",
							"Postures & Poses",
							"Skin retouching in Photoshop",
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default PhCourses;
