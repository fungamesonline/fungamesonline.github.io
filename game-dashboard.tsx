"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Play,
  Triangle,
  PawPrint,
  Grid3X3,
  Gamepad2,
  Timer,
  Zap,
  Target,
  Square,
  Palette,
  Rocket,
  Brain,
  Bomb,
  BookOpen,
  Sparkles,
  Coins,
  Circle,
  Calculator,
  Keyboard,
} from "lucide-react"
import FlappyTriangle from "./flappy-triangle"
import DinoGame from "./dino-game"
import SnakeGame from "./snake-game"
import PongGame from "./pong-game"
import ReactionGame from "./reaction-game"
import TetrisGame from "./tetris-game"
import BreakoutGame from "./breakout-game"
import OrbitDefense from "./orbit-defense"
import ColorMatchGame from "./color-match-game"
import SpaceInvadersGame from "./space-invaders-game"
import TicTacToeGame from "./tic-tac-toe-game"
import MemoryMatchGame from "./memory-match-game"
import MinesweeperGame from "./minesweeper-game"
import WordScrambleGame from "./word-scramble-game"
import BubblePopGame from "./bubble-pop-game"
import CoinCollectorGame from "./coin-collector-game"
import ConnectFourGame from "./connect-four-game"
import WhackAMoleGame from "./whack-a-mole-game"
import SimonSaysGame from "./simon-says-game"
import Puzzle2048Game from "./puzzle-2048-game"
import QuickMathGame from "./quick-math-game"
import TypingSpeedGame from "./typing-speed-game"

type GameType =
  | "menu"
  | "2048"
  | "simon-says"
  | "whack-a-mole"
  | "coin-collector"
  | "bubble-pop"
  | "word-scramble"
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
  | "memory-match"
  | "minesweeper"
  | "connect-four"
  | "quick-math"
  | "typing-speed"

type Category = "All" | "Arcade" | "Puzzle" | "Strategy" | "Action"

interface GameDashboardProps {
  initialGame?: GameType
}

export default function GameDashboard({ initialGame }: GameDashboardProps = {}) {
  const [currentGame, setCurrentGame] = useState<GameType>(initialGame || "menu")
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const games = [
    {
      id: "typing-speed" as const,
      title: "Typing Speed",
      description: "Test your typing speed and accuracy with timed challenges!",
      icon: Keyboard,
      color: "bg-teal-500",
      themeColor: "#14b8a6",
      category: "Action" as const,
      isNew: true,
      image: "/images/typing-speed.jpg",
    },
    {
      id: "2048" as const,
      title: "2048",
      description: "Slide numbered tiles to reach 2048 - addictive puzzle challenge!",
      icon: Grid3X3,
      color: "bg-amber-500",
      themeColor: "#f59e0b",
      category: "Puzzle" as const,
      isNew: true,
      image: "/images/2048.jpg",
    },
    {
      id: "simon-says" as const,
      title: "Simon Says",
      description: "Watch the pattern and repeat it back - test your memory!",
      icon: Brain,
      color: "bg-purple-600",
      themeColor: "#9333ea",
      category: "Action" as const,
      isNew: true,
      image: "/images/simon-says.jpg",
    },
    {
      id: "whack-a-mole" as const,
      title: "Whack-a-Mole",
      description: "Quick reflexes needed - whack the moles before they hide!",
      icon: Target,
      color: "bg-green-500",
      themeColor: "#22c55e",
      category: "Action" as const,
      isNew: true,
      image: "/images/whack-a-mole.jpg",
    },
    {
      id: "connect-four" as const,
      title: "Connect Four",
      description: "Drop pieces to get four in a row - play vs friends or CPU",
      icon: Circle,
      color: "bg-red-500",
      themeColor: "#ef4444",
      category: "Strategy" as const,
      isNew: true,
      image: "/images/connect-four.jpg",
    },
    {
      id: "word-scramble" as const,
      title: "Word Scramble",
      description: "Unscramble letters to form words quickly",
      icon: BookOpen,
      color: "bg-purple-500",
      themeColor: "#8b5cf6",
      category: "Puzzle" as const,
      isNew: true,
      image: "/images/word-scramble.jpg",
    },
    {
      id: "memory-match" as const,
      title: "Memory Match",
      description: "Match pairs of cards with memory",
      icon: Brain,
      color: "bg-pink-500",
      themeColor: "#ec4899",
      category: "Puzzle" as const,
      image: "/images/memory-match.jpg",
    },
    {
      id: "coin-collector" as const,
      title: "Coin Collector",
      description: "Jump and collect coins in this platformer adventure",
      icon: Coins,
      color: "bg-yellow-500",
      themeColor: "#f59e0b",
      category: "Arcade" as const,
      image: "/images/coin-collector.jpg",
    },
    {
      id: "bubble-pop" as const,
      title: "Bubble Pop",
      description: "Pop colorful bubbles and build combos",
      icon: Sparkles,
      color: "bg-cyan-500",
      themeColor: "#4ecdc4",
      category: "Arcade" as const,
      image: "/images/bubble-pop.jpg",
    },
    {
      id: "minesweeper" as const,
      title: "Minesweeper",
      description: "Clear the board without hitting mines",
      icon: Bomb,
      color: "bg-gray-700",
      themeColor: "#374151",
      category: "Strategy" as const,
      image: "/images/minesweeper.jpg",
    },
    {
      id: "triangle" as const,
      title: "Triangle",
      description: "Navigate through obstacles with precise timing.",
      icon: Triangle,
      color: "bg-yellow-500",
      themeColor: "#f59e0b",
      category: "Arcade" as const,
      image: "/images/flappy-triangle.jpg",
    },
    {
      id: "sheep-run" as const,
      title: "Sheep Run",
      description: "Jump over cacti and dodge flying birds.",
      icon: PawPrint,
      color: "bg-gray-700",
      themeColor: "#374151",
      category: "Arcade" as const,
      image: "/images/sheep-run.jpg",
    },
    {
      id: "snake" as const,
      title: "Snake",
      description: "A modern, minimalistic take on the classic.",
      icon: Grid3X3,
      color: "bg-green-500",
      themeColor: "#22c55e",
      category: "Arcade" as const,
      image: "/images/snake.jpg",
    },
    {
      id: "pong" as const,
      title: "Pong",
      description: "The timeless arcade classic. Play against an AI.",
      icon: Gamepad2,
      color: "bg-blue-500",
      themeColor: "#3b82f6",
      category: "Arcade" as const,
      image: "/images/pong.jpg",
    },
    {
      id: "reaction-time" as const,
      title: "Reaction Time",
      description: "Test your reflexes. How fast can you click?",
      icon: Timer,
      color: "bg-red-500",
      themeColor: "#ef4444",
      category: "Action" as const,
      image: "/images/reaction-time.jpg",
    },
    {
      id: "tetris" as const,
      title: "Tetris",
      description: "Stack falling blocks to clear lines and score high.",
      icon: Square,
      color: "bg-purple-500",
      themeColor: "#a855f7",
      category: "Puzzle" as const,
      image: "/images/tetris.jpg",
    },
    {
      id: "breakout" as const,
      title: "Breakout",
      description: "Break all the bricks with your ball and paddle.",
      icon: Zap,
      color: "bg-orange-500",
      themeColor: "#f97316",
      category: "Arcade" as const,
      image: "/images/breakout.jpg",
    },
    {
      id: "orbit-defense" as const,
      title: "Orbit Defense",
      description: "Strategic tower defense in the vastness of space.",
      icon: Target,
      color: "bg-indigo-500",
      themeColor: "#6366f1",
      category: "Strategy" as const,
      image: "/images/orbit-defense.jpg",
    },
    {
      id: "color-match" as const,
      title: "Color Match",
      description: "Match the target color as fast as you can!",
      icon: Palette,
      color: "bg-pink-500",
      themeColor: "#ec4899",
      category: "Action" as const,
      image: "/images/color-match.jpg",
    },
    {
      id: "space-invaders" as const,
      title: "Space Invaders",
      description: "Defend Earth from waves of alien invaders in this classic arcade shooter.",
      icon: Rocket,
      color: "bg-cyan-500",
      themeColor: "#06b6d4",
      category: "Action" as const,
      image: "/images/space-invaders.jpg",
    },
    {
      id: "tic-tac-toe" as const,
      title: "Tic Tac Toe",
      description: "Classic strategy game - get three in a row to win!",
      icon: Grid3X3,
      color: "bg-emerald-500",
      themeColor: "#10b981",
      category: "Strategy" as const,
      image: "/images/tic-tac-toe.jpg",
    },
    {
      id: "quick-math" as const,
      title: "Quick Math",
      description: "Answer as many math questions as you can in 60 seconds.",
      icon: Calculator,
      color: "bg-sky-500",
      themeColor: "#0ea5e9",
      category: "Puzzle" as const,
      isNew: true,
      image: "/images/quick-math.jpg",
    },
  ]

  const categories: Category[] = ["All", "Arcade", "Puzzle", "Strategy", "Action"]

  const filteredGames = selectedCategory === "All" ? games : games.filter((game) => game.category === selectedCategory)

  const renderGame = () => {
    const gameData = games.find((g) => g.id === currentGame)
    const commonProps = {
      onBack: () => setCurrentGame("menu"),
      themeColor: gameData ? gameData.themeColor : "#000000",
    }
    switch (currentGame) {
      case "typing-speed":
        return <TypingSpeedGame {...commonProps} />
      case "2048":
        return <Puzzle2048Game {...commonProps} />
      case "simon-says":
        return <SimonSaysGame {...commonProps} />
      case "whack-a-mole":
        return <WhackAMoleGame {...commonProps} />
      case "coin-collector":
        return <CoinCollectorGame {...commonProps} />
      case "bubble-pop":
        return <BubblePopGame {...commonProps} />
      case "word-scramble":
        return <WordScrambleGame {...commonProps} />
      case "connect-four":
        return <ConnectFourGame {...commonProps} />
      case "memory-match":
        return <MemoryMatchGame {...commonProps} />
      case "minesweeper":
        return <MinesweeperGame {...commonProps} />
      case "triangle":
        return <FlappyTriangle {...commonProps} />
      case "sheep-run":
        return <DinoGame {...commonProps} />
      case "snake":
        return <SnakeGame {...commonProps} />
      case "pong":
        return <PongGame {...commonProps} />
      case "reaction-time":
        return <ReactionGame {...commonProps} />
      case "tetris":
        return <TetrisGame {...commonProps} />
      case "breakout":
        return <BreakoutGame {...commonProps} />
      case "orbit-defense":
        return <OrbitDefense {...commonProps} />
      case "color-match":
        return <ColorMatchGame {...commonProps} />
      case "space-invaders":
        return <SpaceInvadersGame {...commonProps} />
      case "tic-tac-toe":
        return <TicTacToeGame {...commonProps} />
      case "quick-math":
        return <QuickMathGame {...commonProps} />
      default:
        return null
    }
  }

  if (currentGame !== "menu") {
    return (
      <div className="relative w-full h-full">
        <Button
          onClick={() => setCurrentGame("menu")}
          variant="outline"
          size="sm"
          className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Button>
        {renderGame()}
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-orange-800 mb-4">
            Crafted on v0.dev by{" "}
            <a
              href="https://x.com/shribuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-900 underline underline-offset-2"
            >
              shrix1
            </a>
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg">Fun Games</h1>
          <p className="text-orange-900 text-lg drop-shadow">Play 22+ fun free games instantly in your browser</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-white text-orange-600 hover:bg-gray-100"
                  : "text-white bg-white/20 hover:bg-white/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="group relative overflow-hidden rounded-xl border border-white/20 hover:border-white/50 transition-all duration-200 cursor-pointer bg-white/90 backdrop-blur-sm hover:shadow-2xl hover:scale-105"
              onClick={() => (window.location.href = `/${game.id}`)}
            >
              {game.isNew && (
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                  NEW
                </div>
              )}
              <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${game.color} text-white`}>
                    <game.icon className="w-5 h-5" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-black">{game.title}</CardTitle>
                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {game.category}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {game.description}
                  </CardDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
