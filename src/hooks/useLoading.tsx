import React, { useState } from 'react'

const useLoading = (timeout = 1000) => {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, timeout)
  }
  return { isLoading, handleLoading }
}

export default useLoading
