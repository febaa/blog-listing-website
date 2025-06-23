import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 transition hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
      <p className="text-gray-700 mb-4 leading-relaxed">{blog.summary}</p>
      <Link
        href={`/blog/${blog.id}`}
        className="text-indigo-500 font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}