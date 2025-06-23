'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm() {
  const [formData, setFormData] = useState({ title: "", content: "", date: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      id: Date.now().toString(),
      summary: formData.content.slice(0, 100) + '...'
    };

    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Blog Content"
          required
          className="w-full p-3 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition"
      >
        Add Blog
      </button>
    </form>
  );
}