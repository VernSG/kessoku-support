import CarouselPlugin from "@/components/carousel";
import { NavigationMenuDemo } from "../components/ui/navbar";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <div className="my-8 p-8">
        <CarouselPlugin />
      </div>
    </>
  );
}
