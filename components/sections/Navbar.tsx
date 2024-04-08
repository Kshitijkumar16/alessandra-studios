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
						<p className='uppercase text-[14px] tracking-[1px] text-white '>
							{link.active ? `(${link.title})` : link.title}
						</p>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
