import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
	title: "Nala AI",
	description:
		"NALA Ai es un chatbot que responde a tus consultas en tiempo real a través de WhatsApp",
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--Montserrat",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(
					geist.variable,
					geistMono.variable,
					"py-8 px-6 lg:p-10 text-gray-900 bg-gray-50 min-h-dvh flex flex-col justify-between antialiased font-sans select-none"
				)}
			>
				<ClientLayout>
					<main className="flex flex-col items-center justify-center grow">
						{children}
					</main>
				</ClientLayout>
			</body>
		</html>
	);
}
