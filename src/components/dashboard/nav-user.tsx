'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { textFallback } from '@/lib/utils'
import { User as UserIcon } from 'lucide-react'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'

export default function NavUser({ user }: { user: User | undefined }) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <UserIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed bottom-0 left-auto top-0 z-50 mt-0 w-[20rem] rounded-t-none">
        <div className="flex w-full grow flex-col rounded-[16px] p-5">
          <DrawerHeader className="flex flex-col items-center gap-2">
            <DrawerDescription>
              <Avatar className="h-20 w-20 rounded-lg">
                <AvatarImage src={user?.image || ''} />
                <AvatarFallback className="rounded-lg">
                  {textFallback(user?.name)}
                </AvatarFallback>
              </Avatar>
            </DrawerDescription>
            <DrawerTitle>{user?.name}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col gap-2">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Email: </TableCell>
                    <TableCell>{user?.email}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="destructive" onClick={() => signOut()}>
              Sign Out
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
