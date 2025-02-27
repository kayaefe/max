"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

interface SignupFormProps {
  isDarkMode?: boolean
}

export function SignupForm({ isDarkMode = true }: SignupFormProps) {
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
              className={`w-full text-center py-3 ${
                isDarkMode 
                  ? 'border-neutral-800 hover:bg-neutral-900 text-white' 
                  : 'border-neutral-200 hover:bg-neutral-100 text-black'
              } transition-colors`}
            >
              Get Started with MAX
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-3 rounded ${
                isDarkMode
                  ? 'bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500'
                  : 'bg-white border-neutral-200 text-black placeholder:text-neutral-400'
              }`}
            />
            <Button 
              type="submit" 
              className={`w-full py-3 rounded ${
                isDarkMode
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              Start Free Trial
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

