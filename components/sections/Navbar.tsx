"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMenu } from "@/hooks/useMenu";
import LenisButton from "../ui/LenisButton";
import Image from "next/image";

const Navbar = () => {
	const { isOpen, onToggle } = useMenu();
	return (
		<nav
			className={cn(
				"margin-x sticky mix-blend-difference top-0 left-0 z-[950]",
				"uw:pt-[36px] xl:pt-[2dvw] lg:pt-[3dvw] md:pt-[4dvw] sm:pt-[5dvw] pt-[8dvw]"
			)}
		>
			<motion.div
				animate={isOpen ? "active" : "inActive"}
				className={cn("flex items-center justify-between -translate-x-3")}
			>
				<LenisButton
					scrollto='#landing'
					label={
						<div className='relative aspect-[2/1] lg:h-[72px] h-[56px] bg-transparent'>
							<Image
								src='/assets/logo.svg'
								alt='The Chic Brands Co. Logo'
								fill
							/>
						</div>
					}
					styles={cn("")}
				/>

				<motion.div
					id='menu-toggle-button'
					onClick={onToggle}
					variants={{
						active: {
							backgroundColor: "rgba(255,255,255,0.7)",
							transition: { duration: 0.4, ease: "linear" },
						},
						inActive: {
							backgroundColor: "#000000",
							transition: { duration: 0, ease: "linear" },
						},
					}}
					className={cn(
						"flex items-center justify-center sm:p-2 rounded-full cursor-pointer aspect-square translate-x-4 ",
						"p-1"
					)}
				>
					<div
						className={cn(
							"bg-transparent h-[2px] sm:w-10 relative",
							"w-8",
							"before:w-full before:h-[1.5px] before:bg-white before:absolute before:transform before:-translate-y-1/2 before:top-1/2 before:origin-center",
							"after:w-full after:h-[1.5px] after:bg-white after:absolute after:transform after:-translate-y-1/2 after:top-1/2 after:origin-center",
							isOpen && "before:rotate-45 after:-rotate-45",
							"after:transition-all after:duration-300 after:ease-linear",
							"before:transition-all before:duration-300 before:ease-linear",
							!isOpen && "after:translate-y-1 before:-translate-y-1",
							"pointer-events-none",
							isOpen &&
								"before:bg-black after:bg-black before:scale-75 after:scale-75"
						)}
					/>
				</motion.div>
			</motion.div>
		</nav>
	);
};

export default Navbar;
