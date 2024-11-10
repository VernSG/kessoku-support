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
import DiscordWidget from "@/components/widget"; // Import DiscordWidget
import { WidgetData } from "@/components/widget.types"; // Adjust path as necessary

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  widgetData: WidgetData; // Add widgetData to the HomeProps interface
}

const Home: NextPage<HomeProps> = ({ posts, widgetData }) => {
  return (
    <>
      <div className="my-8 p-8">
        <NavigationMenuDemo />
        <CarouselPlugin />
        <div className="my-8 flex justify-center">
          <DiscordWidget widgetData={widgetData} />
        </div>

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

// Fetch both widgetData and posts in getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  // Fetch posts data
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);

  // Fetch widget data from Discord API
  const res = await fetch(
    "https://discordapp.com/api/guilds/1264199823096025118/widget.json"
  );
  const widgetData: WidgetData = await res.json();

  return {
    props: {
      posts: mdxFiles.slice(0, 5),
      widgetData, // Pass widgetData to the page props
    },
  };
};

export default Home;
