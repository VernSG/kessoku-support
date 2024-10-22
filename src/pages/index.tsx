import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./navbar";
import { CarouselPlugin } from "./carousel";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <CarouselPlugin />
    </>
  );
}
