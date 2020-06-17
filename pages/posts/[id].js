import Head from "next/head";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <header>
          <h1 className="text-2xl leading-tight font-bold md:text-4xl">
            {postData.title}
          </h1>
          {postData.date && <Date dateString={postData.date} />}
        </header>
        <ReactMarkdown
          className="mt-8 text-lg leading-snug markdown"
          escapeHtml={false}
          source={postData.content}
          renderers={{ code: CodeBlock }}
        >
        </ReactMarkdown>
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
