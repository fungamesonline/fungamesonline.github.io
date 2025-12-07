import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fun Games - Free Online Games to Play",
  description:
    "Play 22+ free online games including classics like Snake, Tetris, 2048, Flappy, and more. Instant browser-based gaming with no downloads required.",
  keywords:
    "free online games, browser games, fun games, classic games, snake game, tetris, 2048, flappy bird, pong, breakout",
  authors: [{ name: "Fun Games" }],
  creator: "Fun Games",
  publisher: "fungamesonline.github.io",
  metadataBase: new URL("https://fungamesonline.github.io"),
  alternates: {
    canonical: "https://fungamesonline.github.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fungamesonline.github.io",
    title: "Fun Games - Free Online Games to Play",
    description: "Play 22+ free online games including classics like Snake, Tetris, 2048, Flappy, and more.",
    siteName: "Fun Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun Games - Free Online Games to Play",
    description: "Play 22+ free online games instantly in your browser",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Fun Games",
        url: "https://fungamesonline.github.io",
        logo: "https://fungamesonline.github.io/logo.png",
        description: "A collection of free, fun, and addictive online games",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
        },
      },
      {
        "@type": "WebSite",
        name: "Fun Games",
        url: "https://fungamesonline.github.io",
        description: "Free online games collection with 22+ classic and modern games",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://fungamesonline.github.io?search={search_term_string}",
          },
          query: "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <html lang="en"> 
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
