import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const CardGroupDemo = () => {
  const cards = [
    {
      image:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-7.png?width=368&format=auto",
      title: "Mystical Blue Swirl",
      description:
        "Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge seamlessly, creating a mesmerizing flow of colors.",
    },
    {
      image:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-4.png?width=368&format=auto",
      title: "Fiery Sunset Gradient",
      description:
        "Experience the warmth of a radiant sunset with flowing gradients of red, orange, and yellow blending effortlessly in an abstract glow.",
    },
    {
      image:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-5.png?width=368&format=auto",
      title: "Cosmic Blue Waves",
      description:
        "Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a sense of depth and infinite space.",
    },
  ];

  return (
    <div className="flex *:rounded-none *:shadow-none max-xl:flex-col max-xl:*:not-last:border-b-0 max-xl:*:first:rounded-t-xl max-xl:*:last:rounded-b-xl xl:*:not-last:border-r-0 xl:*:first:rounded-l-xl xl:*:last:rounded-r-xl">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="overflow-hidden pt-0 shadow-2xl shadow-amber-50 cursor-pointer bg-black border-white/10 hover:shadow-white/70 transition-shadow duration-300 text-white"
        >
          <CardContent className="px-0">
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
                src={card.image}
                alt="Banner"
                className="aspect-video w-92 object-cover rounded-t-lg hover:scale-105 hover:rounded-4xl transition-transform duration-300"
                width={1000}
                height={1000}
              />
            </motion.div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-2xl ">{card.title}</CardTitle>
            <CardDescription className="text-xl text-ellipsis overflow-hidden h-40">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch ">
            <Button className="text-md cursor-pointer">Explore More</Button>
            <Button className="text-md cursor-pointer">Download Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardGroupDemo;
