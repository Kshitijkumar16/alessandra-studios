import Landing from "@/components/sections/Landing";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
	return (
		<main className='relative '>
			<div className='absolute flex justify-center w-full'>
				<Navbar />
			</div>
			<Landing />
		</main>
	);
}
