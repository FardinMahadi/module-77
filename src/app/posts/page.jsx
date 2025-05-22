import Link from "next/link";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2
                  className={`text-xl font-semibold mb-3 line-clamp-2 ${style["post-title"]}`}
                >
                  {post.title}
                </h2>
                <p className="mb-4 line-clamp-3">{post.body}</p>
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-block bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
