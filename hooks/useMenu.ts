import { create } from "zustand";

interface Menu {
	isOpen: boolean;
	onToggle: () => void;
}

export const useMenu = create<Menu>((set) => ({
	isOpen: false,
	onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
