import { InstaFeed } from "@/constants";
import { serif } from "@/lib/fonts-provider";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
	imgIndex: number;
	postUrl: string;
	alt: string;
}

const Post = ({ imgIndex, postUrl, alt }: PostProps) => {
	const img = String(imgIndex);

	return (
		<Link
			href={postUrl}
			target='_blank'
			className='aspect-square h-[360px] relative rounded-md overflow-hidden group'
		>
			<Image
				src={`/assets/img${img}-2.png`}
				alt={alt}
				fill
				className='object-cover object-center'
			/>

			<div className='absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-out opacity-0 pointer-events-none bg-black/50 group-hover:opacity-100'>
				<InstagramIcon size={40} className='text-white/90' />
			</div>
		</Link>
	);
};

const Instagram = () => {
	return (
		<div className='py-60 mx-14'>
			<div className={cn("text-[72px]", serif.className)}>
				<p className='text-white/90'>Check us out on Instagram</p>
			</div>

			<div className='flex gap-10 mt-24'>
				{InstaFeed.map((post) => (
					<Post
						imgIndex={post.imgIndex}
						alt={post.alt}
						postUrl={post.postUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default Instagram;
