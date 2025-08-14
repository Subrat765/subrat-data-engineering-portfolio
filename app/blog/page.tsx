import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights on data engineering, machine learning, and technology trends.'
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            Blog
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Sharing insights on data engineering, machine learning, and the latest technology trends.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Coming Soon!
                </h2>
                <p className="text-gray-300 mb-6">
                  I'm working on some exciting blog posts about data engineering best practices,
                  machine learning pipelines, and technology insights.
                </p>
                <p className="text-gray-400">
                  Check back soon for fresh content!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-3">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-purple-300 transition-colors duration-300"
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <time dateTime={post.frontmatter.date}>
                          {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        {post.frontmatter.readTime && (
                          <span>• {post.frontmatter.readTime} min read</span>
                        )}
                      </div>

                      {post.frontmatter.excerpt && (
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.frontmatter.excerpt}
                        </p>
                      )}

                      {post.frontmatter.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.frontmatter.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 group"
                      >
                        Read more
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter Signup Section */}
          <div className="mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get notified when I publish new posts about data engineering and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
