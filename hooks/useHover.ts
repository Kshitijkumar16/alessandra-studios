import { create } from "zustand";

interface Hover {
	isHovered: boolean;
	setHoverTrue: () => void;
	setHoverFalse: () => void;
}

export const useHover = create<Hover>((set) => ({
	isHovered: false,
	setHoverTrue: () => set(() => ({ isHovered: true })),
	setHoverFalse: () => set(() => ({ isHovered: false })),
}));
