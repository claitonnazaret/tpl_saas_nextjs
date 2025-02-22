import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import AppBreadcrumb from '@/components/dashboard/app-breadcrumb'
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import NavUser from '@/components/dashboard/nav-user'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Separator } from '@/components/ui/separator'
import { auth } from '@/services/auth'
import { cookies } from 'next/headers'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="h-screen overflow-hidden">
        <header className="mr-4 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="z-50 -ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AppBreadcrumb />
          </div>
          <div className="flex flex-row gap-2">
            <ThemeToggle />
            <NavUser user={session?.user} />
          </div>
        </header>
        <div className="ml-1 flex flex-1 flex-col gap-2 overflow-y-auto bg-secondary p-4">
          <div className="flex-1 rounded-xl bg-muted/20 md:min-h-min">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
