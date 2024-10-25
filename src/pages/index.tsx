import { GetStaticProps } from "next";
import NavigationMenuDemo from "@/components/ui/navbar";
import CarouselPlugin from "@/components/carousel";
import Footer from "@/components/ui/footer";

type HomeData = {
  title: string;
  description: string;
};

type HomeProps = {
  data?: HomeData;
};

export const getStaticProps: GetStaticProps = async () => {
  // Ambil data di sini
  const data = {
    title: "Welcome to My Website",
    description: "This is a description for the website.",
  };

  return {
    props: {
      data, // Kirim data ke komponen Home
    },
  };
};

export default function Home({ data }: HomeProps) {
  if (!data) {
    return <div>Loading...</div>; // Tampilkan state sementara jika data tidak tersedia
  }

  return (
    <div>
      <NavigationMenuDemo />
      <CarouselPlugin />
      <Footer />
    </div>
  );
}
