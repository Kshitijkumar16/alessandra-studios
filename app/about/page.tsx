import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Instagram from "@/components/sections/Instagram";
import Intro from "@/components/sections/Intro";
import PhCourses from "@/components/sections/PhCourses";
import Work from "@/components/sections/Work";
import React from "react";

const page = () => {
	return (
		<div>
			<Intro />
			<Work />
			<CTA />
			<PhCourses />
			<Instagram />
			<FAQ />
		</div>
	);
};

export default page;
