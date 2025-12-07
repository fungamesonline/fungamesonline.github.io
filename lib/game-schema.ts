export interface GameSchemaProps {
  id: string
  title: string
  description: string
  category: string
  playTime?: string
}

export function generateGameSchema(game: GameSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    url: `https://fungamesonline.github.io#${game.id}`,
    applicationCategory: `Game`,
    genre: game.category,
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "100",
    },
    author: {
      "@type": "Organization",
      name: "Fun Games",
      url: "https://fungamesonline.github.io",
    },
    ...(game.playTime && { playTime: game.playTime }),
  }
}
