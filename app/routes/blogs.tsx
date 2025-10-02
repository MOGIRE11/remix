import type { LoaderFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import blogs from "../data/blogs.json";

type Blog = {
  id: number;
  title: string;
  description: string;
};

// Loader function to fetch all blogs data
export const loader: LoaderFunction = async () => {
  // Return blogs data directly
  return blogs;
};

export default function Blogs() {
  // Get blogs data from loader
  const blogsData = useLoaderData() as Blog[];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <header className="max-w-4xl mx-auto mb-8">
        <Link to="/" className="bg-gray-800 p-2 rounded border border-neutral-700">
          &larr; Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4">
          Blog Posts
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Explore our latest articles and insights.
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogsData.map(({ id, title, description }) => (
          <article
            key={id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {description}
            </p>
            <Link
              to={`/blogs/${id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
              aria-label={`Read more about ${title}`}
            >
              Read More &rarr;
            </Link>
          </article>
        ))}
      </main>
    </div>
  );
}
