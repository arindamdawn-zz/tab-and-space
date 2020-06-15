import Link from 'next/link';

import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

const Index = ({ title, description, posts }) => {
  return (
    <Layout pageTitle={title}>
      <main className="max-w-sm m-auto">
        My posts
        <ul>
          {posts.map(({ id, title, date, draft }) => {
            return (
              <>
                {!draft && (
                  <li key={id}>
                    <Link href="/posts/[id]" as={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </main>
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
