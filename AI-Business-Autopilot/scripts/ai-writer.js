const fs = require('fs')
const { OpenAI } = require('openai')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const keywords = [
  "best budget microphone 2025", "start podcast free", "cheap 4k webcam",
  "wireless gaming mouse", "build pc under $500", "mechanical keyboards"
]

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
    console.log(` GENERATED: ${slug}.md`)
  } catch (err) {
    console.error(` FAILED: ${keyword}`, err.message)
  }
}

keywords.forEach(generatePost)
