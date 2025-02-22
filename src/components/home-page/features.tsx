'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Bot, FileText, Share2, Zap } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Analysis',
    description:
      'Advanced machine learning algorithms analyze your research papers with high accuracy and insight.',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description:
      'Get results in seconds, not hours. Our system processes complex documents at lightning speed.',
  },
  {
    icon: FileText,
    title: 'Multiple Formats',
    description:
      'Convert your research into presentations, summaries, and visual content automatically.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description:
      'Share your transformed content with colleagues and peers with just one click.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Transform your research papers into engaging content with our
            cutting-edge features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <feature.icon className="mb-4 h-12 w-12 text-primary" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
