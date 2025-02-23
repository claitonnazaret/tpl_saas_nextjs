'use client'

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { textFallback, urlDashboard } from '@/lib/utils'
import { CircleUserRound, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { NavMain } from './nav-main'

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div> */}
                <Avatar className="h-10 rounded-lg bg-foreground">
                  <AvatarImage
                    alt={'Nome da Empresa'}
                    src="https://jsonplaceholder.typicode.com/mockend.svg?height=200&width=400"
                  />
                  <AvatarFallback className="rounded-lg">
                    {textFallback('Nome da Empresa')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="justify-center text-center text-[20px] font-semibold uppercase">
                    Nome da Empresa
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <NavMain />
      <SidebarFooter>
        <small className="truncate text-end text-xs text-muted-foreground">
          {'v.1.0.0'}
        </small>
        <SidebarMenuButton asChild>
          <a href={urlDashboard('profile')}>
            <CircleUserRound />
            <span>Profile</span>
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <a href={urlDashboard('settings')}>
            <Settings />
            <span>Settings</span>
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
