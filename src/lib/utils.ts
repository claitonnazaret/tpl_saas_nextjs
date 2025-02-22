import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function textFallback(text: string | null | undefined) {
  return (
    text
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase() ?? 'FB'
  )
}

export function urlDashboard(url: string = '') {
  return `/dashboard${url}`
}

export function compositeKey(...keys: unknown[]) {
  const keyString = keys.map((k) => (typeof k === 'string' ? k.toString() : k))
  return keyString.join('-')
}
