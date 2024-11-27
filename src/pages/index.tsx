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

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <div className="my-8 p-8">
        <NavigationMenuDemo />
        <CarouselPlugin />
        <Page
          title="Blog"
          description={
            <>
              <p>
                View the blog <a href="/blog">Post</a>.
              </p>
            </>
          }
        >
          <PostList posts={posts} />
          <div className="mt-8">
            <Link
              passHref
              href="/posts"
              className="group inline-flex items-center gap-2 text-pink-600"
            >
              View more posts{" "}
              <ArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                width={".9em"}
              />
            </Link>
          </div>
        </Page>
        <Footer />
      </div>
    </>
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
