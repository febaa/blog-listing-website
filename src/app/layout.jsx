import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Blogs and Fun",
  description: "A fun blogs listing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc] text-gray-800 font-sans min-h-screen p-4">
        <main className="max-w-4xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
