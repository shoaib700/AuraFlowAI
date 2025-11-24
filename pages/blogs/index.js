import Layout from "@/components/Layout";
import AdSenseBlock from "@/components/AdSenseBlock";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
    }
    load();
  }, []);

  return (
    <Layout>
      <h1 className="pageTitle">📝 AI Blogs Generator</h1>
      <AdSenseBlock slot="123001122" />

      <div className="gridCards">
        {blogs.map((blog) => (
          <div className="card" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>

            <a href={blog.url} target="_blank" className="primaryBtn">
              Read Full Blog →
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
