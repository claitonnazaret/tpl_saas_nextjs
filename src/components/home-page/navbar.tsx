'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Bot, Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ThemeToggle } from '../theme/theme-toggle'

export default function Navbar() {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/api/auth/signin')
  }
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between border-b border-white/10 px-6 py-4 backdrop-blur-sm"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="h-8 w-8 text-primary" />
        <span className="text-xl font-medium text-primary">ResearchAI</span>
      </Link>

      <div className="hidden items-center space-x-8 md:flex">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/how-it-works">How it Works</NavLink>
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="hidden items-center space-x-4 md:flex">
        <Button
          className="bg-primary text-white hover:bg-secondary hover:text-primary"
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <ThemeToggle />
      </div>

      <Button variant="ghost" size="icon" className="text-white md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group relative text-primary transition-colors">
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
    </Link>
  )
}
