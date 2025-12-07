import type { Metadata } from "next"
import { notFound } from "next/navigation"
import GameDashboard from "@/game-dashboard"
import { generateGameSchema } from "@/lib/game-schema"

type GameSlug =
  | "typing-speed"
  | "2048"
  | "simon-says"
  | "whack-a-mole"
  | "coin-collector"
  | "bubble-pop"
  | "word-scramble"
  | "connect-four"
  | "memory-match"
  | "minesweeper"
  | "triangle"
  | "sheep-run"
  | "snake"
  | "pong"
  | "reaction-time"
  | "tetris"
  | "breakout"
  | "orbit-defense"
  | "color-match"
  | "space-invaders"
  | "tic-tac-toe"
  | "quick-math"

interface GameMetadata {
  title: string
  description: string
  category: string
}

const gameMetadataMap: Record<GameSlug, GameMetadata> = {
  "typing-speed": {
    title: "Typing Speed Game - Test Your Typing Skills",
    description:
      "Challenge yourself with our typing speed test. Measure your words per minute and improve your typing accuracy.",
    category: "Action",
  },
  "2048": {
    title: "2048 Game - Puzzle Challenge",
    description:
      "Slide numbered tiles to reach 2048 and discover higher numbers. Classic puzzle game that's easy to play but hard to master.",
    category: "Puzzle",
  },
  "simon-says": {
    title: "Simon Says - Memory Game",
    description: "Test your memory by repeating increasingly complex color patterns. How many levels can you reach?",
    category: "Action",
  },
  "whack-a-mole": {
    title: "Whack-a-Mole - Reaction Game",
    description: "Quick reflexes needed! Whack the moles as they pop up. Test your speed and accuracy.",
    category: "Action",
  },
  "coin-collector": {
    title: "Coin Collector - Platformer Game",
    description: "Jump through levels collecting coins in this fun platformer adventure game.",
    category: "Arcade",
  },
  "bubble-pop": {
    title: "Bubble Pop - Match Game",
    description: "Pop colorful bubbles and build combos. How high can you score?",
    category: "Arcade",
  },
  "word-scramble": {
    title: "Word Scramble - Word Game",
    description: "Unscramble letters to form words as quickly as you can. Race against the clock!",
    category: "Puzzle",
  },
  "connect-four": {
    title: "Connect Four - Strategy Game",
    description: "Drop pieces to get four in a row. Play against friends or challenge the AI.",
    category: "Strategy",
  },
  "memory-match": {
    title: "Memory Match - Card Game",
    description: "Match pairs of cards using your memory. Find all pairs with minimum moves.",
    category: "Puzzle",
  },
  minesweeper: {
    title: "Minesweeper - Strategy Game",
    description: "Clear the board without hitting mines. Use logic and strategy to win.",
    category: "Strategy",
  },
  triangle: {
    title: "Triangle - Arcade Game",
    description: "Navigate a triangle through obstacles with precise timing. How far can you go?",
    category: "Arcade",
  },
  "sheep-run": {
    title: "Sheep Run - Arcade Game",
    description: "Jump over cacti and dodge flying birds. Classic arcade action!",
    category: "Arcade",
  },
  snake: {
    title: "Snake - Classic Game",
    description: "The timeless arcade classic. Eat food to grow longer, avoid hitting walls.",
    category: "Arcade",
  },
  pong: {
    title: "Pong - Arcade Classic",
    description: "The original arcade game. Play against AI in this timeless classic.",
    category: "Arcade",
  },
  "reaction-time": {
    title: "Reaction Time Test - Reflex Game",
    description: "Test your reflexes with our reaction time game. How fast can you click?",
    category: "Action",
  },
  tetris: {
    title: "Tetris - Block Puzzle Game",
    description: "Stack falling blocks to clear lines and score high. The classic puzzle game.",
    category: "Puzzle",
  },
  breakout: {
    title: "Breakout - Arcade Game",
    description: "Break all the bricks with your ball and paddle. Classic arcade fun!",
    category: "Arcade",
  },
  "orbit-defense": {
    title: "Orbit Defense - Tower Defense",
    description: "Strategic tower defense in space. Build towers and defeat alien waves.",
    category: "Strategy",
  },
  "color-match": {
    title: "Color Match - Quick Game",
    description: "Match the target color as fast as you can. Test your color recognition!",
    category: "Action",
  },
  "space-invaders": {
    title: "Space Invaders - Shooter Game",
    description: "Defend Earth from waves of alien invaders. Classic arcade shooter action!",
    category: "Action",
  },
  "tic-tac-toe": {
    title: "Tic Tac Toe - Strategy Game",
    description: "Classic strategy game. Get three in a row to win!",
    category: "Strategy",
  },
  "quick-math": {
    title: "Quick Math - Math Game",
    description: "Answer as many math questions as you can in 60 seconds. Improve your mental math!",
    category: "Puzzle",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const gameData = gameMetadataMap[slug as GameSlug]

  if (!gameData) {
    return {
      title: "Game Not Found",
    }
  }

  return {
    title: gameData.title,
    description: gameData.description,
    openGraph: {
      title: gameData.title,
      description: gameData.description,
      type: "website",
    },
  }
}

export function generateStaticParams() {
  return Object.keys(gameMetadataMap).map((slug) => ({
    slug,
  }))
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const gameData = gameMetadataMap[slug as GameSlug]

  if (!gameData) {
    notFound()
  }

  const schema = generateGameSchema({
    id: slug,
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: gameData.description,
    category: gameData.category,
    url: `https://fungamesonline.github.io/${slug}`,
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GameDashboard initialGame={slug as any} />
    </>
  )
}
