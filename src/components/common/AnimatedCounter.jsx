import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ target, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)
      
      // Ease-out function
      const eased = 1 - Math.pow(1 - percentage, 3)
      const currentCount = Math.floor(eased * target)
      
      setCount(currentCount)

      if (percentage < 1) {
        countRef.current = requestAnimationFrame(animate)
      }
    }

    countRef.current = requestAnimationFrame(animate)

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current)
      }
    }
  }, [target, duration])

  return (
    <span className="animated-counter">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
