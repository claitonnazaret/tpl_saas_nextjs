'use client'

import { motion } from 'framer-motion'
import { Cpu, PresentationIcon, Upload } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Paper',
    description: 'Simply drag and drop your research paper in PDF format.',
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description:
      'Our AI analyzes and extracts key information from your paper.',
  },
  {
    icon: PresentationIcon,
    title: 'Get Results',
    description: 'Receive your transformed content in multiple formats.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white/5 px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Transform your research in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6 inline-block rounded-full bg-purple-500/10 p-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
