import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to jylog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          개발과 일상에 대한 이야기를 공유합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            아직 포스트가 없습니다.
          </p>
        )}
      </section>
    </div>
  );
}
