import { notFound } from 'next/navigation'
import fs from 'fs'

export default function Post({ params }: { params: { slug: string } }) {
  try {
    const content = fs.readFileSync(`posts/${params.slug}.md`, 'utf8')
    const body = content.split('---')[2] || content
    
    return (
      <article className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{params.slug.replace(/-/g, ' ')}</h1>
        
        {/* ADS IN POSTS */}
        <div className="ad-stack my-8 p-4 border rounded bg-gray-50">
          <ins className="adsbygoogle block"
               data-ad-client="ca-pub-2203546185229559"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        <div className="prose lg:prose-xl mt-6" dangerouslySetInnerHTML={{ __html: body }} />
      </article>
    )
  } catch {
    notFound()
  }
}
