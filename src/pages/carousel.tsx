import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel"; // Tanpa tanda panah

export function CarouselPlugin() {
  // Setup autoplay dengan ref untuk kontrol, tanpa stop
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) // stopOnInteraction false untuk terus berjalan
  );

  const images = ["/1.jpg", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <div className="w-full flex justify-center">
      <Carousel plugins={[plugin.current]} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  {/* Menggunakan tinggi layar penuh dan posisi relative */}
                  <CardContent className="relative flex h-[80vh] items-center justify-center p-6">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
