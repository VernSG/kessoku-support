import { NavigationMenuDemo } from "../components/ui/navbar";
import { CarouselPlugin } from "./carousel";
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
