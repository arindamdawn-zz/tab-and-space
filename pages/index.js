import Link from "next/link";

import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

const Index = ({ title, posts }) => {
  return (
    <Layout pageTitle={title}>
      {posts.map(({ id, title, date, description, draft, readingTime }) => {
        return (
          <div key={id} className="mt-4">
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a className="text-2xl md:text-4xl font-bold leading-6">
                {title}
              </a>
            </Link>
            <p className="mt-2 text-lg">{description}</p>
            <Date dateString={date} />
            <p>Time to read: {readingTime.humanizedDuration}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      posts: allPostsData,
    },
  };
}
