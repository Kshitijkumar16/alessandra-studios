"use client";
import Nav from "@/components/ui/Nav";
import { useMenu } from "@/hooks/useMenu";
import { AnimatePresence } from "framer-motion";

const MenuProvider = () => {
	const { isOpen } = useMenu();

	return <AnimatePresence>{isOpen && <Nav />}</AnimatePresence>;
};

export default MenuProvider;
