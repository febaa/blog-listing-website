'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || "null");
    if (blogs) {
      const found = blogs.find((b) => b.id === id);
      setBlog(found);
    } else {
      import("../../data/blogs.json").then((mod) => {
        const found = mod.default.find((b) => b.id === id);
        setBlog(found);
      });
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
}