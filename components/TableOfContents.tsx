'use client'

import { useScrollspy } from '../hooks/use-scrollspy'
import { useRouter } from 'next/navigation'

type TOC = {
  url: string
  title: string
  depth: number
  content?: string
}

type TableOfContentsProps = {
  toc: TOC[]
}

const TableOfContents = (props: TableOfContentsProps) => {
  const { toc } = props
  const activeId = useScrollspy(
    toc.map((item) => item.url),
    { rootMargin: '0% 0% -80% 0%' }
  )
  const router = useRouter()

  return (
    <div className="hidden pl-4 lg:block">
      <div className="mb-4 text-sm font-medium text-gray-900 dark:text-gray-100">
        Trên trang này
      </div>
      <nav className="space-y-4 text-sm">
        {toc.map((item) => (
          <div key={item.url} className="group">
            <a
              href={`#${item.url}`}
              className={`hover:text-primary-500 dark:hover:text-primary-400 block py-1 ${
                activeId === item.url
                  ? 'text-primary-500 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              style={{
                paddingLeft: `${(item.depth - 1) * 12}px`,
              }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.url)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <span className="font-medium">{item.content}</span>
            </a>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default TableOfContents
