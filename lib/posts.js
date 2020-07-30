import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readTime from "../utils/read-time";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const readingTime = readTime(content);
    const post = { slug, ...data, content, readingTime };
    return post;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug) {
  const sortedPosts = getSortedPostsData();
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const post = sortedPosts[postIndex];
  return {
    ...post,
    previous: sortedPosts[postIndex + 1] || null,
    next: sortedPosts[postIndex - 1] || null,
  };
}
