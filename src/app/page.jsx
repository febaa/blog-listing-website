'use client';
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import Link from "next/link";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const localBlogs = JSON.parse(localStorage.getItem("blogs") || "null");
    if (localBlogs) setBlogs(localBlogs);
    else {
      import("./data/blogs.json").then((mod) => setBlogs(mod.default));
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4 sm:mb-0">Blog Posts</h1>
        <Link
          href="/add-blog"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          + Add Blog
        </Link>
      </div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}