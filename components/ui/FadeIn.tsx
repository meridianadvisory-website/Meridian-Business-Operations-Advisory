"use client"

import { motion, useReducedMotion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeIn({ children, delay, className }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        data-fadein
        className={className}
        style={{ opacity: 1 }}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      data-fadein
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: delay ?? 0 }}
    >
      {children}
    </motion.div>
  )
}
