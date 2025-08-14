import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  tags?: string[]
  published: boolean
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        const { data, content } = matter(fileContents)
        
        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt,
          content,
          tags: data.tags || [],
          published: data.published !== false,
        } as BlogPost
      })
  )
  
  return allPostsData
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    
    if (data.published === false) {
      return null
    }
    
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt,
      content,
      tags: data.tags || [],
      published: data.published !== false,
    }
  } catch (error) {
    return null
  }
}

export async function compileMDXContent(source: string) {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    },
  })
}
