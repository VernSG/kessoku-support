"use client";

import dynamic from "next/dynamic";

// Mengimpor komponen secara dinamis untuk mencegah SSR jika mereka menggunakan API browser
const NavigationMenuDemo = dynamic(
  () => import("../components/ui/navbar").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const CarouselPlugin = dynamic(
  () => import("../components/carousel").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const Footer = dynamic(() => import("../components/ui/footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <div className="my-8 p-8">
        <CarouselPlugin />
        <Footer />
      </div>
    </div>
  );
}
