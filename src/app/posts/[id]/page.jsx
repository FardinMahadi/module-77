export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const { id } = await params;

  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

export function Page({ params, searchParams }) {}

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);

  return (
    <div className="min-h-screen">
      <p>ID: {singlePost.id}</p>
      <h1 className="font-bold text-xl">{singlePost.title}</h1>
      <p>{singlePost.body}</p>
    </div>
  );
}
