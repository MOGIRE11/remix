import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog " },
    { name: "description", content: "Welcome to our blog section" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 content-center">
      {/* Hero Section */}
      <section className="text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Blog</h1>
          <p className="text-xl mb-8 text-neutral-300 max-w-[50rem]">
            Discover insightful articles, expert tips, and inspiring stories
            that will enrich your knowledge and spark your curiosity.
          </p>
          <Link
            to="/blogs"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            role="button"
          >
            Explore Our Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}
