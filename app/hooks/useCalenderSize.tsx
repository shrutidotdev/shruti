"use client"

import { useEffect, useState } from "react"

interface CalenderSize {
  block: number
  margin: number
}

function useCalenderSize(): CalenderSize {
  const [size, setSize] = useState<CalenderSize>({ block: 0, margin: 7 })

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth

      if (width < 640) {
        setSize({ block: 7, margin: 2 })
      } else if (width >= 640 && width < 1024) {
        setSize({ block: 8, margin: 2 })
      } else {
        setSize({ block: 9, margin: 3 })
      }
    }

    updateSize()

    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useCalenderSize
