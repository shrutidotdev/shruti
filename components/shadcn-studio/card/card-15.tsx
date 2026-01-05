"use client"

import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CardGroupDemo = () => {
  const cards = [
    {
      image: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-7.png?width=368&format=auto",
      title: "Mystical Blue Swirl",
      description:
        "Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge seamlessly, creating a mesmerizing flow of colors.",
    },
    {
      image: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-4.png?width=368&format=auto",
      title: "Fiery Sunset Gradient",
      description:
        "Experience the warmth of a radiant sunset with flowing gradients of red, orange, and yellow blending effortlessly in an abstract glow.",
    },
    {
      image: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-5.png?width=368&format=auto",
      title: "Cosmic Blue Waves",
      description:
        "Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a sense of depth and infinite space.",
    }, {
      image: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-5.png?width=368&format=auto",
      title: "Cosmic Blue Waves",
      description:
        "Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a sense of depth and infinite space.",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="overflow-hidden pt-0 h-[32rem] w-80 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <CardContent className="px-0">
            <img src={card.image || "/placeholder.svg"} alt={card.title} className="aspect-video w-full object-cover" />
          </CardContent>
          <CardHeader className="p-6 flex-1">
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardFooter className="gap-3 p-6 max-sm:flex-col max-sm:items-stretch">
            <Button>Explore More</Button>
            <Button variant="outline">Download Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardGroupDemo
