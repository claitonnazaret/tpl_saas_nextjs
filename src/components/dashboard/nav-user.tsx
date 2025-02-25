'use client'

import { Button } from '@/components/ui/button'
import { textFallback } from '@/lib/utils'
import { UserIcon } from 'lucide-react'
import { User } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export default function NavUser({ user }: { user: User | undefined }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Editar Perfil">
          <UserIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">Perfil do usuário</SheetTitle>
          <SheetDescription className="flex justify-center">
            <Avatar className="h-20 w-20 rounded-lg">
              <AvatarImage src={user?.image || ''} />
              <AvatarFallback className="rounded-lg">
                {textFallback(user?.name)}
              </AvatarFallback>
            </Avatar>
          </SheetDescription>
        </SheetHeader>
        <div className="grid w-full gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={user?.name as string}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              value={user?.email as string}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Salvar alterações</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
