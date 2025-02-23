import { ThemeProvider } from '@/components/theme/theme-provider'

import { Toaster } from '@/components/ui/sonner'
import { auth } from '@/services/auth'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

const { APP_TITLE, APP_DESCRIPTION } = process.env

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
