import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ben Hawes | Team Activation Keynote Speaker",
  description:
    "Ben Hawes helps organizations activate their people so strategy turns into momentum. Keynote speaker for offsites, leadership events, and team sessions.",
  openGraph: {
    title: "Ben Hawes | Team Activation Keynote Speaker",
    description:
      "Strategy doesn't go the distance. People do. Ben Hawes activates teams around mission, clarity, and commitment.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#F94501",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
