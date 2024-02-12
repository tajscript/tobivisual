import Nav from "@/components/nav";
import Footer from "@/components/footer";
import '@/styles/globals.css';

export const metadata = {
  title: 'Shop - Tobi Adetimehin',
  description: "I'm a visual artist, and my work serve as a vessel for personal growth, and healing.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Nav />
            {children}
          <Footer />
      </body>
    </html>
  )
}
