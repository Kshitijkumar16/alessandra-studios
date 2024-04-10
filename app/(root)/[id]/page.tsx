//Local imports
import Navbar from "@/components/sections/Navbar";
import { landingImages } from "@/constants";
import { cn } from "@/lib/utils";
import { sans } from "@/lib/fonts-provider";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";

interface BottomNumberProps {
	value: number;
}

const BottomNumber = ({ value }: BottomNumberProps) => {
	return (
		<div className={cn("absolute -bottom-6 left-0", sans.className)}>
			<p className='text-[14px] text-white/95'>{`[0${value}]`}</p>
		</div>
	);
};

interface ProjectPageProps {
	params: { id: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
	const project = landingImages.find((project) => project.id === params.id);

	const imageIndex = String(project?.id);

	const similar = landingImages.filter(
		(same) => same.shootType === project?.shootType
	);

	return (
		<div className='relative bg-black text-white/95'>
			{/*  */}
			<div className='fixed z-10 top-0 flex w-full justify-center'>
				<Navbar />
			</div>
			<div className='fixed bottom-8 z-10 flex w-full pointer-events-none justify-center'>
				<div
					className={cn(
						"bg-white/30 rounded-full aspect-[2/1] h-12 flex justify-center items-center",
						sans.className
					)}
				>
					<Link
						href='/'
						className='font-[500] pointer-events-auto tracking-[0.5px] flex justify-center items-center uppercase'
					>
						close
					</Link>
				</div>
			</div>
			{/*  */}
			<div className='flex justify-between'>
				{/*  */}
				<div className='w-[78%] pt-32 pb-10 pl-20 flex justify-between'>
					<div className='w-[60%] flex flex-col'>
						<div className='relative aspect-[1/1.2] w-[100%]'>
							<Image
								src={`/assets/img${imageIndex}-1.png`}
								alt='photography image'
								fill
								className='object-center object-cover'
							/>
							<BottomNumber value={1} />
						</div>
						<div className='w-[100%] flex justify-end mt-[480px]'>
							<div className='relative aspect-[1.4/1] w-[80%]'>
								<Image
									src={`/assets/img${imageIndex}-4.png`}
									alt='photography image'
									fill
									className='object-center object-cover'
								/>
								<BottomNumber value={4} />
							</div>
						</div>
						<div className='w-[100%] relative aspect-[1/1.4] mt-80'>
							<Image
								src={`/assets/img${imageIndex}-7.png`}
								alt='photography image'
								fill
								className='object-center object-cover'
							/>
							<BottomNumber value={7} />
						</div>
					</div>
					{/* sub right */}
					<div className='w-[38%] flex-col flex'>
						<div className='w-[100%] flex justify-end'>
							<div className='relative aspect-[1/1.4] w-[75%] '>
								<Image
									src={`/assets/img${imageIndex}-2.png`}
									alt='photography image'
									fill
									className='object-center object-cover'
								/>
								<BottomNumber value={2} />
							</div>
						</div>
						<div className='w-[100%] flex mt-[300px]'>
							<div className='relative aspect-[1/1.4] w-[80%]'>
								<Image
									src={`/assets/img${imageIndex}-3.png`}
									alt='photography image'
									fill
									className='object-center object-cover'
								/>
								<BottomNumber value={3} />
							</div>
						</div>
						<div className='w-[100%] flex mt-96'>
							<div className='relative aspect-[1/1.5] w-[45%]'>
								<Image
									src={`/assets/img${imageIndex}-5.png`}
									alt='photography image'
									fill
									className='object-center object-cover'
								/>
								<BottomNumber value={5} />
							</div>
						</div>
						<div className='w-[100%] flex justify-end mt-24'>
							<div className='relative aspect-[1/1.5] w-[70%]'>
								<Image
									src={`/assets/img${imageIndex}-6.png`}
									alt='photography image'
									fill
									className='object-center object-cover'
								/>
								<BottomNumber value={6} />
							</div>
						</div>
					</div>
				</div>
				{/*  */}
				<div
					className={cn(
						"w-[16%] flex flex-col justify-between pt-28 h-screen sticky top-0 pr-6",
						sans.className
					)}
				>
					<div className=''>
						<p
							className={cn("text-[32px] tracking-[0.5px]", sans.className)}
						>{`${project?.projectName}`}</p>
						<p className='text-[14px] leading-[24px] mt-10 tracking-[0.5px]'>
							Info Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Eius corporis eveniet error! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Minus, quas magni sed veritatis
							illum dignissimos esse aliquam
						</p>
						<p className='mt-10 uppercase font-[500] tracking-[0.5px]'>
							Info :
						</p>
						<p className='mt-2 text-[14px] capitalize'>{`Type: ${project?.shootType}`}</p>
						<p className=' text-[14px] capitalize tracking-[0.5px]'>{`location: ${project?.location}`}</p>
						<p className='text-[14px] capitalize tracking-[0.5px]'>{`Camera: ${project?.camera}`}</p>
						<p className='text-[14px] capitalize tracking-[0.5px]'>{`year: ${project?.year}`}</p>
					</div>

					<div
						className={cn(
							"flex justify-start items-start relative z-20 pb-10",
							sans.className
						)}
					>
						<Link
							target='_blank'
							href='https://wa.me/+911231231239'
							className='flex border-[2px] border-white/80  rounded-full justify-center items-center px-4 z-20 py-3 gap-2'
						>
							<div className='cursor-pointer aspect-square rounded-full bg-red-500 h-3 animate-pulse' />
							<p className='text-[14px] tracking-[0.5px] text-white/95 cursor-pointer'>
								Book a free session
							</p>
						</Link>
					</div>
				</div>
			</div>

			<div className=''></div>

			{/* Similar photos */}
			<div className={cn("h-screen relative", sans.className)}>
				<div className='flex justify-center pt-[20dvh]'>
					<p className='text-[16px] tracking-[0.5px] text-white/95'>
						(Similar work)
					</p>
				</div>

				{/* <div
					className={cn(
						"absolute inset-0 h-full w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between items-center px-20 text-white/50",
						sans.className
					)}
				>
					<p className='block text-[12px] -rotate-90'>Alessanddra</p>
					<p className='block text-[12px]'>Photography</p>
				</div> */}

				<div className='absolute inset-0 h-full w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center'>
					<div className='flex justify-center items-center gap-6'>
						{similar.map((project, index) => (
							<div
								key={index}
								className='relative aspect-[1/1.4] h-[280px]'
							>
								<Card image={project} />
							</div>
						))}
					</div>
				</div>

				{/* Outer brackets */}
				<div className='absolute inset-0 top-0 left-0 py-10 pointer-events-none px-14 '>
					<div className='flex flex-col justify-between h-full'>
						<div className='flex justify-between'>
							<div className='aspect-square border-l-[1px] border-t-[1px] border-white h-14'></div>
							<div className='aspect-square border-r-[1px] border-t-[1px] border-white h-14'></div>
						</div>
						<div className='flex justify-between'>
							<div className='aspect-square border-l-[1px] border-b-[1px] border-white h-14'></div>
							<div className='aspect-square border-r-[1px] border-b-[1px] border-white h-14'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
