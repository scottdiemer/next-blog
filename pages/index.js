import Head from "next/head";
import Link from "next/link";
import { getPosts, getSlugs } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  const slugs = await getSlugs();
  return {
    props: {
      posts,
      slugs,
    },
  };
}

function HomePage({ posts }) {
  console.log("HomePage posts:", posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
