"use client"

import { motion } from "framer-motion"
import { Clock, Brain, Mail, Moon, Sun } from "lucide-react"

export function TimelineRedaction() {
  return (
    <div className="relative py-12 overflow-hidden">
      <motion.div
        className="flex space-x-8 items-center text-neutral-600"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Clock className="w-4 h-4" />
        <Brain className="w-4 h-4" />
        <Mail className="w-4 h-4" />
        <Moon className="w-4 h-4" />
        <Sun className="w-4 h-4" />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 bottom-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-neutral-800"
            style={{
              left: `${i * 25}%`,
              right: `${(4 - i) * 25}%`,
              top: "50%",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>

      <div className="mt-8">
        <motion.div
          className="inline-block text-xs tracking-wider px-2 py-1 border border-neutral-800 text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          TEMPORAL OPTIMIZATION ACTIVE
        </motion.div>
      </div>
    </div>
  )
}

