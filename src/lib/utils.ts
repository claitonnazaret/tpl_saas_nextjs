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

// Numbers
export function formatCurrency(value: number, symbol: boolean = false) {
  const format = symbol
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : new Intl.NumberFormat('pt-BR', {
        style: symbol ? 'currency' : 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

  return format.format(value)
}
