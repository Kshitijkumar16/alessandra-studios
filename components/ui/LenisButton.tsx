"use client";
import { useLenis } from "@studio-freight/react-lenis";

interface LenisButtonProps {
	styles: string;
	scrollto: string;
	label: string | React.ReactNode;
	dura?: number | 1;
}

const LenisButton = ({ styles, scrollto, label, dura }: LenisButtonProps) => {
	const lenis = useLenis(({ scroll }) => {});

	return (
		<button
			className={styles}
			onClick={() => {
				if (lenis)
					lenis.scrollTo(`${scrollto}`, {
						duration: dura,
					});
			}}
		>
			<div>{label}</div>
		</button>
	);
};

export default LenisButton;
