import { motion, useScroll, useSpring } from "framer-motion"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  // smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
    />
  )
}

export default ScrollProgress