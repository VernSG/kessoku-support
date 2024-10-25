import { NavigationMenuDemo } from "../components/ui/navbar";
import { CarouselPlugin } from "../components/carousel";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <div className="my-8 p-9">
        <CarouselPlugin />
      </div>
    </div>
  );
}
