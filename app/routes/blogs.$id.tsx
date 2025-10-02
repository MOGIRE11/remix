import type { LoaderFunction } from "react-router";
import { useLoaderData, Link } from "react-router";
import blogs from "../data/blogs.json";

type Blog = {
  id: number;
  title: string;
  description: string;
};

type LoaderData = Blog | undefined;

// Loader function to fetch a single blog post by id
export const loader: LoaderFunction = async ({ params }) => {
  const id = Number(params.id);
  // Find the blog post by id
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    throw new Response("Not Found", { status: 404 });
  }

  return blog;
};

export default function BlogPost() {
  // Get blog post data from loader
  const blog = useLoaderData() as LoaderData;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
        <Link
          to="/blogs"
          className="ml-4 text-blue-600 hover:text-blue-800 underline"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 max-w-3xl mx-auto">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {blog.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {blog.description}
        </p>
        <Link
          to="/blogs"
          className="inline-block mt-8 text-blue-600 hover:text-blue-800 font-medium"
        >
          &larr; Back to Blogs
        </Link>
      </article>
    </div>
  );
}
