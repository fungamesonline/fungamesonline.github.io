import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fun Games",
}

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
