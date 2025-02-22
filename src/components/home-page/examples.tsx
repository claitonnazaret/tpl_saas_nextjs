'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

const imageSvg =
  'https://kzmqzs8o6gbxlxboguay.lite.vusercontent.net/placeholder.svg?height=200&width=400'

const examples = [
  {
    title: 'Research Paper to Presentation',
    description:
      'See how our AI transforms a complex paper into an engaging slide deck.',
    image: imageSvg,
  },
  {
    title: 'Paper to Infographic',
    description:
      'Visual representation of research findings in an easy-to-understand format.',
    image: imageSvg,
  },
  {
    title: 'Research Summary',
    description: 'Concise summary highlighting key findings and conclusions.',
    image: imageSvg,
  },
]

export default function Examples() {
  return (
    <section id="examples" className="px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Example Transformations
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            See how ResearchAI transforms academic papers into various formats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-white/10 bg-white/5">
                <Image
                  src={example.image || '/placeholder.svg'}
                  alt={example.title}
                  width={400}
                  height={200}
                  className="w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {example.title}
                  </h3>
                  <p className="text-gray-400">{example.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
