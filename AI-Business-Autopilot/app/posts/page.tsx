import Link from 'next/link'
import fs from 'fs'

export default function Posts() {
  const posts = fs.existsSync('posts') ? fs.readdirSync('posts').map(file => {
    const slug = file.replace('.md', '')
    return { slug, title: slug.replace(/-/g, ' ') }
  }) : []

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-4">
        {posts.length > 0 ? posts.map(post => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="border p-4 rounded hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
        )) : <p>No posts yet. AI Writer will generate them.</p>}
      </div>
    </main>
  )
}
