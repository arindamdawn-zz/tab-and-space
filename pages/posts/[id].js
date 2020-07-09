import Head from 'next/head';
import ReactMarkdown from 'react-markdown/with-html';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={theme}>
      {value}
    </SyntaxHighlighter>
  );
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <header>
          <h1 className="text-2xl leading-tight font-bold md:text-3xl text-gray-300">
            {postData.title}
          </h1>
          <div>
            {postData.tags &&
              postData.tags.map((tag) => {
                const classes = `inline-block rounded mr-2 mt-2 text-xs font-bold text-gray-300 bg-orange-700 px-2 py-1 tag-${tag}`;
                return <div className={classes} key={tag}>#{tag}</div>;
              })}
          </div>
          {postData.date && (
            <Date
              dateString={postData.date}
              className="text-gray-400 inline-block mt-4"
            />
          )}
          <p className="text-purple-400">
            Time to read: {postData.readingTime.humanizedDuration}
          </p>
        </header>
        <ReactMarkdown
          className="mt-8 text-lg leading-snug markdown text-gray-400"
          escapeHtml={false}
          source={postData.content}
          renderers={{ code: CodeBlock }}
        ></ReactMarkdown>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
