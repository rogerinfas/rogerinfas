import "@/styling/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Roger Infa Sanchez — Full-Stack Developer (Backend Focus)",
  description:
    "Portfolio de Roger Infa Sanchez, Full-Stack Developer especializado en arquitectura Backend, APIs escalables, Next.js, Node.js, TypeScript y desarrollo de software de alto rendimiento.",
  keywords: [
    "Roger Infa Sanchez",
    "Roger Infa",
    "Full-Stack Developer",
    "Backend Developer",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Roger Infa Sanchez" }],
  openGraph: {
    title: "Roger Infa Sanchez — Full-Stack Developer (Backend Focus)",
    description:
      "Full-Stack Developer enfocado en arquitectura Backend, APIs escalables y sistemas web de alto rendimiento.",
    url: "https://github.com/rogerinfas",
    siteName: "Roger Infa Sanchez Portfolio",
    locale: "es_ES",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}