"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface ClassifiedSectionProps {
  code: string
  title: string
  content: string
}

export function ClassifiedSection({ code, title, content }: ClassifiedSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="border border-neutral-800 p-6 relative overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 p-2 text-xs text-neutral-600">{code}</div>

      <div className="max-w-2xl space-y-4">
        <h3 className="text-sm tracking-wider text-neutral-400">{title}</h3>
        <motion.div
          className="relative"
          initial={false}
          animate={{
            filter: isHovered ? "blur(0px)" : "blur(3px)",
            opacity: isHovered ? 1 : 0.7,
          }}
        >
          <p className="text-sm leading-relaxed">{content}</p>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20 group-hover:opacity-0 transition-opacity duration-500" />
    </motion.div>
  )
}

