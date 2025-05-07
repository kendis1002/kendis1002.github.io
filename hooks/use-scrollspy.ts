import { useState, useEffect } from 'react'

export function useScrollspy(ids: string[], options: IntersectionObserverInit = {}) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)

    elements.forEach((el) => {
      if (el) {
        observer.observe(el)
      }
    })

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el)
        }
      })
    }
  }, [ids, options])

  return activeId
} 