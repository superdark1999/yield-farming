import { RefObject, useEffect, useRef, useState } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

const useIntersectionObserver = (
  elementRef: any,
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }: Args,
): IntersectionObserverEntry | undefined => {
  const observerRef = useRef(null)
  const [intEntry, setIntEntry] = useState<IntersectionObserverEntry>()

  const frozen = intEntry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setIntEntry(entry)
  }

  useEffect(() => {
    if(observerRef.current) observerRef.current?.disconnect?.()
    const node = elementRef?.current // DOM Ref

    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)
    
    observerRef.current = observer

    return () => observer.disconnect()
  }, [elementRef.current, JSON.stringify(threshold), root, rootMargin, frozen])

  return intEntry
}

export default useIntersectionObserver
