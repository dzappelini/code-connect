// src/app/page.js
import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");

  if (!response.ok) {
    logger.error("Erro");
    return [];
  }
  logger.info("Posts obtidos com sucesso");
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </main>
  );
}
