import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})


const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['600', '700', '800', '900'],
	variable: '--font-display',
})

export const metadata: Metadata = {
	title: 'Jadoo — Travel Agency',
	description: 'Travel, enjoy and live a new and full life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html
			lang='en'
			className={`${inter.variable} ${playfair.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}
