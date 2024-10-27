import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { TypographyDemo } from "@/components/ui/typography";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const images = ["/6.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8">
      <Carousel plugins={[plugin.current]} className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full">
                  <CardContent className="relative flex aspect-square items-center justify-center p-6">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <TypographyDemo />
    </div>
  );
}
