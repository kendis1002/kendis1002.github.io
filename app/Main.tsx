'use client'

import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import BlogCard from '@/components/BlogCard'

const MAX_DISPLAY = 5

interface MainProps {
  posts: CoreContent<Blog>[]
}

const Main = ({ posts }: MainProps) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Bài viết mới nhất
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Một bộ sưu tập các suy nghĩ, ý tưởng và kinh nghiệm.
        </p>
      </div>
      <div className="container py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main
