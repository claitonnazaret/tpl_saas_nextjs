'use client'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().nonempty({ message: 'Digite seu email' }).email({
    message: 'Digite um email válido',
  }),
  password: z.string().nonempty({
    message: 'Digite sua senha',
  }),
})

export function LoginForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    const { email, password } = data
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          console.error(callback.code)
          toast.error('Erro', {
            description: callback.code,
          })
          return
        }
        toast.success('Redirecionando...', {
          duration: 1000,
          onAutoClose: () => {
            router.push('/dashboard')
          },
        })
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>Email</Label>
              <FormControl>
                <Input type="email" placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label>Senha</Label>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </FormProvider>
  )
}
