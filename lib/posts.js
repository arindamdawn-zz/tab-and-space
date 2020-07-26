import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readTime from "../utils/read-time";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const readingTime = readTime(content);
    const post = { id, ...data, readingTime };
    return post;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const markdownWithMetadata = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(markdownWithMetadata);
  const readingTime = readTime(content);
  const postData = { id, content, readingTime, ...data };
  return postData;
}
