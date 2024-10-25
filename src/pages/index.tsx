import { NavigationMenuDemo } from "../components/ui/navbar";
import { CarouselPlugin } from "../components/carousel";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <CarouselPlugin />
      <Footer />
    </>
  );
}
