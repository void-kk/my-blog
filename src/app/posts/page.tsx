import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>
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
    </div>
  );
}
