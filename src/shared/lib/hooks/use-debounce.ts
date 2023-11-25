import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number) {
  const [response, setResponse] = useState<T>()

  useEffect(() => {
    const id = setTimeout(() => {
      setResponse(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [value, delay])

  return response
}
