import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  asLink?: boolean
}

const Tag = ({ text, asLink = true }: Props) => {
  const tagContent = (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-700">
      {text.split(' ').join('-')}
    </span>
  )

  if (asLink) {
    return <Link href={`/tags/${slug(text)}`}>{tagContent}</Link>
  }

  return tagContent
}

export default Tag
