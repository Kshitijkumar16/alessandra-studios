import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Instagram from "@/components/sections/Instagram";
import Intro from "@/components/sections/Intro";
import PhCourses from "@/components/sections/PhCourses";
import React from "react";

const page = () => {
	return (
		<div>
			<Intro />
			<CTA />
			<PhCourses />
			<Instagram />
			<FAQ />
		</div>
	);
};

export default page;
