import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "../../lib/mdx";
import { MDXFrontMatter } from "../../lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";
import { NavigationMenuDemo } from "@/components/ui/navbar";
import CarouselPlugin from "@/components/carousel";
import Footer from "@/components/ui/footer";
import { About } from "@/components/about";
import { Boxes } from "@/components/ui/background-boxes";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Boxes sebagai background dengan z-index lebih rendah */}
      <div className="fixed inset-0 -z-10">
        <Boxes />
      </div>

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto p-8">
          <NavigationMenuDemo />
          <CarouselPlugin />
          <About />
        </div>

        <div className="my-8 p-8 w-full max-w-6xl mx-auto">
          <Page
            title="Blog"
            description={
              <>
                <p>
                  View the blog <a href="/blog">Post MDX</a>.
                </p>
              </>
            }
          >
            <PostList posts={posts} />
            <div className="mt-8">
              <Link
                passHref
                href="/posts"
                className="group inline-flex items-center gap-2 text-primary-foreground"
              >
                View more posts{" "}
                <ArrowRight
                  className="group-hover:translate-x-0.5 transition-transform"
                  width={".9em"}
                />
              </Link>
            </div>
          </Page>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
