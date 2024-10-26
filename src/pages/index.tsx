import CarouselPlugin from "@/components/carousel";
import { NavigationMenuDemo } from "../components/ui/navbar";

export default function Home() {
  return (
    <>
      <div className="my-8 p-8">
        <NavigationMenuDemo />
        <CarouselPlugin />
      </div>
    </>
  );
}
