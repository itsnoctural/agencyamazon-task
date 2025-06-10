export interface IReview {
	brandUrl: string;
	text: string;
	avatarUrl: string;
	authorName: string;
	position: string;
}

export const reviews: IReview[] = [
	{
		brandUrl: "/serene.png",
		text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
		avatarUrl: "/ethan.jpg",
		authorName: "Ethan Morgan",
		position: "Founder and CEO, Serene Living Products",
	},
	{
		brandUrl: "/starlight.webp",
		text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
		avatarUrl: "/olivia.jpg",
		authorName: "Olivia Hayes",
		position: "Owner, Starlight Creations",
	},
	{
		brandUrl: "/opulent.webp",
		text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
		avatarUrl: "/alexander.jpg",
		authorName: "Alexander Reed",
		position: "Co-Founder, Opulent Living Group",
	},
	{
		brandUrl: "/acme.png",
		text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
		avatarUrl: "/alexander.jpg",
		authorName: "itsnoctural",
		position: "Founder and CEO, Serene Living Products",
	},
];
