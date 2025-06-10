import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Test Task",
	description: "by itsnoctural",
	creator: "itsnoctural",
	robots: {
		index: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.className} antialiased`}>
				<div className="fixed inset-0 -z-50 size-full bg-[url(/background.webp)] opacity-30" />
				{children}
			</body>
		</html>
	);
}
