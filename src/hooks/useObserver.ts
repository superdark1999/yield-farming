import { useRef } from 'react'

const useObserver = ({ handleChangePage, hasMore, isLoading }) => {
  const observerRef: any = useRef()
  const lastElementRef = (node) => {
    if (observerRef.current) observerRef?.current?.disconnect()
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !isLoading) {
        handleChangePage()
      }
    })
    if (node) observerRef.current.observe(node)
  }

  return lastElementRef
}

export default useObserver
