import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleHover = (e) => {
      if (e.target.closest("button, a")) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-blue-600 rounded-full pointer-events-none z-[9999]"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 1.5 : 1,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  )
}

export default CustomCursor