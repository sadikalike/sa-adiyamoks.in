'use client'
import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: shouldReduce ? 0 : 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}