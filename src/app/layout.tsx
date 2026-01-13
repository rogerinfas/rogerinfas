import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import Navbar from "@/components/app/navbar"
import ScrollToTop from "@/components/app/scroll-to-top"
import SetStylingPref from "@/components/app/set-styling-pref"
import { ThemeProvider } from "@/components/app/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: "Roger Infa Sánchez - Desarrollador de Software",
    template: `%s - Roger Infa Sánchez`,
  },
  description:
    "Desarrollador de software con experiencia en soluciones web, automatización y backend. Especializado en APIs y arquitecturas escalables.",
  keywords: [
    "Roger Infa Sánchez",
    "Desarrollador de Software",
    "Backend Developer",
    "Full Stack",
    "NestJS",
    "Python",
    "React",
    "Neobrutalism",
  ],
  authors: [{ name: "Roger Infa Sánchez", url: "https://github.com/rogerinfas" }],
  openGraph: {
    type: "website",
    description:
      "Portafolio de Roger Infa Sánchez. Desarrollador de software especializado en NestJS, Python y React.",
    images: ["https://www.neobrutalism.dev/preview.png"], // Placeholder, ideally should be updated
    url: "https://github.com/rogerinfas",
    title: "Roger Infa Sánchez - Portafolio",
  },
  metadataBase: new URL("https://github.com/rogerinfas"), // Placeholder
  twitter: {
    card: "summary_large_image",
    title: "Roger Infa Sánchez - Desarrollador de Software",
    description:
      "Portafolio de Roger Infa Sánchez. Desarrollador de software especializado en NestJS, Python y React.",
    images: ["https://www.neobrutalism.dev/preview.png"],
    creator: "@rogerinfas", // Assuming handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SetStylingPref />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}