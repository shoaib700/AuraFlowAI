import { notFound } from 'next/navigation'
import fs from 'fs'
import AdStack from '@/components/AdStack'

export default function Post({ params }: { params: { slug: string } }) {
  try {
    const content = fs.readFileSync(`posts/${params.slug}.md`, 'utf8')
    const body = content.split('---')[2] || content
    
    return (
      <article className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{params.slug.replace(/-/g, ' ')}</h1>
        
        {/* AD AFTER TITLE */}
        <AdStack type="header" />
        
        <div className="prose lg:prose-xl mt-6" dangerouslySetInnerHTML={{ __html: body }} />
        
        {/* AD AFTER CONTENT */}
        <AdStack type="inArticle" />
      </article>
    )
  } catch {
    notFound()
  }
}