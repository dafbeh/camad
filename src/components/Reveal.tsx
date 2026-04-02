"use client"

import { motion } from "framer-motion"

export default function Reveal({
  children,
  className = "",
  duration,
  delay,
}: {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration ?? 0.5, delay: delay ?? 0 }}
    >
      {children}
    </motion.div>
  )
}