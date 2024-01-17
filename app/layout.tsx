import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { createClient } from '@/prismicio';

import Favicon from "@/public/assets/favicon.ico"

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-grotesk',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
 
  return {
    title: settings.data.meta_title || "Tobi Adetimehin",
    description: settings.data.meta_description || "I'm a visual artist, and my work serve as a vessel for personal growth, and healing.",
    icons: [{ rel: "icon", url: Favicon.src }],
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable}`}>{children}</body>
    </html>
  )
}