import "@/styling/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marco Nava Studio | Roger Infa Sánchez",
  description: "Portafolio de diseño, audio branding y desarrollo de software.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/css_kVXh.css" />
        <link rel="stylesheet" href="/css_002_kVXh.css" />
        <link rel="stylesheet" href="/viewer_kVXh.css" />
      </head>
      <body>
        {children}
        <script src="/viewer_kVXh.js" async />
      </body>
    </html>
  )
}