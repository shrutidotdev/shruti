"use client"

import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

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
    <div className="flex *:rounded-none *:shadow-none max-xl:flex max-xl:*:not-last:border-b-0 max-xl:*:first:rounded-t-xl max-xl:*:last:rounded-b-xl max-sm:flex-col gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="pt-0 shadow-2xl shadow-amber-50 cursor-pointer bg-black border-white/10 hover:shadow-white/70 transition-shadow duration-300 text-white"
        >
          <CardContent className="p-0 overflow-hidden rounded-t-lg">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <Image
                src={card.image || "/placeholder.svg"}
                alt="Banner"
                className="aspect-video w-full object-cover transition-transform duration-300"
                sizes="max(width: 368px) 100vw, 368px"
                width={1000}
                height={1000}
              />
            </motion.div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-2xl">{card.title}</CardTitle>
            <CardDescription className="text-xl text-ellipsis overflow-hidden h-40">{card.description}</CardDescription>
          </CardHeader>
          <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
            <Button className="text-md cursor-pointer">Explore More</Button>
            <Button className="text-md cursor-pointer">Download Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardGroupDemo