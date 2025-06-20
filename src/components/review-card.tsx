import { IReview } from "@/config/reviews";
import { Staatliches } from "next/font/google";
import Image from "next/image";

const staatliches = Staatliches({
	weight: ["400"],
	subsets: ["latin"],
});

export function ReviewCard(props: IReview) {
	return (
		<div className="border-border bg-background flex h-128 flex-col rounded-xl border p-6 select-none">
			<Image
				className="mb-4 h-24 w-64"
				src={props.brandUrl}
				alt=""
				width={170}
				height={100}
				priority
			/>

			<div className="flex h-full flex-col justify-between">
				<p className="text-muted-foreground text-left text-xl">{props.text}</p>

				<div className="relative flex gap-x-3">
					<span
						className={`text-muted-foreground absolute -top-8 right-0 place-self-end text-right text-8xl ${staatliches.className}`}
					>
						&rdquo;
					</span>

					<Image
						className="size-15"
						src={props.avatarUrl}
						alt=""
						width={60}
						height={60}
					/>
					<div className="flex flex-col">
						<span className="text-2xl font-bold">{props.authorName}</span>
						<span className="text-xl font-semibold">{props.position}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
