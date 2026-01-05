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
    },
  ]

  return (
    <div className="flex flex-col gap-6 md:flex-row *:rounded-none *:shadow-none md:*:not-last:border-r-0 md:*:first:rounded-l-xl md:*:last:rounded-r-xl md:flex-1 border-none">
      {cards.map((card, index) => (
        <Card key={index} className="overflow-hidden py-5 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl bg-black transition-shadow duration-300 h-[30rem] w-96">
          <CardContent className="p-0">
            <img src={card.image} alt={card.title} className="aspect-video w-full object-cover " />
          </CardContent>
          <CardHeader className="mb-7">
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
            <Button>Explore More</Button>
            <Button > Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardGroupDemo
