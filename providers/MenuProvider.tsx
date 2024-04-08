"use client";
import Nav from "@/components/ui/nav";
import { useMenu } from "@/hooks/useMenu";
import { AnimatePresence } from "framer-motion";

const MenuProvider = () => {
	const { isOpen } = useMenu();

	return <AnimatePresence>{isOpen && <Nav />}</AnimatePresence>;
};

export default MenuProvider;
