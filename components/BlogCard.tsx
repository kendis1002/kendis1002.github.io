'use client'

import { useState } from 'react'
import Image from '@/components/Image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'
import Link from './Link'
import Tag from './Tag'
import siteMetadata from '@/data/siteMetadata'

type BlogCardProps = {
  post: CoreContent<Blog>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, title, summary, date, tags } = post
  const formattedDate = formatDate(date, siteMetadata.locale)

  return (
    <div className="shadow-feature-card group relative rounded-xl px-4 py-4">
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-100 shadow-[0_-1px_0_rgba(200,200,200,0.2)] ring-[0.2px] ring-gray-200 dark:shadow-[0_-1px_0_rgba(180,180,180,0.2)] dark:ring-gray-400"
        aria-hidden="true"
      />
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <Image
            src={`/static/images/blog/${slug}/cover.png`}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between px-2 pt-4">
          <div className="shrink-0 text-sm text-gray-500 dark:text-gray-400">{formattedDate}</div>
          {tags && tags.length > 0 && (
            <div className="relative ml-3 flex min-w-0 flex-1 items-center justify-end overflow-hidden">
              <div className="flex max-w-full flex-nowrap items-center gap-2 overflow-hidden whitespace-nowrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col px-2 py-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{summary}</p>
        </div>
      </Link>
    </div>
  )
}
