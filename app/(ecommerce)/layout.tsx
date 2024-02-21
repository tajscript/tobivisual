import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ReduxProvider from '@/state/ReduxProvider';
import '@/styles/globals.css';

export const metadata = {
  title: 'Account - Tobi Adetimehin',
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
      <ReduxProvider>
        <div className="layout__body">
          {children}
        </div>

        <footer className="layout__footer">
          <Footer />
        </footer>
        </ReduxProvider>
      </body>
    </html>
  )
}
