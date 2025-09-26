'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'

const Header = () => {
  const pathname = usePathname()
  let headerClass =
    'bg-background/30 dark:bg-background-dark/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-60 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => {
              const isActive = link.href === pathname
              return (
                <div
                  key={link.title}
                  className="relative flex h-[60px] items-center justify-center"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'rounded-sm px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-gray-900 dark:text-gray-100'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                    )}
                  >
                    {link.title}
                  </Link>
                  {isActive && (
                    <>
                      <div className="absolute bottom-0 left-1/2 h-[2px] w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff1c1c] to-transparent" />

                      <div className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur-sm dark:bg-[rgb(223_29_72)]" />
                    </>
                  )}
                </div>
              )
            })}
        </div>
        {/* <SearchButton /> */}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
