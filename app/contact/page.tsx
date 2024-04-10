// Contact Page

import Contact from "@/components/sections/Contact";
import Navbar from "@/components/sections/Navbar";

const page = () => {
	return (
		<div className='relative '>
			{/* Navbar */}
			<div className='fixed top-0 z-10 flex justify-center w-full mix-blend-difference'>
				<Navbar />
			</div>
			<Contact />
		</div>
	);
};

export default page;
