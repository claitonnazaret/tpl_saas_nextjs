'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Bot, Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type React from 'react' // Added import for React

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
        <span className="text-xl font-medium text-white">ResearchAI</span>
      </Link>

      <div className="hidden items-center space-x-8 md:flex">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#how-it-works">How it Works</NavLink>
        <NavLink href="#examples">Examples</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden items-center space-x-4 md:flex">
          <Button
            variant="ghost"
            onClick={handleSignIn}
            className="text-white hover:text-muted-foreground"
          >
            Sign In
          </Button>
          <Button className="bg-primary/60 text-white hover:bg-primary/80">
            Register
          </Button>
        </div>

        {/* Mobile menu button - visible below md */}
        <Button variant="ghost" size="icon" className="text-white md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group relative cursor-pointer text-gray-300 transition-colors hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
    </a>
  )
}
