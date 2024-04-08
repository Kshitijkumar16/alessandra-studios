import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Instagram from "@/components/sections/Instagram";
import Intro from "@/components/sections/Intro";
import Landing from "@/components/sections/Landing";
import Navbar from "@/components/sections/Navbar";
import PhCourses from "@/components/sections/PhCourses";
import Work from "@/components/sections/Work";

export default function Home() {
	return (
		<main className='relative overflow-clip'>
			<div
				id='landing'
				className='absolute left-0 -top-[200px]'
			/>
			
			<Landing />
			<Intro />
			<Work />
			<CTA />
			<PhCourses />
			<Instagram />
			<FAQ />
		</main>
	);
}
