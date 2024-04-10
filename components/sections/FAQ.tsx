"use client";
import { FAQs } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { sans, serif } from "@/lib/fonts-provider";

const FAQSection = () => {
	const [activeQuestion, setActiveQuestion] = useState(-1);

	const handleClick = (index: number) => {
		if (activeQuestion === index) {
			setActiveQuestion(-1);
		} else {
			setActiveQuestion(index);
		}
	};

	return (
		<section className='py-40 mx-14'>
			{/* heading */}
			<p
				className={cn(
					"text-white/90 text-[72px] tracking-[5px]",
					serif.className
				)}
			>
				FAQ's
			</p>

			{/* questions */}
			<div className={cn("flex flex-col mt-16")}>
				{FAQs.map((item, index) => (
					<motion.div
						key={index}
						animate={activeQuestion === index ? "isOpen" : "isClosed"}
						className='border-y-[1px] border-white/10 text-white/90'
					>
						{/* Render question */}
						<div
							onClick={(e: React.MouseEvent<HTMLDivElement>) => {
								handleClick(index);
							}}
							className={cn(
								"flex cursor-pointer items-center group justify-between py-8"
							)}
						>
							<motion.p
								className={cn(
									"text-[20px]",
									"opacity-75 group-hover:sm:opacity-100 transition-opacity duration-300 ease-[0.65, 0, 0.35, 1]",
									activeQuestion === index && "opacity-100"
								)}
							>
								{item.question}
							</motion.p>
							{/* Plus icon div */}
							<motion.div
								variants={{
									isOpen: {
										rotate: 45,
										transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
									},
									isClosed: {
										rotate: 0,
										transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
									},
								}}
								className={cn(
									"aspect-square",
									"opacity-75 group-hover:sm:opacity-100 transition-opacity duration-300 ease-[0.65, 0, 0.35, 1]",
									activeQuestion === index && "opacity-100"
								)}
							>
								<Plus className={cn("w-6 h-6 text-white/90")} />
							</motion.div>
						</div>

						{/* Answer divs ______________________________________________________ */}
						<AnimatePresence>
							{activeQuestion === index && (
								// Wrapper border div
								<motion.div
									initial={{ height: 0 }}
									animate={{
										paddingLeft: 40,
										height: "auto",
										transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
									}}
									exit={{
										paddingLeft: 0,
										height: 0,
										transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
									}}
									onClick={(e: React.MouseEvent<HTMLDivElement>) => {
										handleClick(index);
									}}
									className={cn("cursor-pointer overflow-hidden ")}
								>
									{/* Actual Answer div */}
									<div className={cn("mb-8 max-w-[60%]")}>
										{/* Text div */}
										{item.answer.map((para, i) => (
											<motion.p
												variants={{
													isOpen: {
														opacity: "100%",
														transition: { duration: 0 },
													},
													isClosed: {
														opacity: "0%",
														transition: { duration: 0.2 },
													},
												}}
												key={i}
												className={cn("text-white/70", "text-[20px]")}
											>
												{para}
												<br />
											</motion.p>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default FAQSection;
