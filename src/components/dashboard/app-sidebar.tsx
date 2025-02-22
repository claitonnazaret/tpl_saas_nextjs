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
import { Avatar } from '@radix-ui/react-avatar'
import { CircleUserRound, Settings } from 'lucide-react'
import { AvatarFallback, AvatarImage } from '../ui/avatar'
import { NavMain } from './nav-main'

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="pointer-events-none w-full">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage alt={'Nome da Empresa'} />
                <AvatarFallback className="rounded-lg">
                  {textFallback('Empresa x')}
                </AvatarFallback>
              </Avatar>
              <span className="truncate text-[20px] font-bold uppercase">
                {'empresa x'}
              </span>
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
