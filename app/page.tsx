import type { Metadata } from "next"
import GameDashboard from "../game-dashboard"
import Footer from "@/components/footer"

export const metadata: Metadata = { 
  title: "Fun Games - 22+ Free Online Games to Play",
  description:
    "Discover and play 22+ fun free online games. From classic arcade games like Snake and Tetris to modern challenges like 2048 and Simon Says. No downloads needed!",
  keywords: "free games, online games, fun games, classic games, arcade games, puzzle games, strategy games",
  openGraph: {
    title: "Fun Games - 22+ Free Online Games to Play",
    description: "Play exciting free online games directly in your browser",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Fun Games - Free Online Games",
            description: "A curated collection of 22+ fun and addictive online games",
            url: "https://fungamesonline.github.io",
            creator: {
              "@type": "Organization",
              name: "Fun Games",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Snake",
                  description: "Classic snake game - eat food and grow longer",
                  url: "https://fungamesonline.github.io#snake",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tetris",
                  description: "Stack falling blocks to clear lines",
                  url: "https://fungamesonline.github.io#tetris",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "2048",
                  description: "Puzzle game - slide tiles to reach 2048",
                  url: "https://fungamesonline.github.io#2048",
                },
              ],
            },
          }),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <GameDashboard />
        </div>
        <Footer />
      </div>
    </>
  )
}
