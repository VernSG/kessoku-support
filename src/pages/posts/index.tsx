import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "../../../lib/mdx";
import { MDXFrontMatter } from "../../../lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { NavigationMenuDemo } from "@/components/ui/navbar";

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <div className="my-8 p-8">
        <NavigationMenuDemo />
        <Page title="Posts" description="Blog post tentang Ryo">
          <PostList posts={posts} />
        </Page>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;
