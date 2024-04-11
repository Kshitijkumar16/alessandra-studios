import { sans, serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LandingImages from "../ui/LandingImages";

const Landing = () => {
	return (
		<div className='relative h-screen bg-black'>
			<div className={cn("flex justify-between px-24 pt-16", serif.className)}>
				<p className='text-[52px] text-white block'>AN</p>
				<div className='flex items-center gap-3'>
					<p className='text-[24px] text-white block'>olá</p>
					<div className='h-[6px] bg-white rounded-full aspect-square ' />
					<p className='text-[24px] text-white block'>नमस्ते</p>
				</div>
			</div>

			<div className={cn("flex justify-center pt-16", sans.className)}>
				{/* Greeting */}
				<div className='flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-white/90'>
					<div className='h-3 bg-red-600 rounded-full aspect-square animate-pulse'></div>
					<p className='text-black uppercase text-[16px] block font-[600] tracking-[0.5px]'>
						Welcome to Alessanddra Nirrwaan Photography
					</p>
				</div>
			</div>
			{/* Images */}
			<div className='absolute overflow-hidden -translate-y-1/2 top-1/2'>
				<LandingImages />
			</div>
			{/* Bottom messages */}
			<div
				className={cn(
					"absolute bottom-0 w-full flex items-end justify-between px-24 pb-20",
					sans.className
				)}
			>
				<p className='block text-left text-white/55 tracking-[0.5px] text-[14px]'>
					Looking for a photography course? <br />
					<Link
						href='/about/#courses'
						className='underline decoration-[0.5px] decoration-white/55 underline-offset-[2px]'
					>
						We got you!
					</Link>
				</p>
				<div className='flex flex-col items-center'>
					<p className='block text-center text-white/90 tracking-[0.5px] text-[16px]'>
						Central India's premium photography studio
					</p>
					<Link
						target='_blank'
						href='https://wa.me/+911231231239'
						className='text-white/90 text-[14px] tracking-[0.5px] mt-8 border-[2px] gap-2 border-white/90 px-4 py-2 rounded-full flex justify-center items-center'
					>
						<div className='aspect-square h-[6px] bg-white/90 rounded-full' />
						<p className='block'>Book a free discovery session</p>
					</Link>
				</div>

				<p className='block text-right text-white/55 tracking-[0.5px] text-[14px]'>
					Click on any image above and see
					<br />
					the project in detail.
				</p>
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

export default Landing;
