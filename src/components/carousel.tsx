import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { TypographyDemo } from "@/components/ui/typography";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Footer from "./ui/footer";
// Jangan impor Carousel dari file yang sama jika definisi ada di sini

export default function CarouselPlugin() {
  // Setup autoplay dengan ref untuk kontrol, tanpa stop
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) // stopOnInteraction false untuk terus berjalan
  );

  const images = ["/1.jpg", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8">
      {/* Flex container untuk centering */}
      <Carousel plugins={[plugin.current]} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full max-w-full">
                  {/* Membuat card responsif */}
                  {/* Gambar memenuhi card dengan object-cover */}
                  <CardContent className="relative w-full h-[70vh] sm:h-[50vh] lg:h-[80vh] items-center justify-center p-6">
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

      {/* Section untuk Pengenalan Bot */}
      <section className="w-full max-w-4xl text-center px-4">
        <TypographyDemo />
        <Footer />
      </section>
    </div>
  );
}
