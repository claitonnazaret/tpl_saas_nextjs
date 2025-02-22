'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FileText, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative flex min-h-[calc(100vh-76px)] items-center">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Transform Your Research with
              <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-400"
          >
            Upload your research papers and let our AI transform them into
            engaging presentations, podcasts, and visual content.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-primary/60 px-8 text-white hover:bg-primary/70"
            >
              <FileText className="mr-2 h-5 w-5" />
              Upload Paper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-white hover:bg-primary/60"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              See Examples
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
