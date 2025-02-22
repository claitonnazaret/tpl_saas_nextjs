import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default async function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-4 text-center">
      <div className="rounded-full bg-purple-100/10 p-4">
        <AlertCircle className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Página não encontrada
      </h2>
      <p className="text-muted-foreground">
        A página que você está acessando não existe ou foi movida.
      </p>
      <Button asChild className="bg-primary/60 hover:bg-primary/70">
        <Link href="/dashboard">Retornar para Dashboard</Link>
      </Button>
    </div>
  )
}
