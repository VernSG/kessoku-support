import { NavigationMenuDemo } from "../components/ui/navbar";
import { CarouselPlugin } from "../components/carousel";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <div className="my-8 p-9">
        <CarouselPlugin />
      </div>
    </>
  );
}
