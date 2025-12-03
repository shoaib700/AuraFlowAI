const fs = require('fs')
const { OpenAI } = require('openai')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const keywords = JSON.parse(fs.readFileSync('scripts/keywords.json', 'utf8'))

async function generatePost(keyword) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: `Write 800 words about "${keyword}"` }]
    })
    
    const slug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    const frontmatter = `---
title: "${keyword}"
date: "${new Date().toISOString()}"
---

${completion.choices[0].message.content}`
    
    fs.writeFileSync(`posts/${slug}.md`, frontmatter)
    console.log(`✅ GENERATED: ${slug}.md`)
  } catch (err) {
    console.error(`❌ FAILED: ${keyword}`, err.message)
  }
}

keywords.slice(0, 3).forEach(generatePost) // Generate first 3 posts