import Reviews from "@/components/carousel";

export default function Home() {
	return (
		<main className="mx-auto flex max-w-screen-xl flex-col items-stretch gap-y-12 md:items-center">
			<h1 className="text-center text-4xl font-bold md:text-5xl">
				Voices of success with Sales Fortuna
			</h1>

			<Reviews />
		</main>
	);
}
