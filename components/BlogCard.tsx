'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'
import Link from './Link'
import Tag from './Tag'

type BlogCardProps = {
  post: CoreContent<Blog>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, title, summary, date, tags } = post
  const formattedDate = formatDate(date)

  return (
    <div className="shadow-feature-card group rounded-xl px-4 py-4">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <Image
            src={`/static/images/blog/${slug}/cover.png`}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between gap-2 px-2 pt-4 text-sm text-gray-500 dark:text-gray-400">
          {formattedDate}
          <div className="flex gap-2">
            <div>0 likes</div>
            <div>&middot;</div>
            <div>0 views</div>
          </div>
        </div>
        <div className="flex flex-col px-2 py-4">
          <h3 className="group-hover:text-primary-500 text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </Link>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 px-2">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      )}
    </div>
  )
}
