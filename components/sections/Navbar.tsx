"use client";
import { cn } from "@/lib/utils";
import { useMenu } from "@/hooks/useMenu";
import { navLinks } from "@/constants";
import { sans } from "@/lib/fonts-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const { isOpen, onToggle } = useMenu();

	const pathname = usePathname();

	const routes = navLinks.map((link) => ({
		url: `${link.url}`,
		title: link.title,
		active: pathname === `${link.url}`,
	}));

	const before = `before:absolute before:content-[" "] before:-left-0 before:-bottom-[0.5px] before:block before:w-[100%] before:h-[0.5px] before:bg-white/90 before:duration-1000 before:transition-all before:cubic-bezier(0.19, 1, 0.22, 1) before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:delay-300`;

	return (
		<nav
			className={cn(
				"margin-x sticky top-0 left-0 z-[999]",
				"uw:pt-[36px] xl:pt-[36px] lg:pt-[32px] md:pt-[28px] sm:pt-[28px] pt-[24px] mix-blend-difference"
			)}
		>
			<div className='flex justify-center gap-4'>
				{routes.map((link, index) => (
					<Link
						key={index}
						href={link.url}
						className={cn("relative", sans.className)}
					>
						<p
							className={cn(
								"uppercase text-[14px] tracking-[1px] text-white relative",
								before
							)}
						>
							{link.active ? `(${link.title})` : link.title}
						</p>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
