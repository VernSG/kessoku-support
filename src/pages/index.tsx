import CarouselPlugin from "@/components/carousel";
import Footer from "@/components/ui/footer";
import NavigationMenuDemo from "@/components/ui/navbar";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <CarouselPlugin />
      <Footer />
    </div>
  );
}
