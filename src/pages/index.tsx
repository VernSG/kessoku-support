import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./navbar";
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
