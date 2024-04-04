import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TC Frontend Challenge',
    description: 'A frontend challenge by TC for Candidate yangxdev@gmail.com',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex justify-center items-center`}>{children}</body>
        </html>
    )
}
