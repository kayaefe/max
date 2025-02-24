"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react" // Added import for React

export function SignupForm() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log("Email submitted:", email)
    setEmail("")
    setIsRevealed(false)
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {!isRevealed ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Button
              variant="outline"
              onClick={() => setIsRevealed(true)}
              className="text-xs tracking-widest border-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              REQUEST TEMPORAL ACCESS CLEARANCE
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 items-start max-w-md"
          >
            <Input
              type="email"
              placeholder="ENTER CLEARANCE EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-neutral-800 text-sm placeholder:text-neutral-700"
            />
            <Button type="submit" className="bg-white text-black hover:bg-neutral-200 text-xs tracking-widest">
              SUBMIT FOR CLEARANCE
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

