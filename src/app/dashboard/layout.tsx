import { Logout } from './_components/logout'

import { auth } from '@/services/auth'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <>
      <Logout />
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      {children}
    </>
  )
}
