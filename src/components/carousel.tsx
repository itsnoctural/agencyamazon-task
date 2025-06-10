"use client";

import * as React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { reviews } from "@/config/reviews";
import { ReviewCard } from "./review-card";

export default function Reviews() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setScrollSnaps(api.scrollSnapList());
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<>
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				setApi={setApi}
				className="max-w-screen-lg"
			>
				<CarouselContent>
					{reviews.map((review, index) => {
						return (
							<CarouselItem
								className="basis-1/1 md:basis-1/2 lg:basis-1/3"
								key={index}
							>
								<ReviewCard {...review} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious className="hidden xl:inline-flex" />
				<CarouselNext className="hidden xl:inline-flex" />
			</Carousel>
			<div className="mt-6 flex items-center justify-center gap-x-2 text-sm">
				{scrollSnaps.map((_, index) => (
					<button
						key={index}
						className={`size-3 cursor-pointer rounded-full ${
							current === index ? "bg-gray-500" : "bg-muted"
						}`}
						onClick={() => api?.scrollTo(index)}
					/>
				))}
			</div>
		</>
	);
}
