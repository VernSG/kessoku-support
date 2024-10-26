import CarouselPlugin from "@/components/carousel";
import { NavigationMenuDemo } from "../components/ui/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8 p-8">
        <NavigationMenuDemo />
        <CarouselPlugin />
      </div>
    </>
  );
}
