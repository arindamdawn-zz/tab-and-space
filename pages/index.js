import Link from 'next/link';

import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

const Index = ({ title, posts }) => {
  return (
    <Layout pageTitle={title}>
      {posts.map(
        ({ id, title, date, description, tags, draft, readingTime }) => {
          return (
            <div key={id} className="py-2">
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="text-2xl md:text-2xl font-bold leading-10 text-gray-300">
                  {title}
                </a>
              </Link>
              <div>
                {tags &&
                  tags.map((tag) => {
                    const classes = `inline-block rounded mr-2 mt-1 text-xs font-bold text-gray-300 bg-orange-700 px-2 py-1 tag-${tag}`;
                    return <div className={classes} key={tag}>#{tag}</div>;
                  })}
              </div>
              {/* <p className="mt-1 text-lg text-gray-400">{description}</p> */}
              <div className="flex space-x-4">
                <Date dateString={date} className="text-gray-400" />
                <p className="text-purple-400">
                  Time to read: {readingTime.humanizedDuration}
                </p>
              </div>
            </div>
          );
        }
      )}
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
