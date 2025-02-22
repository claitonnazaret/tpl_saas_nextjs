'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$9',
    description: 'Perfect for individual researchers',
    features: [
      '5 papers per month',
      'Basic presentation templates',
      'PDF export',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for research teams',
    features: [
      '25 papers per month',
      'Premium templates',
      'All export formats',
      'Priority support',
      'Team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For institutions and organizations',
    features: [
      'Unlimited papers',
      'Custom templates',
      'API access',
      '24/7 support',
      'Advanced analytics',
      'Custom integration',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white/5 px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Simple Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400">/month</span>
                    )}
                  </div>
                  <p className="mt-2 text-gray-400">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary/60 text-white hover:bg-primary/70">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
